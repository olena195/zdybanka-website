export const layout = 'base.jsx'


export const title = "page title";

export const bannerTitle = 'Thank You for Supporting Ukraine!'

export const downloadText = 'Download'


export const support = {
    title: 'Support us',
    text: 'Support'
}

export const disclaimer = {
    title: 'Увага!',
    text: 'Гра містить сцени жорстокості та насильства'
}

// export const uk = {
//     title: 'заголовок',
//     bannerTitle: 'Дякую за підтримку України!',
//     downloadText: 'downloadText',
//     support: {
//         title: 'Підримати нас',
//         text: 'підтримати',
//     },
//     disclaimer: {
//         title: 'Увага!',
//         text: 'Гра містить сцени жорстокості та насильства'
//     }
// }

type Props = typeof import('./index.tsx') & { comp: Record<string, any> }

export default ({title, bannerTitle, downloadText, support, disclaimer, comp}: Props) => {
    return (
            <>
                <div class={'flex flex-col items-center'}>
                    <comp.flagBanner text={bannerTitle}/>
                    <comp.GamePoster/>

                    <comp.AlertInfo>
                        <h2 className={'text-5xl'}>{disclaimer.title}</h2>
                        <p className={'text-2xl'}>{disclaimer.text}</p>
                    </comp.AlertInfo>

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
