import styled from 'styled-components'

export const ListFileItem = styled.li`
  list-style: none;
  margin: 1.2em 0;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 1.2em 1.5em;

  .svg {
      color: #f55321;
      &:first-child {
          font-size: 1.2em;
          margin-right: 0.8em;
      }
}
`

export const FileName =  styled.p`
  flex: 1;
  font-size: 0.9rem;
`

export const Action = styled.div`
      justify-self: flex-end;
      cursor: pointer;

      .fa-spinner {
        font-size: 1.2em;
      }
`