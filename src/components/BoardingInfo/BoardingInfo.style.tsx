import styled, { css } from 'styled-components'

export const StylePadding = styled.div`
  padding: 1.5rem 2rem;
`

export const Root = styled.div<{ open: boolean }>`
  background: linear-gradient(
        135deg,
        transparent 10px,
        var(--background-boarding-pass) 0
      )
      top left,
    linear-gradient(225deg, transparent 10px, var(--background-boarding-pass) 0)
      top right,
    linear-gradient(315deg, transparent 10px, var(--background-boarding-pass) 0)
      bottom right,
    linear-gradient(45deg, transparent 10px, var(--background-boarding-pass) 0)
      bottom left;
  background-image: radial-gradient(
      circle at 0 0,
      rgba(204, 0, 0, 0) 14px,
      var(--background-boarding-pass) 15px
    ),
    radial-gradient(
      circle at 100% 0,
      rgba(204, 0, 0, 0) 14px,
      var(--background-boarding-pass) 15px
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(204, 0, 0, 0) 0px,
      var(--background-boarding-pass) 0px
    ),
    radial-gradient(
      circle at 0 100%,
      rgba(204, 0, 0, 0) 0px,
      var(--background-boarding-pass) 0px
    );
  background-size: 52% 52%;
  background-repeat: no-repeat;
  border-radius: 0 0 1.5rem 1.5rem;
  padding: 1.5rem 2rem;
  min-width: 327px;
  -webkit-transition: max-height 1s;
  -moz-transition: max-height 1s;
  -ms-transition: max-height 1s;
  -o-transition: max-height 1s;
  transition: max-height 1s;
  overflow: hidden;
  max-height: 0;
  padding: 0;
  transition-delay: 1s;
  ${({ open }) =>
    open
      ? css`
          max-height: 300px;
          transition-delay: 0s;
        `
      : css`
          max-height: 0;
        `}
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`
export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const QRCodeColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  p {
    font-size: 0.9rem;
  }
`
