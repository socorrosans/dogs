import './grid.css';

export default function Grid(props){
  return(
    <section className="grid-home">
      {props.children}
    </section>
  )
}