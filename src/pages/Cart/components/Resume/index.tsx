import { Minus, Plus, Trash } from 'phosphor-react'
import { Button } from '../../../../components'
import { useCart } from '../../../../hooks/Cart'
import {
  Container,
  ItemsContainer,
  Item,
  ItemDivider,
  Image,
  Main,
  ActionsContainer,
  Info,
  Title,
  CounterAction,
  DeleteAction,
  ButtonAction,
  Value,
  ResumeContainer,
  Summary,
  Tax,
  Total,
} from './styles'

export function Resume() {
  const { items, deleteItemFromCart, addItemToCart, decrementItemFromCart } =
    useCart()

  const tax = 3.5
  const totalPartial = items.reduce(
    (prev, { amount, value }) => prev + amount * Number(value),
    0,
  )
  const total = totalPartial + tax

  function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <Container>
      <ItemsContainer>
        {items.map(({ id, image, title, amount, value }, index) => (
          <div key={`coffee-option-${id}`}>
            <Item>
              <Main>
                <Image src={`/images/${image}`} alt={title} />
                <Info>
                  <Title>{title}</Title>
                  <ActionsContainer>
                    <CounterAction>
                      <ButtonAction
                        onClick={() => {
                          amount > 1
                            ? decrementItemFromCart({
                                ...items[index],
                                amount: 1,
                              })
                            : deleteItemFromCart(id)
                        }}
                      >
                        <Minus weight="fill" size={14} />
                      </ButtonAction>
                      <span>{amount}</span>
                      <ButtonAction
                        onClick={() =>
                          addItemToCart({ ...items[index], amount: 1 })
                        }
                      >
                        <Plus weight="fill" size={14} />
                      </ButtonAction>
                    </CounterAction>
                    <DeleteAction onClick={() => deleteItemFromCart(id)}>
                      <ButtonAction>
                        <Trash size={14} />
                      </ButtonAction>
                      <span>Remover</span>
                    </DeleteAction>
                  </ActionsContainer>
                </Info>
              </Main>
              <Value>{formatCurrency(+value)}</Value>
            </Item>
            <ItemDivider />
          </div>
        ))}
      </ItemsContainer>

      <ResumeContainer>
        <Summary>
          <span>Total de Itens</span>
          <span>{formatCurrency(totalPartial)}</span>
        </Summary>

        <Tax>
          <span>Entrega</span>
          <span>{formatCurrency(tax)}</span>
        </Tax>

        <Total>
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </Total>
      </ResumeContainer>

      <Button background="yellow" color="#fff">
        Confirmar pedido
      </Button>
    </Container>
  )
}
