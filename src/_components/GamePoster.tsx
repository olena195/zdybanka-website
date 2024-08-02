export default () => (<div className={'w-full px-12 relative overflow-hidden'}>
    <img
            height={'320'}
            width={'1024'}
            alt={''}
            className={'w-full h-full flex-1 left-0 absolute blur object-cover'}
            src="./assets/images/poster.png"
            transform-images="avif webp 800@2 800@3 180@2 180@3"
    />
    <img
            height={'320'}
            width={'1024'}
            alt={'name'}
            className={'w-full my-12 relative flex-1 max-w-screen-lg mx-auto max-h-80 object-contain'}
            src="./assets/images/poster-title.svg"
    />
</div>)
