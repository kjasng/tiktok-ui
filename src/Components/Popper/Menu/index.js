import { BookA, BookAIcon, CircleHelp, HousePlug, Moon } from "lucide-react";
import Button from "~/Components/Button";


function Menu({ children, visible }) {
    return (
        <div className="absolute hidden group-hover:block right-[38rem] top-[5.5rem] py-2 bg-white border-2 border-gray-200 rounded-xl cursor-pointer">
            <div className="absolute -top-6 h-12 left-0 w-full"></div>
            <Button className="flex items-center gap-2 font-semibold font-2xl hover:bg-gray-100 w-full pr-8" href="#"><HousePlug size={22} />Creator tools</Button>
            <Button className="flex items-center gap-2 font-semibold font-2xl hover:bg-gray-100 w-full pr-8" href="#"><BookA size={22} />Language</Button>
            <Button className="flex items-center gap-2 font-semibold font-2xl hover:bg-gray-100 w-full pr-8" href="#"><CircleHelp size={22} />Feedback and help</Button>
            <Button className="flex items-center gap-2 font-semibold font-2xl hover:bg-gray-100 w-full pr-8" href="#"><Moon size={22} />Dark mode</Button>
        </div>
    );
}

export default Menu;