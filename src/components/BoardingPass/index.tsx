import { BoardingInfo } from '../BoardingInfo'
import { FlightInfo } from '../FlightInfo'
import { PassangerInfo } from '../PassangerInfo'
import { Dashed, Root } from './BoardingPass.style'

export const BoardingPass = () => {
  return (
    <Root>
      <FlightInfo />
      <Dashed />
      <PassangerInfo />
      <Dashed />
      <BoardingInfo />
    </Root>
  )
}
