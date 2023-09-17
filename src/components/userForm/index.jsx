import React, { useState } from 'react'

export default function UserForm({ addNewUser }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const onSubmit = (formEvent) => {
    formEvent.preventDefault()
    addNewUser({ name, email })
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='enter your name' />
        <label htmlFor="name">email</label>
        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' />
        <button type='submit' onClick={addNewUser}>
          submit
        </button>
      </form>
    </>
  )
}
