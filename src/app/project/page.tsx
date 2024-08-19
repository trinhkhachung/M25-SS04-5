"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

export default function page(props:any) {
    const pathName = usePathname()
    const {params} = props

  return (
    <div>
      Danh Sach User 
    </div>
  )
}
