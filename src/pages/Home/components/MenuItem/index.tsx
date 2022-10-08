import { ShoppingCart, Minus, Plus } from 'phosphor-react'

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

interface MenuItemProps {
  image: string
  tags: string[]
  title: string
  subtitle: string
  value: string
  amount: number
}

export function MenuItem({
  image,
  tags,
  title,
  subtitle,
  value,
  amount,
}: MenuItemProps) {
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
            <Button>
              <Minus weight="fill" size={14} />
            </Button>
            <span>{amount}</span>
            <Button>
              <Plus weight="fill" size={14} />
            </Button>
          </Counter>
          <Icon>
            <ShoppingCart weight="fill" size={22} />
          </Icon>
        </ActionsContainer>
      </Footer>
    </Container>
  )
}
