/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react"
import { CloseIcon } from "../../icons/CloseIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../../config"

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export const CreateContentModal = ({ open, onClose }) => {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);
    async function addContent() {
        const title = titleRef.current?.value
        const link = linkRef.current?.value

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title,
            link,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
    }
    return (
        <div>
            {open && <div className="w-screen h-screen bg-slate-950 fixed top-0 left-0 opacity-60 flex justify-center">
                <div className="flex flex-col justify-center" >
                    <span className="bg-white opacity-100 p-4 rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CloseIcon />
                            </div>
                        </div>
                        <div>
                            <Input reference={titleRef} placeholder="Title" />
                            <Input reference={linkRef} placeholder="Link" />
                        </div>
                        <div>
                            <h1 className="font-bold">Types</h1>
                        </div>
                        <div className="flex gap-4 p-4">
                            <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Youtube)
                            }} />
                            <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter)
                            }} />
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addContent} text="Submit" variant="primary" />
                        </div>
                    </span>

                </div>
            </div>}
        </div>
    )
}