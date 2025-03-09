interface Iprops {
  name: string
  age: number
  height?: number
}
const Download = (props: Iprops) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age:{props.age}</div>
      <div>height:{props.height}</div>
    </div>
  )
}

export default Download
