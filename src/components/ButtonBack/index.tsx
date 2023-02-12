import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Root } from './ButtonBack.style'

interface ButtonBackProps {
  onClose: (value: boolean) => () => void
}

export const ButtonBack = ({ onClose }: ButtonBackProps) => {
  return (
    <Root onClick={onClose(false)}>
      <AiOutlineCloseCircle size={24} />
    </Root>
  )
}
