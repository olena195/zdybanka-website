export default () => (<div className={'w-full  border-b-2 border-current overflow-hidden'}>
    <img
            alt={''}
            className={'w-full flex-1 max-h-80 object-cover blur-lg absolute'}
            src="./assets/images/poster.png"
            transform-images="avif webp 800@2 800@3 180@2 180@3"
    />
    <img
            alt={'name'}
            className={'w-full flex-1 max-w-screen-lg max-h-80 object-cover absolute mx-[50%] -translate-x-2/4'}
            src="./assets/images/poster.png"
            transform-images="avif webp 800@2 800@3 180@2 180@3"
    />
    <img
            alt={'name'}
            className={'max-h-80 object-fit relative mx-[50%] -translate-x-2/4'}
            src="./assets/images/poster-dottore.png"
            transform-images="avif webp 800@2 800@3 180@2 180@3"
    />
</div>)
