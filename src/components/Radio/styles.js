import styled from 'styled-components'
import { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.2rem solid #de0202;
  border-radius: 50%;
  background: transparent;
  transition: background 0.1s ease-in-out;
  outline: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0.5rem #de0202;
  }

  &:before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: #de0202;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
    position: absolute;
  }

  &:checked {
    &:before {
      opacity: 1;
    }
  }
`

export const Label = styled.label`
 ${({labelColor}) => css`
    color: ${labelColor};
    padding-left: 0.8rem;
    line-height: 1;
 `} 
`