import { AddressForm, PaymentMethod, Resume } from './components'

import { Container, LeftSideContainer } from './styles'

export function Cart() {
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
