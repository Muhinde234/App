const Button = ({type="submit", children, onClick}) => {
    return(
        <button
            type={type}
            onClick={onClick}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {children}
        </button>
    )
}

export default Button