import styled from 'styled-components'

export const Main = styled.div`
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const OpenButton = styled.button`
  all: unset;
  background-color: var(--button);
  font-size: 18px;
  padding: 1em 2em;
  border-radius: 8px;
  transition: background-color 0.2s;
  cursor: pointer;
  width: fit-content;
  :hover {
    opacity: 0.8;
  }
`

export const Texts = styled.div`
  h1 {
    color: var(--text);
    font-size: 42px;
  }
  h1 strong {
    color: var(--text-primary);
  }

  p {
    color: var(--text);
    font-size: 18px;
  }

  p strong {
    color: var(--text-primary);
  }
`

export const TextsContainer = styled.div`
  color: var(--text);
  font-size: 24px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  footer {
    position: fixed;
    bottom: 2rem;
    font-size: 16px;
  }

  footer a {
    text-decoration: none;
    color: var(--text-primary);
  }
`
