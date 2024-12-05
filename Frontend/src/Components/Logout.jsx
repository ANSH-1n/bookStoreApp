import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "../context/AuthProvider.jsx"

export default function () {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Succesfully!!")
            setTimeout(() => {
                window.location.reload()  //it will reload the page automatically agter the logo
            }, 2000)

        } catch (error) {
            toast.error("error", error)
        }
    }
    return (
        <div>
            <button className="px-3 p-y2 bg-red-500" text-white rounded-md cursor-pointer onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}
