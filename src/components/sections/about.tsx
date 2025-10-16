'use client';
import Image from "next/image";
import Icon from "@/components/ui/svgIcon/Icon";
import {useTranslations} from "use-intl";

export default function About() {
    const t = useTranslations('About')
    return (
        <section className={'relative mt-15 lg:mt-[160px]'} id={'about'}>
            <div className="container flex flex-col gap-15 lg:gap-[160px]">
                <div className={'flex flex-col lg:flex-row justify-between gap-5 items-center'}>
                    <Image src={'/about/about1.png'} width={490} height={336} alt={''}/>
                    <div className={'flex flex-col w-full max-w-full lg:w-[512px] lg:max-w-1/2 '}>
                        <span className={'font-bold text-[24px] lg:text-[32px] text-violet  block mb-4'}>{t('item1.title')}</span>
                        <p className={'font-light text-lg text-dark-gray mb-4'}>{t('item1.p1')}</p>
                        <p className={'font-light text-lg text-dark-gray'}>{t('item1.p2')}</p>
                    </div>
                </div>
                <div className={'flex flex-col lg:flex-row-reverse justify-between gap-5 items-center'}>
                    <Image src={'/about/about2.png'} width={511} height={624} alt={''}/>
                    <div className={'flex flex-col w-full max-w-full lg:w-[512px] lg:max-w-1/2 '}>
                        <span className={'font-bold text-[24px] lg:text-[32px] text-violet  block mb-4'}>{t('item2.title')}</span>
                        <p className={'font-light text-lg text-dark-gray mb-4'}>{t('item2.p1')}</p>
                        <p className={'font-light text-lg text-dark-gray mb-4'}>{t('item2.p2')}</p>
                        <p className={'font-light text-lg text-dark-gray mb-4'}>{t('item2.p3')}</p>
                        <div className={'flex flex-col gap-4'}>

                            <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                                <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                                <span>{t('item2.listItem1')}</span>
                            </div>
                            <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                                <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                                <span>{t('item2.listItem2')}</span>
                            </div>
                            <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                                <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                                <span>{t('item2.listItem3')}</span>
                            </div>
                            <div className={'flex items-center gap-2 text-dark-gray font-light'}>
                                <Icon name={'icon-check'} className={'w-5 min-w-5 h-5 text-violet'}/>
                                <span>{t('item2.listItem4')}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Image src={'/decoration.svg'} alt={''} width={800} height={987}
                   className={'absolute max-w-[70%] right-0 top-0 lg:top-[-235px] -z-[2]'}/>
        </section>
    )
}