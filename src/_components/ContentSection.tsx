export default ({children, id}: any) => {
    return (
            <section id={id} className={'w-full max-w-screen-lg px-4 py-4'}>
                {children}
            </section>
    )
}
