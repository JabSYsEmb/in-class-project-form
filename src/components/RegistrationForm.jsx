import { useState } from "react"
import InputElement from "./InputElement"

const RegistrationFrom = () => {
    const [data, setData] = useState({
        name: "name",
        email: "email",
        phone: "phone",
        password: "password"
    })

    const [name, setName] = useState("Name")
    const [email, setEmail] = useState("mail address")
    const [phone, setPhone] = useState("(000)-222-33-33")
    const [password, setPassword] = useState("Password")
    const [submission, setSubmision] = useState([])

    const handleOnChangeName = (e) => {
        console.log(e)
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
        setSubmision(submission.concat([<div key={name}>{name} , {email} , {phone} , {password} </div>]))
        console.log(submission)
    }
    return (
        <form className="registration-from">
            <InputElement type="name" value={name} onChange={handleOnChangeName}/>
            <InputElement type="email" value={email} onChange={handleOnChangeEmail}/>
            <InputElement type="tel" value={phone} onChange={handleOnChangePhone}/>
            <InputElement type="password" value={password} onChange={handleOnChangePassword}/>
             <button type="submit" onClick={onSubmitHandler}>submit</button>
             <h1 className="submission-header">Submitted Data</h1>
             <div className="submission">
                {submission}
             </div>
        </form>
    )
}

export default RegistrationFrom;