import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Landing() {
    return (
        <main className="flex flex-col">
            <nav className="bg-black h-auto pt-2">
                <h1 className="text-4xl italic font-mono float-start text-white">Sazon</h1>
                <div className="col-end-12 flex justify-end gap-2">   
                    <Button asChild ><Link to="/auth/login" className="bg-black">Login</Link></Button>
                    <Button asChild ><Link to="/auth/signup" className="bg-black">Sign Up</Link></Button>
                </div>
            </nav>
            <section className="mt-20">
                <h2 className="text-xl">The last app you'll ever need for you kitchen antics.</h2>
            </section>
        </main>
    )
}