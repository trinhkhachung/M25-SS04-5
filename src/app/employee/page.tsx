"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

export default function page() {
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

  const router1 = useRouter();

  const watch = (item: any) => {
    router1.push(`/employee/${item.Id}`);
  };

  return (
    <div>
      {users.map((item) => (
        <div key={item.Id}>
          <p>Id: {item.Id}</p>
          <p>Name: {item.Name}</p>
          <p>Age: {item.Age}</p>
          <button className='relativ w-60 bg-blue-400 text-white' onClick={() => watch(item)}>Watch Information</button>
        </div>
      ))}
    </div>
  );
}
