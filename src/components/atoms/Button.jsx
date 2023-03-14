import './button.css';

export default function Button({type, name}){
  return(
    <button type={type} className="btn">{name}</button>
  )
}