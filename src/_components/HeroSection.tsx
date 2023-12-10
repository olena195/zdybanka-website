export default ({
                    title = '',
                    description = '',
                    download = ''
                }) => {
    return <section>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="#download">{download}</a>
    </section>
}
