import Login from "../../components/auth/Login";
import SignUp from "../../components/auth/SignUp";


// GuestLayout is where unregistered users land
// I may want to add a tabs component to the login/sign up func
export default function GuestLayout() {

    return (
        <main className="flex flex-col">
            <nav className="bg-primary h-auto pt-2">
                <h1 className="text-6xl font-logo1 float-start text-white">Sazon</h1>
                <div className="col-end-12 flex justify-end gap-2">   
                    <Login />
                    <SignUp />
                </div>
            </nav>
            <section className="mt-20">
                <h2 className="text-xl">Add some spice to your life with Sazon</h2>
            </section>
        </main>
    )
}