'use client'
import ReviewsSlider from "@/components/reviewsSlider/ReviewsSlider";
import Image from "next/image";
import {useTranslations} from "use-intl";

export default function Reviews () {
    const t = useTranslations('Reviews');
   const reviews = [
       {
           image: '/reviews/1.png',
           reviewText: t('item1.text'),
           name: t('item1.name'),
           profession: t('item1.profession'),
       },
       {
           image: '/reviews/2.png',
           reviewText: t('item2.text'),
           name: t('item2.name'),
           profession: t('item2.profession'),
       },
       {
           image: '/reviews/3.png',
           reviewText: t('item3.text'),
           name: t('item3.name'),
           profession: t('item3.profession'),
       },
       {
           image: '/reviews/4.png',
           reviewText: t('item4.text'),
           name: t('item4.name'),
           profession: t('item4.profession'),
       },
       {
           image: '/reviews/5.png',
           reviewText: t('item5.text'),
           name: t('item5.name'),
           profession: t('item5.profession'),
       },
       {
           image: '/reviews/6.png',
           reviewText: t('item6.text'),
           name: t('item6.name'),
           profession: t('item6.profession'),
       },
       {
           image: '/reviews/7.png',
           reviewText: t('item7.text'),
           name: t('item7.name'),
           profession: t('item7.profession'),
       },
       {
           image: '/reviews/8.png',
           reviewText: t('item8.text'),
           name: t('item8.name'),
           profession: t('item8.profession'),
       },
       {
           image: '/reviews/9.png',
           reviewText: t('item9.text'),
           name: t('item9.name'),
           profession: t('item9.profession'),
       },
       {
           image: '/reviews/10.png',
           reviewText: t('item10.text'),
           name: t('item10.name'),
           profession: t('item10.profession'),
       },
       {
           image: '/reviews/11.png',
           reviewText: t('item11.text'),
           name: t('item11.name'),
           profession: t('item11.profession'),
       },
       {
           image: '/reviews/12.png',
           reviewText: t('item12.text'),
           name: t('item12.name'),
           profession: t('item12.profession'),
       },
       {
           image: '/reviews/13.png',
           reviewText: t('item13.text'),
           name: t('item13.name'),
           profession: t('item13.profession'),
       },
       {
           image: '/reviews/14.png',
           reviewText: t('item14.text'),
           name: t('item14.name'),
           profession: t('item14.profession'),
       },
       {
           image: '/reviews/15.png',
           reviewText: t('item15.text'),
           name: t('item15.name'),
           profession: t('item15.profession'),
       },
    ];
    return (
        <section className={'mt-15 lg:mt-20 lg:pt-[60px] relative'} id={'reviews'}>
            <div className={'container flex flex-col lg:gap-[160px] lg:flex-row lg:justify-between lg:items-start'}>
                <div className={'font-bold text-[24px] lg:text-[32px] text-violet  block mb-5 lg:mb-0 lg:w-[270px]'}>{t('title')}</div>
                <ReviewsSlider reviews={reviews} />
            </div>
            <Image src={'/decoration.svg'} alt={''} width={800} height={987}
                   className={'absolute max-w-[70%] right-0 top-1/2 -z-[2]'}/>
        </section>
    )
}