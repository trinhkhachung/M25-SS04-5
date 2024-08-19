"use client"
import React from 'react'
export default function page(props:any) {
    const {params} =props
  return (
    <div>
      <h3>Bai 4 :</h3>
      <p>Ten cong ty : {params.name}</p>
    </div>
  )
}
