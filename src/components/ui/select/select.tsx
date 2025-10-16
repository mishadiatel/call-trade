'use client'
import {useEffect, useRef, useState} from "react";
import Icon from "@/components/ui/svgIcon/Icon";

interface SelectProps {
    options: string[];
    label: string;
}

export default function Select({options, label}: SelectProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        const handleScroll = () => {
            setOpen(false);
        };

        document.addEventListener('click', handleClickOutside);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`input-wrapper relative cursor-pointer `} onClick={() => setOpen(prevState => !prevState)} ref={selectRef}>
            <div className={`input flex justify-between items-center ${open ? '!border-violet-2 !outline !outline-violet-2' : ''}`}>
                {selected ? <span>{selected}</span> : <span className={'text-light-gray'}>{label}</span>}
                <Icon name={'icon-down'} className={`h-3 w-3 text-light-gray ${open ? 'opacity-0' : ''}`}/>
            </div>
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[calc(100%-5px)] bg-white flex-col w-[calc(100%-12px)] left-1/2 -translate-x-1/2`}>
                {options && options.map((option) => (
                    <div
                        key={Math.random()}
                        className={'px-[6px] py-[2px] text-dark-gray font-light text-[12px] hover:bg-violet-2 hover:text-white cursor-pointer'}
                        onClick={() => setSelected(option)}
                    >{option}</div>
                ))}
            </div>
        </div>
    )
}