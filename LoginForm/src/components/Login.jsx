import { useState } from "react";
import useForm from "../customHooks/useForm";
import InputField from "./inputfield";

function LoginForm()
{

    const fields = [
  { name: "name", placeholder: "Enter your name", required: true },
  { name: "email", placeholder: "Enter your email", required: true, validate: (v) => v.includes("@"), errorMessage: "Invalid email" },
  { name: "password", placeholder: "Enter password", required: true, validate: (v) => v.length >= 6, errorMessage: "Min 6 characters" },
  { name: "confirmPassword", placeholder: "Confirm password", required: true }
];
const [isSubmitted, setIsSubmitted]= useState(false);
const {formData, error ,errorField, handleChange ,handleSubmit} =useForm({name: "", email: "", password: "", confirmPassword:""}, fields);


return(
            <form onSubmit={handleSubmit((data)=>{
                alert(JSON.stringify(data))
            })}>
{
    
    fields.map((field)=>(
        <div key={field.name}>
            <label>{field.name}: </label>
            <br />
            <InputField 
                name={field.name} 
                placeholder={field.placeholder}
                onChange = {handleChange}
                value ={formData[field.name]}
            />
            {
                isSubmitted && error && errorField === field.name && <p style={{color: "red"}}>{error}</p> 
            }
        </div>
    ))
}
<button type="submit" onClick={()=>setIsSubmitted(true)}>Submit</button>
</form>
);
}
export default LoginForm;