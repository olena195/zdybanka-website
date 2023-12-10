export const lang = ['en', 'uk']
export const layout = 'base.jsx'



export const title = "page title";

export const bannerTitle = 'Thank You for Supporting Ukraine!'

export const uk = {
    title: 'заголовок',
    bannerTitle: 'Дякую за підтримку України!'
}
export default ({title = '', bannerTitle, comp}) => {
    return (
            <>
                <comp.flagBanner text={bannerTitle}/>
            </>
    );
};
