import { ReactElement } from "react";

export const SideBarItem = ({ title, icon }: {
    title: string;
    icon: ReactElement;
}) => {
    return <div className="flex py-2 cursor-pointer hover:text-purple-600">
        <div className="pr-2">
        {icon}
        </div>
        <div className="">
        {title}
        </div>
    </div>
}