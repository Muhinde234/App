
const Input = ({type, id, value, onChange, placeholder, ...props}) => {
    return(
        <input
              type={type}
              id={id}
              value={value}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
              placeholder={placeholder}
              {...props}
            />
    )
}


export default Input;