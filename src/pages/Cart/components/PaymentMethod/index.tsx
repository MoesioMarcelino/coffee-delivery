/* eslint-disable no-unused-vars */
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../../../../components'

import {
  Container,
  HeaderContainer,
  TextsContainer,
  Title,
  Subtitle,
  ButtonContainer,
} from './styles'

enum PaymentMethodEnum {
  CREDIT = 1,
  DEBIT = 2,
  CASH = 3,
}

export function PaymentMethod() {
  const [method, setMethod] = useState<PaymentMethodEnum>(
    PaymentMethodEnum.CREDIT,
  )

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
        <Button
          selected={method === PaymentMethodEnum.CREDIT}
          onClick={() => setMethod(PaymentMethodEnum.CREDIT)}
        >
          <CreditCard size={22} />
          Cartão de crédito
        </Button>
        <Button
          selected={method === PaymentMethodEnum.DEBIT}
          onClick={() => setMethod(PaymentMethodEnum.DEBIT)}
        >
          <Bank size={22} />
          Cartão de débito
        </Button>
        <Button
          selected={method === PaymentMethodEnum.CASH}
          onClick={() => setMethod(PaymentMethodEnum.CASH)}
        >
          <Money size={22} />
          Dinheiro
        </Button>
      </ButtonContainer>
    </Container>
  )
}
