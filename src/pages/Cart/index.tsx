import { useCart } from '../../hooks/Cart'
import { AddressForm, PaymentMethod, Resume } from './components'

import { Container, LeftSideContainer, CartEmptyContainer } from './styles'

export function Cart() {
  const { total } = useCart()

  if (total === 0) {
    return (
      <CartEmptyContainer>
        <img src="./cart-empty.svg" alt="Carrinho vazio" />
        <h2>Carrinho vazio</h2>
      </CartEmptyContainer>
    )
  }

  return (
    <Container>
      <LeftSideContainer>
        <AddressForm />
        <PaymentMethod />
      </LeftSideContainer>
      <Resume />
    </Container>
  )
}
