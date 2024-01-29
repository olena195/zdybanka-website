export const layout = 'base.jsx'

export const title = "Цей сайт призначений для осіб старше 18 років";
export const description = 'Вам виповнилось 18 років?'

type Props = typeof import('./__adult-warning.tsx') & { comp: Record<string, any> }

export default ({comp, title, description}: Props) => (
        <div className={'flex flex-col items-center justify-center min-h-[100dvh]'}>
            <comp.ContentSection>
                <div className={'text-red-400 text-center grid gap-8 place-items-center'}>

                    <h1 className={'text-2xl'}>{title}</h1>
                    <p className={'text-xl'}>{description}</p>
                    <a className={'text-xl px-8 py-4 bg-red-800 text-red-100 rounded'}
                            data-action={'accept-adult-warning'}
                       onclick={'document.cookie = "is-disclamer-accepted=1; path=/; expires="+ new Date(Date.now() + 1000*60*60*24*7).toGMTString();location.reload();return false;'}
                       href="#">Так</a>
                </div>
            </comp.ContentSection>
        </div>
            )
