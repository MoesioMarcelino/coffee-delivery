import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components'
import { ClientInfoProps, useCart } from '../../../../hooks/Cart'

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
  const { updateClientInfo, clientInfo } = useCart()

  function updateInfo(field: keyof ClientInfoProps, value: string) {
    updateClientInfo({ ...clientInfo, [field]: value })
  }

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
        <Row>
          <Input
            type="text"
            placeholder="Nome"
            defaultValue={clientInfo.name}
            onBlur={(e) => updateInfo('name', e.target.value)}
          />
          <Input
            type="text"
            placeholder="Sobrenome"
            optional="enabled"
            defaultValue={clientInfo.surname}
            onBlur={(e) => updateInfo('surname', e.target.value)}
          />
        </Row>
        <Input
          type="text"
          placeholder="CEP"
          defaultValue={clientInfo.zipCode}
          onBlur={(e) => updateInfo('zipCode', e.target.value)}
        />
        <Input
          type="text"
          placeholder="Rua"
          defaultValue={clientInfo.street}
          onBlur={(e) => updateInfo('street', e.target.value)}
        />
        <Row>
          <Input
            type="text"
            placeholder="Número"
            defaultValue={clientInfo.number}
            onBlur={(e) => updateInfo('number', e.target.value)}
          />
          <Input
            type="text"
            placeholder="Complemento"
            optional="enabled"
            defaultValue={clientInfo.complement}
            onBlur={(e) => updateInfo('complement', e.target.value)}
          />
        </Row>
        <Row>
          <Input
            type="text"
            placeholder="Bairro"
            defaultValue={clientInfo.neighborhood}
            onBlur={(e) => updateInfo('neighborhood', e.target.value)}
          />
          <Input
            type="text"
            placeholder="Cidade"
            defaultValue={clientInfo.city}
            onBlur={(e) => updateInfo('city', e.target.value)}
          />
          <Input
            type="text"
            placeholder="UF"
            defaultValue={clientInfo.uf}
            onBlur={(e) => updateInfo('uf', e.target.value)}
          />
        </Row>
      </InputsContainer>
    </Container>
  )
}
