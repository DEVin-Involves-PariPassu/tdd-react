import * as S from './styles'


const Radio = ({
  label,
  labelFor,
  value,
  name
}) => {

  return (
    <S.Wrapper>
      <S.Input 
        id={labelFor}
        type="radio"
        value={value}
        name={name}
      />
      <S.Label htmlFor={labelFor} >
        {label}
      </S.Label>
    </S.Wrapper>
  )
}

export default Radio;