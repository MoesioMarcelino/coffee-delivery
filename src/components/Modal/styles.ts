import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Backdrop = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  opacity: 0.6;
`

const fade = keyframes`
  0%,100% { opacity: 0 }
  50% { opacity: 1 }
`

export const BoxContainer = styled.div`
  z-index: 11;
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 50%;
  height: 50%;
  /* position: relative; */
  /* transition: ${fade} 5s ease-in-out; */
  /* animation: ${fade} 3s ease; */
  transition-timing-function: ease-in;
  transition: 0.2s;
`

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  h2 {
    margin-right: auto;
  }

  svg {
    cursor: pointer;
  }
`

export const Title = styled.h2``
