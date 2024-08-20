import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Landing() {
    return (
        <main>
            <Button asChild><Link to="/auth/login">Login</Link></Button>
            <Button asChild><Link to="/auth/signup">Sign Up</Link></Button>
        </main>
    )
}