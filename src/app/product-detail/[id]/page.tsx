"use client"
import React from 'react'
export default function page(props:any) {
    const {params} =props
  return (
    <div>
        <h3>Bai 3</h3>
      <p>Id cua product :{params.id}</p>
    </div>
  )
}
