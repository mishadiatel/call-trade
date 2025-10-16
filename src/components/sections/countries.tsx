'use client'
import Image from "next/image";
import {useTranslations} from "use-intl";

export default function Countries() {
    const t = useTranslations('Countries')

    const countries = [
        {flag: '/countries/ukraine.svg', label: t('ua')},
        {flag: '/countries/spain.svg', label: t('es')},
        {flag: '/countries/italy.svg', label: t('it')},
        {flag: '/countries/pt.svg', label: t('pt')},
        {flag: '/countries/hu.svg', label: t('hu')},
        {flag: '/countries/bg.svg', label: t('bg')},
        {flag: '/countries/gr.svg', label: t('gr')},
        {flag: '/countries/ro.svg', label: t('ro')},
        {flag: '/countries/cz.svg', label: t('cz')},
        {flag: '/countries/sk.svg', label: t('sk')},
        {flag: '/countries/pl.svg', label: t('pl')},
    ]
    return (
        <section id={'countries'} className={'mt-15 lg:mt-20'}>
            <div className="container">
                <div className={'text-center font-bold text-[24px] lg:text-[32px] text-violet mb-5 lg:mb-10'}>{t('title')}</div>

                <div className={'shadow-box w-full lg:px-10 flex flex-wrap items-center justify-center'}>
                    {countries.map(country => (
                        <div key={Math.random()} className={'flex flex-col items-center justify-center p-4 lg:p-8 '}>
                            <Image src={country.flag} alt={'flag'} width={100} height={100} />
                            <span className={'font-light text-2xl text-dark-gray'}>{country.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}