import { PersonProps } from "./Person.types"

export const Person = (props:PersonProps) => {
  return (
    <div>
        <div>{props.name.first} {props.name.last}</div>
    </div>
  )
}
