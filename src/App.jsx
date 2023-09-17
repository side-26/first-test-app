import logo from './logo.svg';
import './App.css';
import UserForm from './components/userForm';
import UserList from './components/usersList';
import { useState } from 'react';

function App() {
  const [usersList, setUsersList] = useState([{ name: 'hello', email: 'hello@hello.com' }])
  const addNewUser = (user) => {
    setUsersList([...usersList, user])
  }
  return (
    <>
      <UserForm addNewUser={addNewUser} />
      <UserList list={usersList}  />
    </>
  );
}

export default App;
