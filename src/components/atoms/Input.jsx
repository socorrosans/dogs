import './input.css';

export default function Input({type, id,...props}){
  return(
    <input type={type} className="form-input" id={id}/>
  )
}