'use client'

import {useState} from "react";
import VacancyCard from "@/components/vacancyCard/VacancyCard";
import {useTranslations} from "use-intl";

export default function Vacancies () {
    const t = useTranslations('Vacancies');

    const vacancies = [
        {
            flag: '/vacancies/ES.png',
            title: t('item1.title'),
            content: `
            <p>${t('item1.content.l1')} <br>
            ${t('item1.content.l2')}</p>
            <p><strong>${t('item1.content.l3')}</strong> <br>
            ${t('item1.content.l4')} <br>
            ${t('item1.content.l5')} <br>
            ${t('item1.content.l6')}</p>
            <p>${t('item1.content.l7')}</p>
            <p>
            <strong>${t('item1.content.l8')}</strong> <br>
            ${t('item1.content.l9')}<br>
            ${t('item1.content.l10')}<br>
            ${t('item1.content.l11')}<br>
            </p>
            <p>
            <strong>${t('item1.content.l12')}</strong> <br>
            ${t('item1.content.l13')} <br>
            ${t('item1.content.l14')} <br>
            ${t('item1.content.l15')} <br>
            ${t('item1.content.l16')} <br>
            </p>
            <p>${t('item1.content.l17')}</p>
            <p>
            <strong>${t('item1.content.l18')}</strong> <br>
            ${t('item1.content.l19')} <br>
            ${t('item1.content.l20')} <br>
            </p>
            <p>
            <strong>${t('item1.content.l21')}</strong> <br>
            ${t('item1.content.l22')} <br>   
            ${t('item1.content.l23')} <br>
            </p>
            <p>
            <strong>${t('item1.content.l24')}</strong> <br>
            ${t('item1.content.l25')} <br>
            ${t('item1.content.l26')} <br>
            ${t('item1.content.l27')} <br>
            ${t('item1.content.l28')} <br>
            ${t('item1.content.l29')} <br>
            </p>
            <p>
            <strong>${t('item1.content.l30')}</strong> <br>
            ${t('item1.content.l31')} <br>
            ${t('item1.content.l32')} <br>
            ${t('item1.content.l33')} <br>
            ${t('item1.content.l34')} <br>
            </p>
            <p>
            <strong>${t('item1.content.l35')}</strong>
            ${t('item1.content.l36')} 
            <a href="mailto:hannajobremote@gmail.com" target="_blank">hannajobremote@gmail.com</a> 
            ${t('item1.content.l37')} 
            <a href="https://t.me/HannaJOBRemote" target="_blank">@HannaJOBRemote</a>.
            </p>`
        },
        {
            flag: '/vacancies/IT.png',
            title: t('item2.title'),
            content: `
            <p>${t('item2.content.l1')} <br>
            ${t('item2.content.l2')}</p>
            <p><strong>${t('item2.content.l3')}</strong> <br>
            ${t('item2.content.l4')} <br>
            ${t('item2.content.l5')} <br>
            ${t('item2.content.l6')}</p>
            <p>${t('item2.content.l7')}</p>
            <p>
            <strong>${t('item2.content.l8')}</strong> <br>
            ${t('item2.content.l9')}<br>
            ${t('item2.content.l10')}<br>
            ${t('item2.content.l11')}<br>
            </p>
            <p>
            <strong>${t('item2.content.l12')}</strong> <br>
            ${t('item2.content.l13')} <br>
            ${t('item2.content.l14')} <br>
            ${t('item2.content.l15')} <br>
            ${t('item2.content.l16')} <br>
            </p>
            <p>${t('item2.content.l17')}</p>
            <p>
            <strong>${t('item2.content.l18')}</strong> <br>
            ${t('item2.content.l19')} <br>
            ${t('item2.content.l20')} <br>
            </p>
            <p>
            <strong>${t('item2.content.l21')}</strong> <br>
            ${t('item2.content.l22')} <br>   
            ${t('item2.content.l23')} <br>
            </p>
            <p>
            <strong>${t('item2.content.l24')}</strong> <br>
            ${t('item2.content.l25')} <br>
            ${t('item2.content.l26')} <br>
            ${t('item2.content.l27')} <br>
            ${t('item2.content.l28')} <br>
            ${t('item2.content.l29')} <br>
            </p>
            <p>
            <strong>${t('item2.content.l30')}</strong> <br>
            ${t('item2.content.l31')} <br>
            ${t('item2.content.l32')} <br>
            ${t('item2.content.l33')} <br>
            ${t('item2.content.l34')} <br>
            </p>
            <p>
            <strong>${t('item2.content.l35')}</strong>
            ${t('item2.content.l36')} 
            <a href="mailto:hannajobremote@gmail.com" target="_blank">hannajobremote@gmail.com</a> 
            ${t('item2.content.l37')} 
            <a href="https://t.me/HannaJOBRemote" target="_blank">@HannaJOBRemote</a>.
            </p>`
        },
        {
            flag: '/vacancies/PT.png',
            title: t('item3.title'),
            content: `
            <p>${t('item3.content.l1')} <br>
            ${t('item3.content.l2')}</p>
            <p><strong>${t('item3.content.l3')}</strong> <br>
            ${t('item3.content.l4')} <br>
            ${t('item3.content.l5')} <br>
            ${t('item3.content.l6')}</p>
            <p>${t('item3.content.l7')}</p>
            <p>
            <strong>${t('item3.content.l8')}</strong> <br>
            ${t('item3.content.l9')}<br>
            ${t('item3.content.l10')}<br>
            ${t('item3.content.l11')}<br>
            </p>
            <p>
            <strong>${t('item3.content.l12')}</strong> <br>
            ${t('item3.content.l13')} <br>
            ${t('item3.content.l14')} <br>
            ${t('item3.content.l15')} <br>
            ${t('item3.content.l16')} <br>
            </p>
            <p>${t('item3.content.l17')}</p>
            <p>
            <strong>${t('item3.content.l18')}</strong> <br>
            ${t('item3.content.l19')} <br>
            ${t('item3.content.l20')} <br>
            </p>
            <p>
            <strong>${t('item3.content.l21')}</strong> <br>
            ${t('item3.content.l22')} <br>   
            ${t('item3.content.l23')} <br>
            </p>
            <p>
            <strong>${t('item3.content.l24')}</strong> <br>
            ${t('item3.content.l25')} <br>
            ${t('item3.content.l26')} <br>
            ${t('item3.content.l27')} <br>
            ${t('item3.content.l28')} <br>
            ${t('item3.content.l29')} <br>
            </p>
            <p>
            <strong>${t('item3.content.l30')}</strong> <br>
            ${t('item3.content.l31')} <br>
            ${t('item3.content.l32')} <br>
            ${t('item3.content.l33')} <br>
            ${t('item3.content.l34')} <br>
            </p>
            <p>
            <strong>${t('item3.content.l35')}</strong>
            ${t('item3.content.l36')} 
            <a href="mailto:hannajobremote@gmail.com" target="_blank">hannajobremote@gmail.com</a> 
            ${t('item3.content.l37')} 
            <a href="https://t.me/HannaJOBRemote" target="_blank">@HannaJOBRemote</a>.
            </p>`
        },
        {
            flag: '/vacancies/HU.png',
            title: t('item4.title'),
            content: `
            <p>${t('item4.content.l1')} <br>
            ${t('item4.content.l2')}</p>
            <p><strong>${t('item4.content.l3')}</strong> <br>
            ${t('item4.content.l4')} <br>
            ${t('item4.content.l5')} <br>
            ${t('item4.content.l6')}</p>
            <p>${t('item4.content.l7')}</p>
            <p>
            <strong>${t('item4.content.l8')}</strong> <br>
            ${t('item4.content.l9')}<br>
            ${t('item4.content.l10')}<br>
            ${t('item4.content.l11')}<br>
            </p>
            <p>
            <strong>${t('item4.content.l12')}</strong> <br>
            ${t('item4.content.l13')} <br>
            ${t('item4.content.l14')} <br>
            ${t('item4.content.l15')} <br>
            ${t('item4.content.l16')} <br>
            </p>
            <p>${t('item4.content.l17')}</p>
            <p>
            <strong>${t('item4.content.l18')}</strong> <br>
            ${t('item4.content.l19')} <br>
            ${t('item4.content.l20')} <br>
            </p>
            <p>
            <strong>${t('item4.content.l21')}</strong> <br>
            ${t('item4.content.l22')} <br>   
            ${t('item4.content.l23')} <br>
            </p>
            <p>
            <strong>${t('item4.content.l24')}</strong> <br>
            ${t('item4.content.l25')} <br>
            ${t('item4.content.l26')} <br>
            ${t('item4.content.l27')} <br>
            ${t('item4.content.l28')} <br>
            ${t('item4.content.l29')} <br>
            </p>
            <p>
            <strong>${t('item4.content.l30')}</strong> <br>
            ${t('item4.content.l31')} <br>
            ${t('item4.content.l32')} <br>
            ${t('item4.content.l33')} <br>
            ${t('item4.content.l34')} <br>
            </p>
            <p>
            <strong>${t('item4.content.l35')}</strong>
            ${t('item4.content.l36')} 
            <a href="mailto:hannajobremote@gmail.com" target="_blank">hannajobremote@gmail.com</a> 
            ${t('item4.content.l37')} 
            <a href="https://t.me/HannaJOBRemote" target="_blank">@HannaJOBRemote</a>.
            </p>`
        },
        {
            flag: '/vacancies/BG.png',
            title: t('item5.title'),
            content: `
            <p>${t('item5.content.l1')} <br>
            ${t('item5.content.l2')}</p>
            <p><strong>${t('item5.content.l3')}</strong> <br>
            ${t('item5.content.l4')} <br>
            ${t('item5.content.l5')} <br>
            ${t('item5.content.l6')}</p>
            <p>${t('item5.content.l7')}</p>
            <p>
            <strong>${t('item5.content.l8')}</strong> <br>
            ${t('item5.content.l9')}<br>
            ${t('item5.content.l10')}<br>
            ${t('item5.content.l11')}<br>
            </p>
            <p>
            <strong>${t('item5.content.l12')}</strong> <br>
            ${t('item5.content.l13')} <br>
            ${t('item5.content.l14')} <br>
            ${t('item5.content.l15')} <br>
            ${t('item5.content.l16')} <br>
            </p>
            <p>${t('item5.content.l17')}</p>
            <p>
            <strong>${t('item5.content.l18')}</strong> <br>
            ${t('item5.content.l19')} <br>
            ${t('item5.content.l20')} <br>
            </p>
            <p>
            <strong>${t('item5.content.l21')}</strong> <br>
            ${t('item5.content.l22')} <br>   
            ${t('item5.content.l23')} <br>
            </p>
            <p>
            <strong>${t('item5.content.l24')}</strong> <br>
            ${t('item5.content.l25')} <br>
            ${t('item5.content.l26')} <br>
            ${t('item5.content.l27')} <br>
            ${t('item5.content.l28')} <br>
            ${t('item5.content.l29')} <br>
            </p>
            <p>
            <strong>${t('item5.content.l30')}</strong> <br>
            ${t('item5.content.l31')} <br>
            ${t('item5.content.l32')} <br>
            ${t('item5.content.l33')} <br>
            ${t('item5.content.l34')} <br>
            </p>
            <p>
            <strong>${t('item5.content.l35')}</strong>
            ${t('item5.content.l36')} 
            <a href="mailto:hannajobremote@gmail.com" target="_blank">hannajobremote@gmail.com</a> 
            ${t('item5.content.l37')} 
            <a href="https://t.me/HannaJOBRemote" target="_blank">@HannaJOBRemote</a>.
            </p>`
        },
        {
            flag: '/vacancies/GR.png',
            title: t('item6.title'),
            content: `
            <p>${t('item6.content.l1')} <br>
            ${t('item6.content.l2')}</p>
            <p><strong>${t('item6.content.l3')}</strong> <br>
            ${t('item6.content.l4')} <br>
            ${t('item6.content.l5')} <br>
            ${t('item6.content.l6')}</p>
            <p>${t('item6.content.l7')}</p>
            <p>
            <strong>${t('item6.content.l8')}</strong> <br>
            ${t('item6.content.l9')}<br>
            ${t('item6.content.l10')}<br>
            ${t('item6.content.l11')}<br>
            </p>
            <p>
            <strong>${t('item6.content.l12')}</strong> <br>
            ${t('item6.content.l13')} <br>
            ${t('item6.content.l14')} <br>
            ${t('item6.content.l15')} <br>
            ${t('item6.content.l16')} <br>
            </p>
            <p>${t('item6.content.l17')}</p>
            <p>
            <strong>${t('item6.content.l18')}</strong> <br>
            ${t('item6.content.l19')} <br>
            ${t('item6.content.l20')} <br>
            </p>
            <p>
            <strong>${t('item6.content.l21')}</strong> <br>
            ${t('item6.content.l22')} <br>   
            ${t('item6.content.l23')} <br>
            </p>
            <p>
            <strong>${t('item6.content.l24')}</strong> <br>
            ${t('item6.content.l25')} <br>
            ${t('item6.content.l26')} <br>
            ${t('item6.content.l27')} <br>
            ${t('item6.content.l28')} <br>
            ${t('item6.content.l29')} <br>
            </p>
            <p>
            <strong>${t('item6.content.l30')}</strong> <br>
            ${t('item6.content.l31')} <br>
            ${t('item6.content.l32')} <br>
            ${t('item6.content.l33')} <br>
            ${t('item6.content.l34')} <br>
            </p>
            <p>
            <strong>${t('item6.content.l35')}</strong>
            ${t('item6.content.l36')} 
            <a href="mailto:hannajobremote@gmail.com" target="_blank">hannajobremote@gmail.com</a> 
            ${t('item6.content.l37')} 
            <a href="https://t.me/HannaJOBRemote" target="_blank">@HannaJOBRemote</a>.
            </p>`
        },
        {
            flag: '/vacancies/RO.png',
            title: t('item7.title'),
            content: `
            <p>${t('item7.content.l1')} <br>
            ${t('item7.content.l2')}</p>
            <p><strong>${t('item7.content.l3')}</strong> <br>
            ${t('item7.content.l4')} <br>
            ${t('item7.content.l5')} <br>
            ${t('item7.content.l6')}</p>
            <p>${t('item7.content.l7')}</p>
            <p>
            <strong>${t('item7.content.l8')}</strong> <br>
            ${t('item7.content.l9')}<br>
            ${t('item7.content.l10')}<br>
            ${t('item7.content.l11')}<br>
            </p>
            <p>
            <strong>${t('item7.content.l12')}</strong> <br>
            ${t('item7.content.l13')} <br>
            ${t('item7.content.l14')} <br>
            ${t('item7.content.l15')} <br>
            ${t('item7.content.l16')} <br>
            </p>
            <p>${t('item7.content.l17')}</p>
            <p>
            <strong>${t('item7.content.l18')}</strong> <br>
            ${t('item7.content.l19')} <br>
            ${t('item7.content.l20')} <br>
            </p>
            <p>
            <strong>${t('item7.content.l21')}</strong> <br>
            ${t('item7.content.l22')} <br>   
            ${t('item7.content.l23')} <br>
            </p>
            <p>
            <strong>${t('item7.content.l24')}</strong> <br>
            ${t('item7.content.l25')} <br>
            ${t('item7.content.l26')} <br>
            ${t('item7.content.l27')} <br>
            ${t('item7.content.l28')} <br>
            ${t('item7.content.l29')} <br>
            </p>
            <p>
            <strong>${t('item7.content.l30')}</strong> <br>
            ${t('item7.content.l31')} <br>
            ${t('item7.content.l32')} <br>
            ${t('item7.content.l33')} <br>
            ${t('item7.content.l34')} <br>
            </p>
            <p>
            <strong>${t('item7.content.l35')}</strong>
            ${t('item7.content.l36')} 
            <a href="mailto:hannajobremote@gmail.com" target="_blank">hannajobremote@gmail.com</a> 
            ${t('item7.content.l37')} 
            <a href="https://t.me/HannaJOBRemote" target="_blank">@HannaJOBRemote</a>.
            </p>`
        },
        {
            flag: '/vacancies/CZ.png',
            title: t('item8.title'),
            content: `
            <p>${t('item8.content.l1')} <br>
            ${t('item8.content.l2')}</p>
            <p><strong>${t('item8.content.l3')}</strong> <br>
            ${t('item8.content.l4')} <br>
            ${t('item8.content.l5')} <br>
            ${t('item8.content.l6')}</p>
            <p>${t('item8.content.l7')}</p>
            <p>
            <strong>${t('item8.content.l8')}</strong> <br>
            ${t('item8.content.l9')}<br>
            ${t('item8.content.l10')}<br>
            ${t('item8.content.l11')}<br>
            </p>
            <p>
            <strong>${t('item8.content.l12')}</strong> <br>
            ${t('item8.content.l13')} <br>
            ${t('item8.content.l14')} <br>
            ${t('item8.content.l15')} <br>
            ${t('item8.content.l16')} <br>
            </p>
            <p>${t('item8.content.l17')}</p>
            <p>
            <strong>${t('item8.content.l18')}</strong> <br>
            ${t('item8.content.l19')} <br>
            ${t('item8.content.l20')} <br>
            </p>
            <p>
            <strong>${t('item8.content.l21')}</strong> <br>
            ${t('item8.content.l22')} <br>   
            ${t('item8.content.l23')} <br>
            </p>
            <p>
            <strong>${t('item8.content.l24')}</strong> <br>
            ${t('item8.content.l25')} <br>
            ${t('item8.content.l26')} <br>
            ${t('item8.content.l27')} <br>
            ${t('item8.content.l28')} <br>
            ${t('item8.content.l29')} <br>
            </p>
            <p>
            <strong>${t('item8.content.l30')}</strong> <br>
            ${t('item8.content.l31')} <br>
            ${t('item8.content.l32')} <br>
            ${t('item8.content.l33')} <br>
            ${t('item8.content.l34')} <br>
            </p>
            <p>
            <strong>${t('item8.content.l35')}</strong>
            ${t('item8.content.l36')} 
            <a href="mailto:hannajobremote@gmail.com" target="_blank">hannajobremote@gmail.com</a> 
            ${t('item8.content.l37')} 
            <a href="https://t.me/HannaJOBRemote" target="_blank">@HannaJOBRemote</a>.
            </p>`
        },
        {
            flag: '/vacancies/SK.png',
            title: t('item9.title'),
            content: `
            <p>${t('item9.content.l1')} <br>
            ${t('item9.content.l2')}</p>
            <p><strong>${t('item9.content.l3')}</strong> <br>
            ${t('item9.content.l4')} <br>
            ${t('item9.content.l5')} <br>
            ${t('item9.content.l6')}</p>
            <p>${t('item9.content.l7')}</p>
            <p>
            <strong>${t('item9.content.l8')}</strong> <br>
            ${t('item9.content.l9')}<br>
            ${t('item9.content.l10')}<br>
            ${t('item9.content.l11')}<br>
            </p>
            <p>
            <strong>${t('item9.content.l12')}</strong> <br>
            ${t('item9.content.l13')} <br>
            ${t('item9.content.l14')} <br>
            ${t('item9.content.l15')} <br>
            ${t('item9.content.l16')} <br>
            </p>
            <p>${t('item9.content.l17')}</p>
            <p>
            <strong>${t('item9.content.l18')}</strong> <br>
            ${t('item9.content.l19')} <br>
            ${t('item9.content.l20')} <br>
            </p>
            <p>
            <strong>${t('item9.content.l21')}</strong> <br>
            ${t('item9.content.l22')} <br>   
            ${t('item9.content.l23')} <br>
            </p>
            <p>
            <strong>${t('item9.content.l24')}</strong> <br>
            ${t('item9.content.l25')} <br>
            ${t('item9.content.l26')} <br>
            ${t('item9.content.l27')} <br>
            ${t('item9.content.l28')} <br>
            ${t('item9.content.l29')} <br>
            </p>
            <p>
            <strong>${t('item9.content.l30')}</strong> <br>
            ${t('item9.content.l31')} <br>
            ${t('item9.content.l32')} <br>
            ${t('item9.content.l33')} <br>
            ${t('item9.content.l34')} <br>
            </p>
            <p>
            <strong>${t('item9.content.l35')}</strong>
            ${t('item9.content.l36')} 
            <a href="mailto:hannajobremote@gmail.com" target="_blank">hannajobremote@gmail.com</a> 
            ${t('item9.content.l37')} 
            <a href="https://t.me/HannaJOBRemote" target="_blank">@HannaJOBRemote</a>.
            </p>`
        },
        {
            flag: '/vacancies/PL.png',
            title: t('item10.title'),
            content: `
            <p>${t('item10.content.l1')} <br>
            ${t('item10.content.l2')}</p>
            <p><strong>${t('item10.content.l3')}</strong> <br>
            ${t('item10.content.l4')} <br>
            ${t('item10.content.l5')} <br>
            ${t('item10.content.l6')}</p>
            <p>${t('item10.content.l7')}</p>
            <p>
            <strong>${t('item10.content.l8')}</strong> <br>
            ${t('item10.content.l9')}<br>
            ${t('item10.content.l10')}<br>
            ${t('item10.content.l11')}<br>
            </p>
            <p>
            <strong>${t('item10.content.l12')}</strong> <br>
            ${t('item10.content.l13')} <br>
            ${t('item10.content.l14')} <br>
            ${t('item10.content.l15')} <br>
            ${t('item10.content.l16')} <br>
            </p>
            <p>${t('item10.content.l17')}</p>
            <p>
            <strong>${t('item10.content.l18')}</strong> <br>
            ${t('item10.content.l19')} <br>
            ${t('item10.content.l20')} <br>
            </p>
            <p>
            <strong>${t('item10.content.l21')}</strong> <br>
            ${t('item10.content.l22')} <br>   
            ${t('item10.content.l23')} <br>
            </p>
            <p>
            <strong>${t('item10.content.l24')}</strong> <br>
            ${t('item10.content.l25')} <br>
            ${t('item10.content.l26')} <br>
            ${t('item10.content.l27')} <br>
            ${t('item10.content.l28')} <br>
            ${t('item10.content.l29')} <br>
            </p>
            <p>
            <strong>${t('item10.content.l30')}</strong> <br>
            ${t('item10.content.l31')} <br>
            ${t('item10.content.l32')} <br>
            ${t('item10.content.l33')} <br>
            ${t('item10.content.l34')} <br>
            </p>
            <p>
            <strong>${t('item10.content.l35')}</strong>
            ${t('item10.content.l36')} 
            <a href="mailto:hannajobremote@gmail.com" target="_blank">hannajobremote@gmail.com</a> 
            ${t('item10.content.l37')} 
            <a href="https://t.me/HannaJOBRemote" target="_blank">@HannaJOBRemote</a>.
            </p>`
        },
    ]
    const [activeVacancy, setActiveVacancy] = useState<number | null>(null);
    const changeVacancy = (id: number) => {
        const newOpenVacancy = id === activeVacancy ? null : id;
        setActiveVacancy(newOpenVacancy);
    }
    return (
        <section className={'relative mt-15 lg:mt-20'} id={'vacancies'}>
            <div className="container">
                <span className={'font-bold text-[24px] lg:text-[32px] text-violet  block mb-4'}>{ t('title')}</span>
                <div className={'flex flex-col gap-2'}>
                    {vacancies.map((vacancy, index) => (
                        <VacancyCard key={index} vacancy={vacancy} id={index} activeVacancy={activeVacancy} onClick={changeVacancy} />
                    ))}
                </div>
            </div>

        </section>
    )
}