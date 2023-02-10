import { InfoData } from '../BoardingPass/BoardingPass.style'
import { Root } from './PassangerInfo.style'

export const PassangerInfo = () => {
  return (
    <Root>
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
    </Root>
  )
}
