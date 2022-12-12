import { Minus, Plus, Trash } from 'phosphor-react'
import { Button } from '../../../../components'
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
  return (
    <Container>
      <ItemsContainer>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i}>
            <Item>
              <Main>
                <Image src="/images/arabe.png" alt="" />
                <Info>
                  <Title>Expresso Tradicional</Title>
                  <ActionsContainer>
                    <CounterAction>
                      <ButtonAction>
                        <Minus weight="fill" size={14} />
                      </ButtonAction>
                      <span>1</span>
                      <ButtonAction>
                        <Plus weight="fill" size={14} />
                      </ButtonAction>
                    </CounterAction>
                    <DeleteAction>
                      <ButtonAction>
                        <Trash size={14} />
                      </ButtonAction>
                      <span>Remover</span>
                    </DeleteAction>
                  </ActionsContainer>
                </Info>
              </Main>
              <Value>R$ 9,90</Value>
            </Item>
            <ItemDivider />
          </div>
        ))}
      </ItemsContainer>

      <ResumeContainer>
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
      </ResumeContainer>

      <Button background="yellow" color="#fff">
        Confirmar pedido
      </Button>
    </Container>
  )
}
