export default ({children, id}) => {
    return (
            <section id={id} class={'w-full max-w-screen-lg px-4 py-4'}>
                {children}
            </section>
    )
}
