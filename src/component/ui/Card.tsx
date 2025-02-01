import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "youtube" | "twitter"
}

export function Card({ title, link, type }: CardProps) {
    return <div>
        <div className="bg-white rounded-md border-gray-100 max-w-72 border p-4 min-h-42 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-sm">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon size={"sm"} />
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon size={"sm"} />
                    </div>
                    <div className="text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon size={"sm"} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type === "youtube" &&
                    <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                }
                {type === "twitter" &&
                    <blockquote className="twitter-tweet">
                        <a href={link.replace("x", "twitter")}></a>
                    </blockquote>
                }
            </div>
        </div>
    </div>
}