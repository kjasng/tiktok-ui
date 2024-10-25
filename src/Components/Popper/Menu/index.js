import { BookA, ChevronLeft, CircleHelp, HousePlug, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "~/Components/Button";

import classNames from "classnames";

const cx = classNames.bind()


const Language = [
    {
        code: 'en',
        title: 'English'
    },
    {
        code: 'ar',
        title: 'العربية'
    },
    {
        code: 'bn',
        title: 'বাংলা (ভারত)'
    },
    {
        code: 'ceb',
        title: 'Cebuano (Pilipinas)'
    },
    {
        code: 'cs',
        title: 'Čeština (Česká republika)'
    },
    {
        code: 'de',
        title: 'Deutsch'
    },
    {
        code: 'el',
        title: 'Ελληνικά (Ελλάδα)'
    },
    {
        code: 'es',
        title: 'Español'
    },
    {
        code: 'fi',
        title: 'Suomi (Suomi)'
    },
    {
        code: 'fil',
        title: 'Filipino (Pilipinas)'
    },
    {
        code: 'fr',
        title: 'Français'
    },
    {
        code: 'he',
        title: 'עברית (ישראל)'
    },
    {
        code: 'hi',
        title: 'हिंदी'
    },
    {
        code: 'hu',
        title: 'Magyar (Magyarország)'
    },
    {
        code: 'id',
        title: 'Bahasa Indonesia (Indonesia)'
    }
]

function Menu({ children }) {

    const [language, setLanguage] = useState('English');
    const [active, setActive] = useState(false);
    const [menu, setMenu] = useState(true);

    const handleMenu = () => {
        setMenu(!menu);
        setActive(!active);
    }

    return (
        <div 
        className={cx('absolute hidden group-hover:block right-[38rem] top-[5.5rem] py-2 bg-white border-2 border-gray-200 rounded-xl cursor-pointer', active ? 'border-0' : 'border-2')}>
            <div className="absolute -top-6 h-12 left-0 w-full bg-none"></div>
            {menu && <div>
                <Button className="flex items-center gap-2 font-semibold font-2xl hover:bg-gray-100 w-full pr-6 py-4 px-4"><HousePlug size={22} />Creator tools</Button>
                <Button className="flex items-center gap-2 font-semibold font-2xl hover:bg-gray-100 w-full pr-6 py-4 px-4" onClick={handleMenu}>
                    <BookA size={22} />{language}
                </Button>
                <Button className="flex items-center gap-2 font-semibold font-2xl hover:bg-gray-100 w-full pr-6 py-4 px-4"><CircleHelp size={22} />Feedback and help</Button>
                <Button className="flex items-center gap-2 font-semibold font-2xl hover:bg-gray-100 w-full pr-6 py-4 px-4"><Moon size={22} />Dark mode</Button></div>}


            {active && <div className="absolute right-0 top-0 w-max bg-white border-2 border-gray-200 rounded-xl cursor-auto">
                <div className="absolute -top-6 h-6 left-0 w-full bg-none"></div>
                <div className="flex items-center gap-2 w-full cursor-pointer justify-start">
                    <Button className="p-4 cursor-pointer" onClick={handleMenu}><ChevronLeft size={22} /></Button>
                    <span className="font-semibold text-3xl pl-4">Language</span>
                </div>
                {Language.map((item, index) => {
                    return (
                        <div key={index} className="py-4 pl-4 pr-16 hover:bg-gray-100 w-full cursor-pointer text-2xl">
                            <button onClick={() => { setLanguage(item.title) }}>{item.title}</button>
                        </div>
                    )
                })}</div>}
        </div>
    );
}

export default Menu;