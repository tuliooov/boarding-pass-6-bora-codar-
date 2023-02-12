import styled from 'styled-components'

export const Root = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: background-color 0.2s;

  :hover {
    background-color: #00000012;
  }
`
