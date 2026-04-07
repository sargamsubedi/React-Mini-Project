import { useState } from "react";

function useForm(initialValue, fields)
{
    const [formData,setFormData]= useState(initialValue);
   const [error, setError] =useState(""); 
    const [errorField, setErrorField] =useState("");
    function handleChange(e)
    {
        const {name, value} =e.target;
        setFormData(prev=>({...prev,[name]: value}))
    }

    function handleSubmit(callback)
    {
        return function(e)
        {
            e.preventDefault();
            
            setError("");
            setErrorField("");

            for (const field of fields) {
                const value = formData[field.name];

                if(field.required && !value.trim())
                {
                    setError(`${field.name} cannot be empty`);
                    setErrorField(field.name);
                    return;
                }

                if(field.validate && !field.validate(value))
                {
                    setError(field.errorMessage);
                    setErrorField(field.name);

                    return;
                }

                
            }
            if(formData.confirmPassword!==formData.password)
            {
                setError("Confirm password should be same as password");
                    setErrorField("confirmPassword");

                return;
            }
            callback(formData);
            setFormData(initialValue) // reset form after successful submission
        }
    }

    return {formData, error ,errorField, handleChange ,handleSubmit};
}
export default useForm;