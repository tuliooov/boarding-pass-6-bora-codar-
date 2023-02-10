import styled from 'styled-components'

export const Root = styled.div`
  background: linear-gradient(135deg, transparent 10px, #fff 0) top left,
    linear-gradient(225deg, transparent 10px, #fff 0) top right,
    linear-gradient(315deg, transparent 10px, #fff 0) bottom right,
    linear-gradient(45deg, transparent 10px, #fff 0) bottom left;
  background-image: radial-gradient(
      circle at 0 0,
      rgba(204, 0, 0, 0) 14px,
      #fff 15px
    ),
    radial-gradient(circle at 100% 0, rgba(204, 0, 0, 0) 14px, #fff 15px),
    radial-gradient(circle at 100% 100%, rgba(204, 0, 0, 0) 14px, #fff 15px),
    radial-gradient(circle at 0 100%, rgba(204, 0, 0, 0) 14px, #fff 15px);
  background-size: 52% 52%;
  background-repeat: no-repeat;
  padding: 1.5rem 2rem;
  min-width: 327px;
`
