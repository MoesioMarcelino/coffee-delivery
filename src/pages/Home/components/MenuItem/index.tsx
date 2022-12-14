import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { ItemMenu, useCart } from '../../../../hooks/Cart'

import {
  Container,
  Image,
  Tags,
  Tag,
  Title,
  Subtitle,
  Footer,
  Price,
  ActionsContainer,
  Value,
  Counter,
  Button,
  Icon,
} from './styles'
import { useState } from 'react'

export function MenuItem({
  id,
  image,
  tags,
  title,
  subtitle,
  value,
}: ItemMenu) {
  const { addItemToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  const item: ItemMenu = {
    id,
    image,
    tags,
    title,
    subtitle,
    value,
    amount: quantity,
  }

  function incrementQuantity() {
    setQuantity(quantity + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <Container>
      <Image src={`/images/${image}`} alt={title} />

      {tags.length > 0 && (
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      )}

      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <Footer>
        <Price>
          R$ <Value>{value}</Value>
        </Price>
        <ActionsContainer>
          <Counter>
            <Button onClick={decrementQuantity}>
              <Minus weight="fill" size={14} />
            </Button>
            <span>{quantity}</span>
            <Button onClick={incrementQuantity}>
              <Plus weight="fill" size={14} />
            </Button>
          </Counter>
          <Icon onClick={() => addItemToCart(item)}>
            <ShoppingCart weight="fill" size={22} />
          </Icon>
        </ActionsContainer>
      </Footer>
    </Container>
  )
}
