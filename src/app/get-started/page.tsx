'use client'
import Link from "next/link"
import React, {useEffect, useState} from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { signUpWithGoogle } from "./actions"


export default function SignupPage() {
  const handleGoogleSignUp = async () => {
    const data = await signUpWithGoogle();
    if (data?.url) {
      window.location.href = data.url;
    }
  };
    const router  = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        username:"",
    })

    const [loading, setLoading] = useState(false)

    const onSignup = async () => {
        try {
            setLoading(true)
            await axios.post("/api/users/signup", user)
            toast.success("Signup successfull")
            toast("Please check your inbox and click on verification link.", {duration: 10000})
            router.push("/login")
        } catch (error: any) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    
    return (
            <div className="min-h-screen flex flex-wrap flex-col items-center justify-center">
                <Card className="w-[300px] sm:w-[350px]">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Signup</CardTitle>
                        <CardDescription>
                        Click to Signup
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <Button
                        onClick={handleGoogleSignUp}
                        className="w-full mb-4">Sign Up with Google</Button>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2">
                        <Link className="w-full" href='/signin'><Button className="w-full" variant='outline'>Visit Login Page</Button></Link>
                    </CardFooter>
                </Card>
                </div>
    )
}