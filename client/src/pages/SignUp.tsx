import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Undo2 } from "lucide-react"
import { Link } from "react-router-dom"

export default function SignUp() {
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
                        <Input id="email" type="email" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Button>Create Account</Button>
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