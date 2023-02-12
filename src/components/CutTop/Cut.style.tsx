import styled, { css } from 'styled-components'

export const Root = styled.div<{ cutted: boolean; open: boolean }>`
  -webkit-transition: right 1s, opacity 0.2s;
  -moz-transition: right 1s, opacity 0.2s;
  -ms-transition: right 1s, opacity 0.2s;
  -o-transition: right 1s, opacity 0.2s;
  transition: right 1s, opacity 0.2s;
  position: absolute;
  transform: rotate(180deg);
  right: -20px;
  top: -15px;
  cursor: pointer;
  path {
    color: var(--cut-color);
    filter: drop-shadow(0px 3px 3px var(--color-boarding-pass));
  }
  ${({ cutted }) =>
    cutted
      ? css`
          right: 320px;
        `
      : css``}
  ${({ open }) =>
    open
      ? css`
          transition-delay: 1s;
          opacity: 1;
        `
      : css`
          transition-delay: 0.5s;
          opacity: 0;
        `}
`
