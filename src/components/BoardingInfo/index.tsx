import { InfoData } from '../BoardingPass/BoardingPass.style'
import {
  InfoColumn,
  QRCodeColumn,
  Root,
  Row,
  StylePadding,
} from './BoardingInfo.style'
import { QRCodeSVG } from 'qrcode.react'

interface BoardingInfoProps {
  open: boolean
}
export const BoardingInfo = ({ open }: BoardingInfoProps) => {
  return (
    <Root open={open}>
      <StylePadding>
        <Row>
          <InfoColumn>
            <InfoData>
              <div>
                <p>Embarque</p>
                <p>
                  <strong>16:15</strong>
                </p>
              </div>
            </InfoData>
            <InfoData>
              <div>
                <p>Terminal</p>
                <p>
                  <strong>2</strong>
                </p>
              </div>
            </InfoData>
            <InfoData>
              <div>
                <p>Portão</p>
                <p>
                  <strong>15</strong>
                </p>
              </div>
            </InfoData>
          </InfoColumn>
          <QRCodeColumn>
            <QRCodeSVG
              value="https://tuliooov.github.io/my-portfolio/"
              size={160}
            />
            <p>Grupo de embarque: 3</p>
          </QRCodeColumn>
        </Row>
        <p>
          <strong>Atenção:</strong> o portão fecha 16:45
        </p>
      </StylePadding>
    </Root>
  )
}
