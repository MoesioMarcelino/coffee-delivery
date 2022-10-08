import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Button } from '../../../../components'

import {
  Container,
  HeaderContainer,
  TextsContainer,
  Title,
  Subtitle,
  ButtonContainer,
} from './styles'

export function PaymentMethod() {
  return (
    <Container>
      <HeaderContainer>
        <CurrencyDollar size={22} />
        <TextsContainer>
          <Title>Pagamento</Title>
          <Subtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Subtitle>
        </TextsContainer>
      </HeaderContainer>

      <ButtonContainer>
        <Button selected>
          <CreditCard size={22} />
          Cartão de crédito
        </Button>
        <Button>
          <Money size={22} />
          Cartão de débito
        </Button>
        <Button>
          <Bank size={22} />
          Dinheiro
        </Button>
      </ButtonContainer>
    </Container>
  )
}
