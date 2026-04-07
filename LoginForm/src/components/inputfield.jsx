
function InputField({name, placeholder, onChange, value})
{
    return(
        <input type="text" name={name}  value={value} placeholder={placeholder} onChange={onChange} />
    )

}
export default InputField;