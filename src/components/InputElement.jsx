const InputElement = ({type,value, onChange}) => {
    return(
        <p> {type} : <input value={value} onChange={onChange}></input></p>
    )
}

export default InputElement;