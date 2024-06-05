
type InputValType = string | number


const Box = <T extends InputValType>({label, value, onChange}:{label:string, value:T, onChange: () => void}) => {
    
  return (
    <form>
        <label></label>
        <input type="text" value={value} onChange={onChange}></input>
        <button type="submit">Submit the value</button>
    </form>
  )
}

export default Box