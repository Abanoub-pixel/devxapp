const InputCell = (handleChange) => {
    
    return ( 
    <input onChange={(e)=>handleChange(e.target.value)} type="text" style={{backgroundColor:"red"}}/>
     );
}
 
export default InputCell;