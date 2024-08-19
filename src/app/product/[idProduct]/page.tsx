"use client"
import React from 'react'
/**
 * component trong nextjs co hai loai 
 * 1. client component - chay duoc trong moi truong trinh duyet
 * 2. server component - chi chay trong moi truong server
 * Mac dinh khi tao function thi no mac dinh la server component
 */
export default function page(props:any) {
    const {params} = props 
    console.log("gia tri props",props);
  return (
    <div>
      <div>
        Trang chi tiet san pham
        <p>Id san pham la : {params.idProduct}</p>
      </div>
    </div>
  )
}
