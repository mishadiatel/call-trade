'use client'
import {useRef} from "react";
import Image from "next/image";
import Icon from "@/components/ui/svgIcon/Icon";

interface VacancyCardProps {
    vacancy: {
        flag: string;
        title: string;
        content: string;
    };
    id: number;
    activeVacancy: number | null;
    onClick: (id: number) => void;
}

export default function VacancyCard ({vacancy, activeVacancy, id, onClick}: VacancyCardProps) {
    const contentHeightRef = useRef<HTMLDivElement>(null);
    return (
        <div className={'flex flex-col bg-white shadow-box'}>
            <div className={'px-4 lg:px-6 py-2 flex justify-between gap-4 items-center cursor-pointer'} onClick={() => onClick(id)}>
                <div className={'flex items-center gap-4'}>
                    <Image src={vacancy.flag} alt={vacancy.title} width={60} height={39} />
                    <span className={'text-lg text-dark-gray'}>{vacancy.title}</span>
                </div>
                <Icon name={'icon-down'} className={`text-black transition-all duration-500 w-6 h-3 ${activeVacancy === id ? 'rotate-180' : ''}`} />
            </div>
            <div className={'overflow-hidden transition-all duration-1000'}
                 ref={contentHeightRef}
                 style={{ maxHeight: activeVacancy === id ? `${contentHeightRef.current?.scrollHeight || 10000}px` : '0px' }}>
                <div className={'px-4 lg:px-6 py-7 vacancy-content'} dangerouslySetInnerHTML={{__html: vacancy.content}}></div>
            </div>

        </div>
    )
}