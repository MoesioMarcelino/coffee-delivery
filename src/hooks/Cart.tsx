import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

export type ItemMenu = {
  id: string
  tags: string[]
  title: string
  subtitle: string
  value: string
  amount: number
  image: string
}

type ResumeCart = {
  total: number
  items: ItemMenu[]
}

export type ClientInfoProps = {
  name: string
  surname?: string
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

interface CartHookProps {
  items: ItemMenu[]
  total: number
  clientInfo: ClientInfoProps
  updateClientInfo: (info: ClientInfoProps) => void
  addItemToCart: (item: ItemMenu) => void
  decrementItemFromCart: (item: ItemMenu) => void
  deleteItemFromCart: (id: string) => void
}

interface CartProviderProps {
  children: ReactNode
}

interface ManageItemsProps {
  item: ItemMenu
  index: number
  total: number
}

const CartContext = createContext<CartHookProps>({} as CartHookProps)

const CART_KEY_STORAGE = '@coffeeDelivery:cart'

function CartProvider({ children }: CartProviderProps) {
  const [{ items, total }, setItems] = useState<ResumeCart>(() => {
    const storage = localStorage.getItem(CART_KEY_STORAGE)

    if (storage) {
      return JSON.parse(storage)
    }

    return {
      items: [],
      total: 0,
    }
  })

  const [clientInfo, setClientInfo] = useState<ClientInfoProps>(
    {} as ClientInfoProps,
  )

  useEffect(() => {
    localStorage.setItem(CART_KEY_STORAGE, JSON.stringify({ items, total }))
  }, [items, total])

  function updateClientInfo(info: ClientInfoProps) {
    setClientInfo(info)
  }

  function incrementItemToCart({ item, index, total }: ManageItemsProps) {
    return setItems({
      items: items.map((i, idx) => ({
        ...i,
        amount: index === idx ? i.amount + item.amount : i.amount,
      })),
      total,
    })
  }

  function addItemToCart(newItem: ItemMenu) {
    const indexFinded = items.findIndex(({ id }) => id === newItem.id)
    const total =
      items.reduce(
        (prevAmount, { amount: currentAmount }) => prevAmount + currentAmount,
        0,
      ) + newItem.amount

    if (indexFinded >= 0) {
      return incrementItemToCart({ item: newItem, index: indexFinded, total })
    }

    setItems({
      items: [...items, newItem],
      total,
    })
  }

  function decrementItemFromCart(newItem: ItemMenu) {
    const indexFinded = items.findIndex(({ id }) => id === newItem.id)
    const total =
      items.reduce((prevAmount, { amount }) => prevAmount + amount, 0) -
      newItem.amount

    return setItems({
      items: items.map((i, index) => ({
        ...i,
        amount: index === indexFinded ? i.amount - 1 : i.amount,
      })),
      total,
    })
  }

  function deleteItemFromCart(itemId: string) {
    const itemsFiltered = items.filter(({ id }) => id !== itemId)
    const total = items.reduce(
      (prev, { id, amount }) => prev + (id === itemId ? 0 : amount),
      0,
    )
    setItems({
      items: itemsFiltered,
      total,
    })
  }

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        clientInfo,
        updateClientInfo,
        addItemToCart,
        decrementItemFromCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart(): CartHookProps {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with CartProvider')
  }

  return context
}

export { CartProvider, useCart }
