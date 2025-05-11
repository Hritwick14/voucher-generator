"use client";

import { useState } from "react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <main className="p-10">
            <Card className="mt-10 mx-auto w-[400px]">
                <CardHeader>
                    <CardTitle className="text-lg">Welcome to Voucher Creation</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input className="mb-1" type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value.trim()) }} />
                    <Input className="mt-1" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value.trim()) }} />
                </CardContent>
                <CardFooter>
                    <Button onClick={()=>{ console.log(username,password) }}>Sign In</Button>
                </CardFooter>
            </Card>
        </main>
    )
}