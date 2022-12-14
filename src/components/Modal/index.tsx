import { ReactNode } from 'react'
import { useModal } from '../../hooks/Modal'
import { X } from 'phosphor-react'
import { Container, Backdrop, BoxContainer, Header, Title } from './styles'

interface ModalProps {
  title?: string
  children: ReactNode
}

export function Modal({ title = 'teste', children }: ModalProps) {
  const { updateModalStatus } = useModal()
  return (
    <Container>
      <Backdrop onClick={() => updateModalStatus(false)} />
      <BoxContainer>
        <Header>
          {title && <Title>{title}</Title>}
          <X size={32} weight="fill" onClick={() => updateModalStatus(false)} />
        </Header>
        {children}
      </BoxContainer>
    </Container>
  )
}
