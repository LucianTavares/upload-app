import * as React from 'react'
import { ButtonStyle, ContainerButton, SendLabel } from './style'

const Button = ({
  type,
  children,
  label,
  value,
  buttonColor,
  handleChange,
  widthButton,
  name
}) => {

  return (
    <ContainerButton
      buttonColor={buttonColor}
      widthButton={widthButton}
    >
      <SendLabel>
        {label}
        <ButtonStyle
          type={type}
          value={value}
          multiple
          onChange={handleChange}
          name={name}
        >
          {children}
        </ButtonStyle>
      </SendLabel>
    </ContainerButton>
  )

}

export default Button;