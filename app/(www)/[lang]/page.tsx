import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
    const { page } = await getDictionary(lang)

    return (
        <section className='p-8'>
            <div className='container'>
                <h1 className='text-3xl font-bold'>{page.home.title}</h1>
                <p className='text-gray-500'>{page.home.description}</p>
                <div className='h-[1000px]'>a</div>
                <LocaleSwitcher />
                <ThemeSwitcher />
            </div>
        </section>
    )
}
