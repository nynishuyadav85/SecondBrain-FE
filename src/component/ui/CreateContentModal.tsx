/* eslint-disable @typescript-eslint/no-unused-vars */
import { CloseIcon } from "../../icons/CloseIcon"
import { Button } from "./Button"

export const CreateContentModal = ({ open, onClose }) => {
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
                            <Input placeholder="Title" />
                            <Input placeholder="Link" />
                        </div>
                        <div className="flex justify-center">
                            <Button text="Submit" variant="primary" />
                        </div>
                    </span>

                </div>
            </div>}
        </div>
    )
}


function Input({ onChange, placeholder }: { onChange: () => void }) {
    return <div>
        <input placeholder={placeholder} type="text" onChange={onChange} className="px-4 py-2 border rounded m-2"></input>
    </div>
}