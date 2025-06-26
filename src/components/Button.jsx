import "../styles/Button.scss"

function Button({
text,
...props

}) {

  return (
    <button 
      className='btn btn__primary'
    >{text}</button>
  )
}

export default Button