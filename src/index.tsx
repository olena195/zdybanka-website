export const lang = ['en', 'uk']
export const layout = 'base.jsx'


export const title = "page title";

export const bannerTitle = 'Thank You for Supporting Ukraine!'

export const downloadText = 'Download'


export const support = {
    title: 'Support us',
    text: 'Support'
}

export const uk = {
    title: 'заголовок',
    bannerTitle: 'Дякую за підтримку України!',
    support: {
        title: 'Підримати нас',
        text: 'підтримати',
    },
}
export default ({title = '', bannerTitle = '', downloadText = '', support, comp}) => {
    return (
            <>
                <div class={'flex flex-col items-center'}>
                    <comp.flagBanner text={bannerTitle}/>
                    {/*<img*/}
                    {/*        alt={'name'}*/}
                    {/*        src="./hero-bg.png"*/}
                    {/*        transform-images="avif webp 320@2 320@3 180@2 180@3"*/}
                    {/*        transformImages="avif webp 320@2 320@3 180@2 180@3"*/}
                    {/*/>*/}

                    <comp.HeroSection title={'GAME TITLE'}
                                      description={'AWESOME GAME AWESOME GAME AWESOME GAME AWESOME GAME AWESOME GAME AWESOME GAME '}
                                      download={downloadText}/>

                    <comp.ContentSection id={'download'}>
                        <h2>{downloadText}</h2>

                        <ul>
                            <li>Windows</li>
                            <li>Linux</li>
                            <li>MacOS</li>
                            <li>Online</li>
                        </ul>
                    </comp.ContentSection>


                    <comp.ContentSection id={'support'}>
                        <h2>{support.title}</h2>
                        <p>{support.text}</p>
                    </comp.ContentSection>
                </div>
            </>
    );
};
