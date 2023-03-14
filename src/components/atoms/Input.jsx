import './input.css';

export default function Input({type, id, onchange}){
  return (
  <input type={type} className="form-input" id={id} onChange={onchange}/>
  )
}