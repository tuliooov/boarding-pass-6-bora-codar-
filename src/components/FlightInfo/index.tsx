import { Airports, Root } from './FlightInfo.style'
import { IoMdAirplane } from 'react-icons/io'
import { InfoData } from '../BoardingPass/BoardingPass.style'

export const FlightInfo = () => {
  return (
    <Root>
      <InfoData>
        <div>
          <p>Voo</p>
          <p>
            <strong>RS995</strong>
          </p>
        </div>
        <div>
          <p>Data</p>
          <p>
            <strong>23/05/2023</strong>
          </p>
        </div>
      </InfoData>

      <Airports>
        <div>
          <p>São Paulo, Brasil</p>
          <p>São Francisco, EUA</p>
        </div>
        <div>
          <p>
            <strong>GRU</strong>
          </p>
          <IoMdAirplane size={24} />
          <p>
            <strong>SFO</strong>
          </p>
        </div>
        <div>
          <p>17:00</p>
          <p>
            04:48
            <span>+1</span>
          </p>
        </div>
      </Airports>
    </Root>
  )
}
