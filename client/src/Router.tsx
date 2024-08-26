import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestLayout from "./pages/Home/GuestLayout";
import UserLayout from "./pages/Home/UserLayout";
import PageNotFound from "./pages/Error/PageNotFound";
import { useStateContext } from "./contexts/ContextProvider";

// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <GuestLayout />,
//         children: [
//             {
//                 path: '/login',
//                 element: <Login/>
//             },
//             {
//                 path: '/signup',
//                 element: <SignUp/>
//             },
//         ]
//     },
//     {
//         path: '/',
//         element: <UserLayout />,
//         children: [
//             {
                
//             }
//         ]
//     },
//     {
//         path: '*',
//         element: <PageNotFound/>
//     }
    
// ])

export const Router = () => {
    const { user, token } = useStateContext();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ token ? <UserLayout /> : <GuestLayout /> }/>
                <Route path="*" element={ <PageNotFound/> } />
            </Routes>
        </BrowserRouter>
    )
} 