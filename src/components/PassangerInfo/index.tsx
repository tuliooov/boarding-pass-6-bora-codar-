import { MouseEvent } from 'react'
import { Dashed, InfoData } from '../BoardingPass/BoardingPass.style'
import { Card, Root } from './PassangerInfo.style'
import { CutTop } from '../CutTop'
import { CutBottom } from '../CutBottom'
interface PassangerInfoProps {
  onClick: () => void
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

export const PassangerInfo = ({
  onClick,
  onCut,
  cutted,
  open,
}: PassangerInfoProps) => {
  return (
    <Root cutted={cutted} onClick={onClick}>
      <Dashed />
      <CutTop cutted={cutted} onCut={onCut} open={open} />
      <Card>
        <InfoData>
          <div>
            <p>Passageiro</p>
            <p>
              <strong>Rodrigo Terron</strong>
            </p>
          </div>
          <div>
            <p>Assento</p>
            <p>
              <strong>28A</strong>
            </p>
          </div>
        </InfoData>
      </Card>
      <Dashed />
      <CutBottom cutted={cutted} onCut={onCut} open={open} />
    </Root>
  )
}
