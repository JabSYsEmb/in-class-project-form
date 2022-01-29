import { useState } from "react"

const RegistrationFrom = () => {
    const [name, setName] = useState("Name")
    const [email, setEmail] = useState("mail address")
    const [phone, setPhone] = useState("(000)-222-33-33")
    const [password, setPassword] = useState("Password")
    const [submission, setSubmision] = useState([])

    const handleOnChangeName = (e) => {
        console.log("name is being changed",e.target.value)
        setName(e.target.value)
    }

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleOnChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(e)
        setSubmision([<div key={name}>{name} , {email} , {phone} , {password} </div>])
        console.log(submission)
    }
    return (
        <form className="registration-from">
             <p>name    : <input value={name}  onChange={handleOnChangeName}/></p>
             <p>email    : <input value={email}  onChange={handleOnChangeEmail}/></p>
             <p>phone    : <input value={phone}  onChange={handleOnChangePhone}/></p>
             <p>password    : <input value={password}  onChange={handleOnChangePassword}/></p>
             <button type="submit" onClick={onSubmitHandler}>submit</button>
             <h1 className="submission-header">Submitted Data</h1>
            <div className="submission">
                {submission}
            </div>
        </form>
    )
}

export default RegistrationFrom;