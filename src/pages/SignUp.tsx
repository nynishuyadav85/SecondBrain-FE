import { useRef } from "react"
import { Button } from "../component/ui/Button"
import { Input } from "../component/ui/Input"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
    const refUsername = useRef<HTMLInputElement>();
    const refPassword = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup() {
        const username = refUsername.current?.value
        const password = refPassword.current?.value

        await axios.post(BACKEND_URL + '/api/v1/signup', {
            username,
            password
        })
        navigate('/signin')
    }


    return (
        <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input reference={refUsername} placeholder={"Email"} />
                <Input reference={refPassword} placeholder={"Password"} />
                <div className="flex justify-center p-4">
                    <Button onClick={signup} loading={false} variant="primary" text="SignUp" />
                </div>
            </div>
        </div>
    )
}