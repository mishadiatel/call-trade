'use client';
import Image from "next/image";
import Select from "@/components/ui/select/select";
import {useTranslations} from "use-intl";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input/Input";



export default function Form() {
    const t = useTranslations('Form');

    const contactFormSchema = z.object({
        name: z.string({
            error: t('name.error'),
        }).min(1, {message: t('name.error')}),
        phone: z.string({
            error: t('field.required'),
        }).min(1, {message: t('field.required')}),
        country: z.string({
            error: t('field.required'),
        }).min(1, t('field.required')),
    });

    type ContactFormDataProps = z.infer<typeof contactFormSchema>;

    const {
        control,
        handleSubmit,
    } = useForm<ContactFormDataProps>({
        resolver: zodResolver(contactFormSchema),
        mode: "onBlur",
    })

    function onSubmit(data: ContactFormDataProps) {
        console.log(data)
    }

    const countriesList = [
        { key: 'ua', label: t('country.ua') },
        { key: 'es', label: t('country.es') },
        { key: 'it', label: t('country.it') },
        { key: 'pt', label: t('country.pt') },
        { key: 'hu', label: t('country.hu') },
        { key: 'bg', label: t('country.bg') },
        { key: 'gr', label: t('country.gr') },
        { key: 'ro', label: t('country.ro') },
        { key: 'cz', label: t('country.cz') },
        { key: 'sk', label: t('country.sk') },
        { key: 'pl', label: t('country.pl') },
    ];
    return (
        <div className={'flex flex-col bg-white px-4 py-5 lg:py-8 w-[285px] max-w-full shadow-box'}>
            <div className={'w-[221px] max-w-full mx-auto text-center mb-5'}>
                {t('title')}
            </div>
            <form className={'flex flex-col gap-[14px]'} onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} name={'name'} placeholder={t('name.placeholder')} />
                <Input control={control} name={'phone'} placeholder={t('phoneNumber.placeholder')} />
                <Select options={countriesList} label={t('country.placeholder')} control={control} name="country"/>
                <button type={'submit'} className={'button'}>{t('button')}</button>
            </form>
            <div className={'flex items-center gap-1 justify-center mt-5'}>
                <Image src={'/icon-lock.svg'} width={24} height={24} alt={'lock'}/>
                <span className={'font-light text-sm text-light-gray '}>{t('savedLabel')}</span>
            </div>
        </div>
    )
}