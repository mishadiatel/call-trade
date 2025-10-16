'use client'
import Image from "next/image";
import {useTranslations} from "use-intl";

export default function WhatYouHave () {
    const t = useTranslations('WhatYouHave');
    const whatYouHaveItems = [
        {
            image: '/whatyouhave/1.svg',
            title: t('item1.title'),
            text: t('item1.description'),
        },
        {
            image: '/whatyouhave/2.svg',
            title: t('item2.title'),
            text: t('item2.description'),
        },
        {
            image: '/whatyouhave/3.svg',
            title: t('item3.title'),
            text: t('item3.description'),
        },
        {
            image: '/whatyouhave/4.svg',
            title: t('item4.title'),
            text: t('item4.description'),
        },
        {
            image: '/whatyouhave/5.svg',
            title: t('item5.title'),
            text: t('item5.description'),
        },
        {
            image: '/whatyouhave/6.svg',
            title: t('item6.title'),
            text: t('item6.description'),
        },
    ]
    return (
        <section className={'relative mt-15 lg:mt-20'} id={'whatYouHave'}>
            <div className={'hidden lg:block absolute right-0 top-[241px] bg-white-3 w-1/2 h-[1414px] -z-[1]'}></div>
            <div className={'container relative'}>
                <span className={'font-bold text-[24px] lg:text-[32px] text-violet  block mb-4'}>Что вы получаете</span>
                <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-box relative bg-white'}>
                    {whatYouHaveItems.map(item => (
                        <div key={Math.random()} className={'flex flex-col items-start px-4 py-10 lg:px-10 lg:py-11 bordered-element'}>
                            <Image src={item.image} alt={'image'} width={88} height={84} className={'mg-5 lg:mb-[45px] w-[88px] h-[84px]'} />
                            <span className={'text-lg text-dark-gray block mb-1'}>{item.title}</span>
                            <p className={'font-light text-dark-gray text-lg'}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}