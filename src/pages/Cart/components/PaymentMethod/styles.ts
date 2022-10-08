import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`

export const HeaderContainer = styled.div`
  display: flex;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
  margin-top: -2px;
`

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-text']};
`

export const ButtonContainer = styled.div`
  margin-top: 32px;

  display: flex;
  gap: 24px;
`
