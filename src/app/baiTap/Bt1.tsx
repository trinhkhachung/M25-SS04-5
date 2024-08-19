"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
export default function Bt1() {
  const pathname = usePathname(); 

  return (
    <div>
        <h3>Bai 1 :</h3>
        Day la trang chu
        <h3>Bai 5 , 6</h3>
        <div style={{display:'flex', flexDirection:'row', gap:10}}>
          <Link className={pathname === "/about" ? "active" : ""} href='/about'>About</Link>
          <Link className={pathname === "/home" ? "active" : ""} href='/home'>Home</Link>
          <Link className={pathname === "/login" ? "active" : ""} href='/login'>Login</Link>
          <Link className={pathname === "/contact" ? "active" : ""} href='/contact'>Contact</Link>
        </div>
    </div>
  )
}
