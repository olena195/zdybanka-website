export default ({children, latestRelease}: any) => {
    const urls = latestRelease.map(a => a.browser_download_url).filter(u => u.endsWith('.zip'))
    const defaultUrl = urls.find(u => u.endsWith('pc.zip'))
    const macosUrl = urls.find(u => u.endsWith('mac.zip'))
    const winUrl = urls.find(u => u.endsWith('win.zip'))

    const clickHandlerScript = `this.href = /Mac/.test(window.navigator.platform) ? "${macosUrl}" : /Win/.test(window.navigator.platform) ? "${winUrl}" : this.href`

    return (
            <a
                    className={'block rounded-full text-4xl border-2 border-current px-8 py-4 text-center font-light uppercase'}
                    href={defaultUrl}
                    onclick={clickHandlerScript}
            >
                {children}
            </a>
    );
}
