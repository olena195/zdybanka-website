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
                <div className={'flex flex-col items-center'}>
                    <comp.flagBanner text={bannerTitle}/>
                    <comp.GamePoster/>

                    <comp.AlertInfo>
                        <h2 className={'text-5xl'}>{disclaimer.title}</h2>
                        <p className={'text-2xl'}>{disclaimer.text}</p>
                    </comp.AlertInfo>

                    <comp.DownloadLink>
                        Завантажити
                    </comp.DownloadLink>

                    <comp.ContentSection>
                        <div className={'border-y border-current py-12 grid gap-4 uppercase my-12'}>
                            <p>
                                гра "Лабораторія Дотторе: смертельне лікування" це візуальна новела, створена на основі
                                інформації та персонажів гри Genshin impact виключно заради фану.
                            </p>

                            <p>
                                ви мандруєте по сумеру у пошуках ліків від елеазару, який турбує вас не один рік. під
                                час подорожі ви приходите до міста, де за чутками вчені винайшли препарат від цієї
                                хвороби і їм потрібні бажаючі його тестувати.
                                раптом ви зустрінете загадкового чоловіка, який представляється вченим академії, який
                                майже все життя присвятив дослідженню елеазару і пропонує вам свою допомогу.
                            </p>

                            <p>
                                як краще вчинити? чи будуть архонти до тебе прихильними? чи вдасться вилікуватися?
                                качайте гру і дізнайтеся, чим закінчиться ця невелика пригода.
                            </p>

                            <p>
                                гра містить кілька гілок сюжету та кінцівок, які залежать виключно від вашого вибору.
                                бажаємо удачі!
                            </p>
                        </div>
                    </comp.ContentSection>

                </div>
            </>
    );
};
