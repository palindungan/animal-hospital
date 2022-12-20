type GreetProps = {
    name:string
};

export const Greet = (props:GreetProps) => {
  return (
    <div>
        <div>Welcome {props.name} !. you have 10 unread messages </div>
    </div>
  )
}
