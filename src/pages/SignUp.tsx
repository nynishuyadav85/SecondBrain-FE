import { Button } from "../component/ui/Button"
import { Input } from "../component/ui/Input"

export const SignUp = () => {
    return (
        <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input placeholder={"Email"} />
                <Input placeholder={"Password"} />
                <div className="flex justify-center p-4">
                    <Button loading={false} variant="primary" text="SignUp" />
                </div>
            </div>
        </div>
    )
}