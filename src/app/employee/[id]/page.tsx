"use client"
import React from 'react'

export default function page(props:any) {
  const {params} = props
  console.log("props bai 9",props);
  const users = [
    {
      Id: 1,
      Name: "David",
      Age: 20,
    },
    {
      Id: 2,
      Name: "Linda",
      Age: 20,
    },
    {
      Id: 3,
      Name: "Kavin",
      Age: 20,
    },
  ];
  const idUser = users.filter((item)=>{
    return item.Id == params.id
  })
  return (
    <div>
      {idUser.map((item)=>{
        return <div>
          Trang thong tin chi tiet :
          {item.Name} , {item.Id} , {item.Age}
        </div>

      })}
    </div>
  )
}
