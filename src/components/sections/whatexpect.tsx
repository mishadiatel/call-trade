'use client';
import Image from "next/image";
import {useTranslations} from "use-intl";

export default function WhatExpect() {
    const t = useTranslations('WhatExpect');
    return (
        <section className={'mt-15 lg:mt-20'} id={'whatExpect'}>
            <div className="container">
                <span
                    className={'font-bold text-[24px] lg:text-[32px] text-violet  block mb-4'}>{t('title')}</span>
                <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}>
                    <div
                        className={'violet-card flex flex-col py-10 px-4 lg:px-6 lg:py-[31px] bg-violet text-white border border-[#E3E3E3]'}>
                        <Image src={'/whatexpect/1.svg'} alt={'icon'} width={70} height={60}
                               className={'mb-5 lg:mb-[30px]'}/>
                        <span className={'font-semibold text-lg mb-1'}>{t('item1.title')}</span>
                        <p className={'font-light text-lg'}>{t('item1.text')}</p>
                    </div>
                    <div
                        className={'violet-card flex flex-col py-10 px-4 lg:px-6 lg:py-[31px] bg-violet text-white border border-[#E3E3E3]'}>
                        <Image src={'/whatexpect/2.svg'} alt={'icon'} width={70} height={60}
                               className={'mb-5 lg:mb-[30px]'}/>
                        <span className={'font-semibold text-lg mb-1'}>{t('item2.title')}</span>
                        <p className={'font-light text-lg'}>{t('item2.text')}</p>
                    </div>
                    <div
                        className={'violet-card flex flex-col py-10 px-4 lg:px-6 lg:py-[31px] bg-violet text-white border border-[#E3E3E3]'}>
                        <Image src={'/whatexpect/3.svg'} alt={'icon'} width={70} height={60}
                               className={'mb-5 lg:mb-[30px]'}/>
                        <span className={'font-semibold text-lg mb-1'}>{t('item3.title')}</span>
                        <p className={'font-light text-lg'}>{t('item3.text')}</p>
                    </div>
                    <div
                        className={'violet-card flex flex-col py-10 px-4 lg:px-6 lg:py-[31px] bg-violet text-white border border-[#E3E3E3]'}>
                        <Image src={'/whatexpect/4.svg'} alt={'icon'} width={70} height={60}
                               className={'mb-5 lg:mb-[30px]'}/>
                        <span className={'font-semibold text-lg mb-1'}>{t('item4.title')}</span>
                        <ul>
                            <li>{t('item4.listItem1')}</li>
                            <li>{t('item4.listItem2')}</li>
                            <li>{t('item4.listItem3')}</li>
                            <li>{t('item4.listItem4')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}