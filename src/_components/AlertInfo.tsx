export default ({children, comp}) => (<comp.ContentSection>
            <div role={'alert'} className={'grid gap-6 text-center border-8 rounded-md border-current p-4 m-5'}>
                {children}
            </div>
        </comp.ContentSection>
)
