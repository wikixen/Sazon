import { Link, useLocation } from "react-router-dom"

export default function PageNotFound() {
    const {pathname} = useLocation();
    return (
        <main>
            <section className="flex justify-center text-2xl">
                Error 404 - {pathname} route doesn't exist.
            </section>
            <section className="flex justify-center text-2xl">
                <Link to='/' className="text-blue-700 hover:text-blue-400 hover:underline">Click here</Link>&nbsp; to return home
            </section>
        </main>
    )
}