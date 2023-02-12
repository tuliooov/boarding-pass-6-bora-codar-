import styled, { css } from 'styled-components'

export const Root = styled.div<{
  cutted: {
    top: boolean
    bottom: boolean
  }
}>`
  -webkit-transition: margin-top 1s, margin-bottom 1s;
  -moz-transition: margin-top 1s, margin-bottom 1s;
  -ms-transition: margin-top 1s, margin-bottom 1s;
  -o-transition: margin-top 1s, margin-bottom 1s;
  transition: margin-top 1s, margin-bottom 1s;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition-delay: 1.5s;
  ${({ cutted }) =>
    cutted.top &&
    css`
      margin-top: 1rem;
    `}
  ${({ cutted }) =>
    cutted.bottom &&
    css`
      margin-bottom: 1rem;
    `}
`

export const Card = styled.div`
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
      rgba(204, 0, 0, 0) 14px,
      var(--background-boarding-pass) 15px
    ),
    radial-gradient(
      circle at 0 100%,
      rgba(204, 0, 0, 0) 14px,
      var(--background-boarding-pass) 15px
    );
  background-size: 52% 52%;
  background-repeat: no-repeat;
  padding: 1.5rem 2rem;
  min-width: 327px;
`
