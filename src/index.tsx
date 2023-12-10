export const lang = ['en', 'uk']
export const layout = 'base.jsx'


export const title = "page title";

export const bannerTitle = 'Thank You for Supporting Ukraine!'

export const uk = {
    title: 'заголовок',
    bannerTitle: 'Дякую за підтримку України!'
}
export default ({title = '', bannerTitle = '', comp}) => {
    return (
            <>
                <comp.flagBanner text={bannerTitle}/>
                {/*<img*/}
                {/*        alt={'name'}*/}
                {/*        src="./hero-bg.png"*/}
                {/*        transform-images="avif webp 320@2 320@3 180@2 180@3"*/}
                {/*        transformImages="avif webp 320@2 320@3 180@2 180@3"*/}
                {/*/>*/}

                <comp.HeroSection title={'GAME TITLE'}
                                  description={'AWESOME GAME AWESOME GAME AWESOME GAME AWESOME GAME AWESOME GAME AWESOME GAME '}
                                  download={'Download'}/>
            </>
    );
};
