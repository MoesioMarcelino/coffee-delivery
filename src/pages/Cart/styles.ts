import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 32px;

  flex-wrap: wrap;

  padding: 0 24px;
`

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  flex: 3;
`

export const CartEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 24px;

  height: calc(100vh - 260px);

  img {
    width: 500px;
  }
`
