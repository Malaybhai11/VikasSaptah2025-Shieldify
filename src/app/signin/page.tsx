'use client'
import Link from "next/link"
import React, {useEffect, useState} from "react"
import { useRouter } from "next/navigation"
import axios  from "axios"
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
import { signInWithGoogle } from "./actions"


export default function LoginPage() {
  const handleGoogleSignIn = async () => {
    const data = await signInWithGoogle();
    if (data?.url) {
      window.location.href = data.url;
    }
  };
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false)

    const onLogin = async () => {
        try {
            setLoading(true)
            await axios.post("/api/users/login", user)
            toast.success("Login Successfull")
            router.push("/profile")
            
        } catch (error: any) {
            toast.error("Email or Password is incorrect", error.message)
        }finally{
            setLoading(false)
        }
    }
    
    
    return (
        <div className="min-h-screen flex flex-wrap flex-col items-center justify-center">
           <Card className="w-[300px] sm:w-[350px]">
             <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                Click The button to sign in
                </CardDescription>
            </CardHeader>
              <CardContent className="grid gap-4">
                <Button className="w-full mb-4" onClick={handleGoogleSignIn}>Sign in with Google</Button>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Link className="w-full" href='/get-started'><Button className="w-full" variant='outline'>Visit SignUp Page</Button></Link>
            </CardFooter>
         </Card>
        </div>
        
    )
}
