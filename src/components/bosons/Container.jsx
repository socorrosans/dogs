import './container.css';

export default function Container(props){
  return (
    <main className="container-main">{props.children}</main>
  )
}