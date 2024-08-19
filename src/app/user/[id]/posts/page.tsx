"use client"
import React from 'react'
export default function page(props:any) {
    const {params}=props
    const post =[
        {
            idd:1,
            name:'DuyAnh'

        },
        {
            idd:2,
            name:'DuyCong'
            
        },
        {
            idd:1,
            name:'AnhDuc'            
        },
        
    ]
    let postUser = post.filter((item)=>{
        return item.idd = params.id
    })
  return (
    <div>
      Post :
      {postUser.map((item)=>{
        return <div>day la bai viet cua thang id {item.idd} , {item.name}</div>
      })}


    </div>
  )
}
