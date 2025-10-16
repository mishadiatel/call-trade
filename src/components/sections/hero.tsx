'use client'
import Icon from "@/components/ui/svgIcon/Icon";
import Image from "next/image";
import Form from "@/components/form/form";
import {useTranslations} from "use-intl";

export default function Hero () {
    const t = useTranslations('Hero');
    const listItems = [
       t('listItem1'),
        t('listItem2'),
        t('listItem3'),
        t('listItem4')
    ];
    return (
        <section className={'relative'} id={'hero'}>
            <Image src={'/hero/hero-image.png'} width={1000} height={724} alt={'hero image'} className={'lg:absolute top-0 left-1/2 w-full h-[272px] lg:w-1/2 lg:h-full object-cover -z-[1]'} />
            <div className={'absolute left-0 top-0 w-1/2 h-[1127px] hidden lg:block bg-white-2 -z-[1]'}></div>
            <div className="container flex flex-col lg:flex-row gap-5 justify-between items-center">
                <div className={'w-full lg:w-[471px] max-w-full pt-6'}>
                    <h1 className={'font-bold text-[28px] lg:text-[40px] text-violet mb-5'}>
                        {t('title')}
                    </h1>
                    <p className={'text-lg text-dark-gray mb-5'}>{t('text')}</p>
                    <div className={'flex flex-col gap-4'}>
                        {listItems.map((item) => (
                            <div key={Math.random()} className={'flex items-center gap-2'}>
                                <Icon name={'icon-check'} className={'w-5 h-5 text-violet'} />
                                <span>{item}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <Form />
            </div>

        </section>
    )
}