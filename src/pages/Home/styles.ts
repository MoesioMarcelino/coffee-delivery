import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;

  padding: 34px 56px;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;

  color: ${({ theme }) => theme['base-subtitle']};
`

export const ItemsContainer = styled.div`
  display: flex;
  gap: 48px 40px;
  flex-wrap: wrap;
`
