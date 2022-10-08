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
    color: ${({ theme }) => theme['yellow-dark']};
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

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;
`

export const Row = styled.div`
  display: flex;
  gap: 12px;

  > div {
    flex: 1;
  }
`
