function Button({ children, estilo }) {
    return (
        <button className={ estilo }>
            { children }
        </button>
    )
}

export default Button;