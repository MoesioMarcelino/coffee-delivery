import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`

export const ItemsContainer = styled.div``

export const Item = styled.div``

export const Image = styled.img``

export const Main = styled.div``

export const ActionsContainer = styled.div``

export const Title = styled.div``

export const Counter = styled.div`
  display: flex;
  align-items: center;
  height: 38px;

  padding: 8px;

  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-title']};
  border-radius: 6px;
  gap: 4px;

  span {
    width: 20px;
    text-align: center;
  }
`

export const ButtonAction = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.purple};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme['purple-dark']};
  }
`

export const Value = styled.div``

export const Divider = styled.div``

export const Summary = styled.div``

export const Tax = styled.div``

export const Total = styled.div``
