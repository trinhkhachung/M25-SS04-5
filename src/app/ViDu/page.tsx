"use client"
import { useRouter } from 'next/navigation'
import React, { useReducer } from 'react'

export default function ViDu() {
    const router =useRouter()
    const loginUser=()=>{
        router.push("/login/")
    }
  return (
    <div>
      <button onClick={loginUser}>Login</button>
      <button>Home</button>
    </div>
  )
}
