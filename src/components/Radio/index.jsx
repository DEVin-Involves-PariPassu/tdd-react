import * as S from './styles'

const Radio = ({
  label,
  labelFor,
  labelColor = "black",
  value,
  name,
  onCheck
}) => {

  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input 
        id={labelFor}
        type="radio"
        value={value}
        name={name}
        onChange={onChange}
      />
      {!!label && 
        <S.Label htmlFor={labelFor} labelColor={labelColor} >
          {label}
        </S.Label>
      }
    </S.Wrapper>
  )
}

export default Radio;