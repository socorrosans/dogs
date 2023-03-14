import './button.css';

export default function Button({type, name, ...props}){
  return (
    <button type={type} className="btn">{name}</button>
  )
}