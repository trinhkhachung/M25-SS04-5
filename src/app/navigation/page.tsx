"use client"
import Link from 'next/link'
import React from 'react'
export default function page() {
  return (
    <div>
      Menu thanh dieu huong
      <Link href={"/navigation/about"}>about</Link>
      <Link href={"/navigation/new"}>new</Link>
    </div>
  )
}
