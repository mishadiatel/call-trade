'use client'
import Image from "next/image";
import {useTranslations} from "use-intl";

export default function Footer () {
    const t = useTranslations('Contact');
    return (
        <footer className={'bg-dark-gray'} id={'contacts'}>
            <div className="container py-[55px]">
                <div className={'flex flex-col lg:flex-row lg:justify-between gap-5'}>
                    <span className={'block w-full lg:w-[417px] max-w-full text-white font-light text-[32px] lg:text-[45px]'}>{t('title')}</span>
                    <div className={'flex flex-col gap-6'}>
                        <div className={'flex flex-col'}>
                            <span className={'text-white text-lg font-light'}>{t('mailLabel')}</span>
                            <a href={'mailto:hr.callcenter2024@gmail.com'} className={'text-white text-lg font-light'}>hr.callcenter2024@gmail.com</a>
                        </div>
                        <div className={'flex flex-col'}>
                            <span className={'text-white text-lg font-light'}>{t('phoneLabel')}</span>
                            <a href={'tel:+380506176823'} className={'text-white text-lg font-light'}>+380506176823</a>
                        </div>
                    </div>
                    <Image src={'/logo-white.svg'} alt={'logo'} width={325} height={79}
                           className={''}/>
                </div>
            </div>
        </footer>
    )
}