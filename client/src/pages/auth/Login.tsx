import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Undo2 } from "lucide-react"
import { Link } from "react-router-dom"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"

interface LoginInfo {
    identity: string,
    password: string
}

export default function Login() {
    const [identity, setIdentity] = useState("");
    const [password, setPassword] = useState("");

    let loginInfo: LoginInfo = {
        identity: identity,
        password: password
    }
    

    const onChange = (e: ChangeEvent<HTMLInputElement>, setFunction: Dispatch<SetStateAction<string>>) => {
        setFunction(e.target.value)
    }

    const onClick = async () => {
        let res = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify(loginInfo),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        res = await res.json()
        document.cookie = `Authorization=${res}`
    }
    
    return (
        <section className="flex place-content-center pt-60">
            <Card className="w-96 h-auto">
                <CardHeader className="flex flex-row space-x-4 ">
                    <Button asChild size="icon"><Link to="/"><Undo2 /></Link></Button>
                    <CardTitle className="text-center">Login</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email_or_username">Email or Username</Label>
                        <Input id="email_or_username" value={identity} onChange={(e) => onChange(e, setIdentity)} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" value={password} onChange={(e) => onChange(e, setPassword)}  />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Button onClick={onClick}>Login</Button>
                    <CardDescription>
                        Don't have an account?
                    </CardDescription>
                    <CardDescription className="hover:text-gray-600 hover:underline">
                        <Link to="/auth/signup">Sign Up</Link>
                    </CardDescription>
                </CardFooter>
            </Card>
        </section>
    )
}
