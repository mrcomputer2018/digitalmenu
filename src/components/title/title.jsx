function Title({ titulo, subtitulo }) {
    return (
        <>
            <h1 className="titulo text-center">{ titulo }</h1>

            <p className="subtitulo text-center">
                { subtitulo }
            </p>
        </>
    );
}

export default Title;