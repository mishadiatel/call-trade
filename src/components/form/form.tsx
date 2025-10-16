'use client';
import Image from "next/image";
import Select from "@/components/ui/select/select";
import {useTranslations} from "use-intl";

export default function Form () {
    const t = useTranslations('Form');
    const countriesList = [
        t('country.ua'),
        t('country.es'),
        t('country.it'),
        t('country.pt'),
        t('country.hu'),
        t('country.bg'),
        t('country.gr'),
        t('country.ro'),
        t('country.cz'),
        t('country.sk'),
        t('country.pl')
    ]
    return (
        <div className={'flex flex-col bg-white px-4 py-5 lg:py-8 w-[285px] max-w-full shadow-box'}>
            <div className={'w-[221px] max-w-full mx-auto text-center mb-5'}>
                {t('title')}
            </div>
            <form className={'flex flex-col gap-[14px]'}>
                <div className={'input-wrapper error'}>
                    <input type="text" className={'input'} placeholder={t('name.placeholder')}/>
                    <div className={'error-message'}>asldkfjasdlf</div>
                </div>
                <div className={'input-wrapper '}>
                    <input type="text" className={'input'} placeholder={t('phoneNumber.placeholder')}/>
                </div>
                <Select options={countriesList} label={t('country.placeholder')} />
                <button type={'submit'} className={'button'}>{t('button')}</button>
            </form>
            <div className={'flex items-center gap-1 justify-center mt-5'}>
                <Image src={'/icon-lock.svg'} width={24} height={24} alt={'lock'} />
                <span className={'font-light text-sm text-light-gray '}>{t('savedLabel')}</span>
            </div>
        </div>
    )
}