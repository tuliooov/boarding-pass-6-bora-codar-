import { MouseEvent } from 'react'
import { Root } from './Cut.style'
import { BiCut } from 'react-icons/bi'

interface CutProps {
  open: boolean
  onCut: (props: {
    top: boolean
    bottom: boolean
  }) => (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
  cutted: {
    top: boolean
    bottom: boolean
  }
}

export const CutTop = ({ cutted, onCut, open }: CutProps) => {
  return (
    <Root
      open={open}
      cutted={cutted.top}
      onClick={(e) => {
        onCut({ ...cutted, top: !cutted.top })(e)
      }}
    >
      {/* <FaTape size={24} className={cutted.top ? 'cutted' : 'not-cutted'} /> */}
      <BiCut size={24} className={cutted.top ? 'not-cutted' : 'cutted'} />
    </Root>
  )
}
