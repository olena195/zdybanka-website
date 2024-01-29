export default ({children, latestRelease}: any) => (
        <a className={'rounded text-4xl border-4 border-current px-8 py-4 bg-sky-300 text-sky-800 text-center font-black uppercase'}
           href={latestRelease}>
            {children}
        </a>
)
