import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction, AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog"

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
        });
        res = await res.json();
        document.cookie = `AUTHORIZATION=${res}`;
    }
    
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="bg-black text-white hover:bg-black hover:text-gray-500">Login</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Login</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Label htmlFor="email_or_username">Email or Username</Label>
                        <Input id="email_or_username" value={identity} type="email" onChange={(e) => onChange(e, setIdentity)} />
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" value={password} type="password" onChange={(e) => onChange(e, setPassword)} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onClick}>Login</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
