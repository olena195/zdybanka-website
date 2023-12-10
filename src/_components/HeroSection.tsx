export default ({
                    title = '',
                    description = '',
                    download = ''
                }) => {
    return <section class={'flex flex-col px-2 py-10 items-center justify-center gap-32'}>
        <h1 class={'font-extrabold text-center'}>{title}</h1>
        <p class={'mt-6 text-lg text-center max-w-3xl mx-auto'}>{description}</p>
        <div class={'flex flex-col gap-1 items-center justify-center'}>
            <a href="#download"
               class={'bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center'}>{download}</a>
            <a href="#download" class={'text-sky-700 decoration-dashed underline decoration-1'}>Other platforms</a>
        </div>
    </section>
}
