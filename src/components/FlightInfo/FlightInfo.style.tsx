import styled from 'styled-components'

export const Root = styled.div`
  background: linear-gradient(135deg, transparent 10px, #fff 0) top left,
    linear-gradient(225deg, transparent 10px, #fff 0) top right,
    linear-gradient(315deg, transparent 10px, #fff 0) bottom right,
    linear-gradient(45deg, transparent 10px, #fff 0) bottom left;
  background-image: radial-gradient(
      circle at 0 0,
      rgba(204, 0, 0, 0) 0px,
      #fff 0px
    ),
    radial-gradient(circle at 100% 0, rgba(204, 0, 0, 0) 0px, #fff 0px),
    radial-gradient(circle at 100% 100%, rgba(204, 0, 0, 0) 14px, #fff 15px),
    radial-gradient(circle at 0 100%, rgba(204, 0, 0, 0) 14px, #fff 15px);
  background-size: 52% 54%;
  background-repeat: no-repeat;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 1.5rem 2rem;
  min-width: 327px;
`

export const Airports = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  line-height: 1.2;
  p {
    font-size: 0.8rem;
    span {
      font-size: 0.5rem;
      position: relative;
      top: -10px;
    }
  }
  strong {
    font-size: 2.5rem;
  }
  svg {
    rotate: 90deg;
  }
`
