"use client";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/svgIcon/Icon";
import {useState} from "react";
import LanguageSelect from "@/components/ui/languageSelect/LanguageSelect";
import {useTranslations} from "use-intl";


export default function Header() {

    const t = useTranslations('Header');

    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

    const menuItems = [
        {
            text: t('hero'),
            section: "hero"
        },
        {
            text: t('about'),
            section: "about"
        },
        {
            text: t('whatYouHave'),
            section: "whatYouHave"
        },
        {
            text: t('reviews'),
            section: "reviews"
        },
        {
            text: t('vacancies'),
            section: "vacancies"
        },
        {
            text: t('contacts'),
            section: "contacts"
        },
    ];

    const scrollLinkClick = (sectionName: string) => {
        if(isOpenBurgerMenu) {
            setIsOpenBurgerMenu(false)
        }
        const section = document.getElementById(sectionName);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <>
            <header className={'header sticky top-0 z-[20]'}>
                <div className="container h-[50px] lg:h-[88px] flex justify-between items-center">
                    <Link href={'/'} className="w-[112px] lg:w-[181px]">
                        <Image src={'/logo-black.svg'} alt={'logo'} width={181} height={46}
                               className={'hidden lg:block'}/>
                        <Image src={'/logo-white.svg'} alt={'logo'} width={181} height={46}
                               className={'block lg:hidden'}/>
                    </Link>
                    <div className={'hidden lg:flex items-center gap-4'}>
                        {menuItems.map((menuItem) => (
                            <div
                                key={Math.random()}
                                 className={'text-white text-base font-light cursor-pointer'}
                                onClick={() => scrollLinkClick(menuItem.section)}
                            >{menuItem.text}</div>
                        ))}
                        <LanguageSelect />
                    </div>
                    <button className={'flex lg:hidden w-10 h-10 items-center justify-center'}
                            onClick={() => setIsOpenBurgerMenu(true)}>
                        <Icon name={'icon-burger'} className={'text-white w-5 h-5'}/>
                    </button>
                </div>
            </header>
            <div className={`header-burger-menu overflow-auto ${isOpenBurgerMenu ? 'open' : ''}`}>
                <div className={'relative h-full'}>
                    <div className={'w-full bg-white-2'}>
                        <div className={'container flex justify-between items-center h-[50px]'}>
                            <Link href={'/'} className="w-[112px]">
                                <Image src={'/logo-black.svg'} alt={'logo'} width={181} height={46}/>
                            </Link>
                            <button className={'flex w-10 h-10 items-center justify-center'}
                                    onClick={() => setIsOpenBurgerMenu(false)}>
                                <Icon name={'icon-close'} className={'text-dark-gray w-5 h-5'}/>
                            </button>
                        </div>
                    </div>
                    <div className="container">
                        <div className={'p-7'}>
                            <div className={'flex flex-col gap-[30px] mb-12'}>
                                {menuItems.map((menuItem) => (
                                    <div
                                        key={Math.random()}
                                        className={'text-white text-xl font-light cursor-pointer'}
                                        onClick={() => scrollLinkClick(menuItem.section)}
                                    >{menuItem.text}</div>
                                ))}
                            </div>
                            <LanguageSelect isTop={true}/>
                        </div>

                    </div>
                    <Image src={'/decoration.svg'} alt={''} width={415} height={522}
                           className={'absolute w-[415px] max-w-[70%] right-0 bottom-0 opacity-5 '}/>
                </div>
            </div>
        </>
    )
}