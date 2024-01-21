export default ({children, comp}: any) => (<comp.ContentSection>
            <div role={'alert'} className={'grid gap-6 bg-slate-900 text-center border-4 rounded-md border-current p-4 m-5'}>
                {children}
            </div>
        </comp.ContentSection>
)
