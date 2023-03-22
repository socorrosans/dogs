import {Input} from '../atoms';

export default function UserData({name, labelFor, inputType}){
  return(
    <>
      <label htmlFor={labelFor}>{name}</label>
      <Input type={inputType} id={labelFor}/>
    </>
  )
}