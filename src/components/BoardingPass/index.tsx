import { MouseEvent, useState } from 'react'
import { BoardingInfo } from '../BoardingInfo'
import { FlightInfo } from '../FlightInfo'
import { PassangerInfo } from '../PassangerInfo'
import { Root } from './BoardingPass.style'

export const BoardingPass = () => {
  const [open, setOpen] = useState(false)
  const [cutted, setCutted] = useState({
    top: false,
    bottom: false,
  })

  const handleCut =
    (props: { top: boolean; bottom: boolean }) =>
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      e?.stopPropagation()
      setCutted(props)
    }

  const handleOpenCard = () => {
    setOpen(!open)
  }

  return (
    <Root>
      <FlightInfo open={cutted.top ? true : open} />
      <PassangerInfo
        onClick={handleOpenCard}
        open={open}
        onCut={handleCut}
        cutted={cutted}
      />
      <BoardingInfo open={cutted.bottom ? true : open} />
    </Root>
  )
}
