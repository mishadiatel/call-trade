'use client'
import Image from "next/image";
import Form from "@/components/form/form";
import {useTranslations} from "use-intl";

export default function BottomBlock () {
    const t = useTranslations('Bottom')
    return (
        <section className={'mt-15 mb-16 lg:mb-0 lg:mt-[188px] relative lg:pt-[167px] lg:pb-[103px]'} id={'bottom-block'}>
            <Image src={'/bottomblock/bottom-image.png'} width={1000} height={674} alt={'bottom image'} className={'lg:absolute top-0 left-1/2 w-full h-[272px] lg:w-1/2 lg:h-full object-cover -z-[1]'} />
            <div className={'absolute left-0 top-[100px] w-1/2 h-[calc(100%-100px)] hidden lg:block bg-white-2 -z-[1]'}></div>
            <div className="container flex flex-col lg:flex-row gap-5 justify-between items-center">
                <div className={'w-full lg:w-[471px] max-w-full pt-6'}>
                    <h2 className={'font-bold text-[28px] lg:text-[40px] text-violet mb-5'}>
                        {t('title')}
                    </h2>
                </div>
                <Form />
            </div>
        </section>
    )
}