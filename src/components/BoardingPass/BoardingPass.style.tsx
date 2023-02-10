import styled from 'styled-components'

export const Root = styled.div`
  * {
    color: var(--color-boarding-pass);
    strong,
    svg,
    path {
      color: var(--color-boarding-pass-strong);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Dashed = styled.div`
  border: 0.5px dashed #545454;
  background: white;
  width: 90%;
`

export const InfoData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.8rem;
  strong {
    font-size: 1rem;
  }
  div:nth-child(2) {
    text-align: end;
  }
`
