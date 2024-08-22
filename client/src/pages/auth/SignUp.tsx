import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Undo2 } from "lucide-react"
import { Link } from "react-router-dom"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"

interface User {
    email: string,
    username: string,
    password: string
}


export default function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    let user: User = {
        email: email,
        username: username,
        password: password
    };
    
    // onChange changes the value of user with inputs from forms
    const onChange = (e: ChangeEvent<HTMLInputElement>, setFunction: Dispatch<SetStateAction<string>>) => {
        setFunction(e.target.value)
    }

    const onClick = async() => {
        let res = await fetch("http://localhost:8000/api/user", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        res = await res.json()
    }

    return (
        <section className="flex place-content-center pt-60">
            <Card className="w-96 h-auto">
                <CardHeader className="flex flex-row space-x-4 ">
                    <Button asChild size="icon"><Link to="/"><Undo2 /></Link></Button>
                    <CardTitle className="text-center">Sign Up</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={email} onChange={(e) => onChange(e,setEmail)}/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" value={username} onChange={(e) => onChange(e, setUsername)} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" value={password} onChange={(e) => onChange(e, setPassword)} />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Button onClick={onClick}>Create Account</Button>
                    <CardDescription>
                        Have an account?
                    </CardDescription>
                    <CardDescription className="hover:text-gray-600 hover:underline">
                        <Link to="/auth/login">Login</Link>
                    </CardDescription>
                </CardFooter>
            </Card>
        </section>
    )
}