import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";

export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex items-center text-2xl pt-10 font-bold">
            <div className=" pr-4 text-purple-600">
                <Logo />
            </div>
            SecondBrain
        </div>
        <div className="pt-10 pl-4">
            <SideBarItem icon={<YoutubeIcon />} title="Youtube" />
            <SideBarItem icon={<TwitterIcon />} title="Twitter" />
        </div>
    </div>
}