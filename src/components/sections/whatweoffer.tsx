'use client';
import Image from "next/image";
import Icon from "@/components/ui/svgIcon/Icon";
import {useTranslations} from "use-intl";

export default function WhatWeOffer() {
    const t = useTranslations('Offer');
    return (
        <section className={'mt-15 lg:mt-20 relative'} id={'offer'}>
            <div className="container flex flex-col lg:flex-row max-lg:gap-10 justify-between items-end">
                <div className={'flex flex-col  w-full max-w-full lg:w-[430px] lg:max-w-[45%]'}>
                    <Image src={'/offer/offer1.png'} alt={''} width={430} height={504} className={'mb-10 block mx-auto'} />
                    <span className={'font-bold text-[24px] lg:text-[32px] text-violet  block mb-4'}>{t('item1.title')}</span>
                    <p className={'font-light text-lg text-dark-gray mb-4'}>{t('item1.p')}</p>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                            <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                            <span>{t('item1.listItem1')}</span>
                        </div>
                        <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                            <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                            <span>{t('item1.listItem2')}</span>
                        </div>
                        <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                            <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                            <span>{t('item1.listItem3')}</span>
                        </div>
                        <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                            <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                            <span>{t('item1.listItem4')}</span>
                        </div>
                        <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                            <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                            <span>{t('item1.listItem5')}</span>
                        </div>
                        <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                            <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                            <span>{t('item1.listItem6')}</span>
                        </div>
                        <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                            <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                            <span>{t('item1.listItem7')}</span>
                        </div>

                    </div>
                </div>
                <div className={'flex flex-col  w-full max-w-full lg:w-[430px] lg:max-w-[45%]'}>
                    <Image src={'/offer/offer2.png'} alt={''} width={430} height={504} className={'mb-10 block mx-auto'} />
                    <span className={'font-bold text-[24px] lg:text-[32px] text-violet block mb-4'}>{t('item2.title')}</span>
                    <p className={'font-light text-lg text-dark-gray mb-4 lg:mb-[134px]'}>{t('item2.p')}</p>
                    <div className={'flex items-center gap-4 py-3 px-5 text-dark-gray text-lg bg-[#F2E8FF]'}>
                        <Image src={'/offer/no-calls-icon.svg'} alt={'icon'} width={45} height={45}  />
                        <span>{t('noCalls')}</span>
                    </div>
                </div>
            </div>
            <Image src={'/decoration.svg'} alt={''} width={800} height={987}
                   className={'absolute max-w-[70%] right-0 top-0 lg:top-[-55px] -z-[2]'}/>
        </section>
    )
}