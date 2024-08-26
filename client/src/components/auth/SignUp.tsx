import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

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
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="bg-black text-white hover:bg-black hover:text-gray-500">Sign Up</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Sign Up</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={email} type="email" onChange={(e) => onChange(e, setEmail)} />
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" value={username} onChange={(e) => onChange(e, setUsername)} />
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" value={password} type="password" onChange={(e) => onChange(e, setPassword)} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onClick}>Sign Up</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}