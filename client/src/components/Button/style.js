import styled from "styled-components";

export const ContainerButton = styled.div`
  margin: 10px;
  width: ${props => props.widthButton ? props.widthButton : '150px'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 7px 7px 13px 4px black;

    :hover{
      box-shadow: 7px 7px 13px 4px black;
      background-color: ${props => props.buttonColor};
      cursor: pointer;
    }
`

export const ButtonStyle = styled.input`
  display: none;
`

export const SendLabel = styled.label`
  padding: 5px;
  font: 28px Courier, monospace;
  color: #003049;
  cursor: pointer;
`