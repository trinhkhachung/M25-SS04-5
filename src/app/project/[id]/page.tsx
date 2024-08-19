"use client"
import React from 'react';

export default function Page(props: any) {
  const projects = [
    {
      id: 1,
      name: 'bài tập về nhà Toán',
      activity: 'do with each other',
    },
    {
      id: 2,
      name: 'bài tập về nhà Anh',
      activity: 'do with each other',
    },
    {
      id: 3,
      name: 'bài tập về nhà Hóa',
      activity: 'do with each other',
    },
    {
      id: 4,
      name: 'bài tập về nhà Sinh',
      activity: 'do with each other',
    },
    {
      id: 5,
      name: 'bài tập về nhà Vật Lý',
      activity: 'do with each other',
    },
  ];

  const { params } = props;
  const projectUser = projects.filter((item) => item.id === parseInt(params.id, 10));

  return (
    <div>
      Project của user có id: {params.id}
      {projectUser.map((item) => (
        <div key={item.id}>
          <div>Tên: {item.name}</div>
          <div>Hoạt động: {item.activity}</div>
        </div>
      ))}
    </div>
  );
}
