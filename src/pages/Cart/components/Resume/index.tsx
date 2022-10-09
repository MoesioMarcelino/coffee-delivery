import { Minus, Plus } from 'phosphor-react'
import { Button } from '../../../../components'
import {
  Container,
  ItemsContainer,
  Item,
  Image,
  Main,
  ActionsContainer,
  Title,
  Counter,
  ButtonAction,
  Value,
  Divider,
  Summary,
  Tax,
  Total,
} from './styles'

export function Resume() {
  return (
    <Container>
      <ItemsContainer>
        {[1, 2, 3].map((i) => (
          <Item key={i}>
            <Image src="/images/arabe.png" alt="" />
            <Main>
              <Title>Expresso Tradicional</Title>
              <ActionsContainer>
                <Counter>
                  <ButtonAction>
                    <Minus weight="fill" size={14} />
                  </ButtonAction>
                  <span>1</span>
                  <ButtonAction>
                    <Plus weight="fill" size={14} />
                  </ButtonAction>
                </Counter>
              </ActionsContainer>
            </Main>
            <Value>R$ 9,90</Value>
          </Item>
        ))}
      </ItemsContainer>

      <Divider />

      <Summary>
        <span>Total de Itens</span>
        <span>R$ 29,70</span>
      </Summary>

      <Tax>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </Tax>

      <Total>
        <span>Total</span>
        <span>R$ 33,20</span>
      </Total>

      <Button background="yellow" color="#fff">
        Confirmar pedido
      </Button>
    </Container>
  )
}
