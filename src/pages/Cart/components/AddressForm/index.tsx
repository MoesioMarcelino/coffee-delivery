import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components'

import {
  Container,
  HeaderContainer,
  TextsContainer,
  Title,
  Subtitle,
  InputsContainer,
  Row,
} from './styles'

export function AddressForm() {
  return (
    <Container>
      <HeaderContainer>
        <MapPinLine size={22} />
        <TextsContainer>
          <Title>Endereço de Entrega</Title>
          <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
        </TextsContainer>
      </HeaderContainer>

      <InputsContainer>
        <Input type="text" placeholder="CEP" />
        <Input type="text" placeholder="Rua" />
        <Row>
          <Input type="text" placeholder="Número" />
          <Input type="text" placeholder="Complemento" optional="enabled" />
        </Row>
        <Row>
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" />
        </Row>
      </InputsContainer>
    </Container>
  )
}
