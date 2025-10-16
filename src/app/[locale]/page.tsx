import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Countries from "@/components/sections/countries";
import WhatWeOffer from "@/components/sections/whatweoffer";
import WhatYouHave from "@/components/sections/whatyouhave";
import WhatExpect from "@/components/sections/whatexpect";
import Reviews from "@/components/sections/reviews";
import Vacancies from "@/components/sections/vacancies";
import BottomBlock from "@/components/sections/bottomblock";

export default function Home() {
    return (
        <>
            <Hero/>
            <About />
            <Countries />
            <WhatWeOffer />
            <WhatYouHave />
            <WhatExpect />
            <Reviews />
            <Vacancies />
            <BottomBlock />
        </>
    );
}
