import React from 'react'

export default function UserList({list}) {
  console.log(list)
  return (
    <div>
      {
        list?.map((item, index) => (
          <div key={index}>
            {item.name}
            <br />
            {item.email}
          </div>
        ))
      }
    </div>
  )
}
