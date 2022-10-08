import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
`

const ActionBase = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ActionsContainer = styled(ActionBase)`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const LocationContainer = styled(ActionBase)`
  gap: 8px;
  background: ${({ theme }) => theme['purple-light']};
  padding: 10px;
  border-radius: 6px;
  color: ${({ theme }) => theme['purple-dark']};

  svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const ShoppingCartContainer = styled(ActionBase)`
  gap: 8px;
  background: ${({ theme }) => theme['yellow-light']};
  padding: 10px;
  border-radius: 6px;
  color: ${({ theme }) => theme['yellow-dark']};
  cursor: pointer;
  position: relative;

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const BadgeValue = styled.div`
  min-height: 24px;
  min-width: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 700;

  border-radius: 50%;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme['yellow-dark']};

  position: absolute;
  transform: translate(80%, -95%);
`
