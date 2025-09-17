import Counter from './counter'
import Batsman from './Bastman'
import Users from './usears'
import './App.css'
import { Suspense } from 'react'


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

function App() {
  function handleClick(){
    alert('i am clicked')
  }
  const handleClick3 = () => {
    alert(' clicked')
  }
  const handleClick5 = (num) =>{
  const newNum = num + 5;
  alert(newNum);
  }

  return (
    <>
      
      <h3>Vite + React</h3>
      <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Batsman></Batsman>
    <Counter></Counter>
      
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick3 }>Click Me 3</button>
     <button onClick={() => alert('babu')}>Click Me 4</button>
     <button onClick={() => handleClick5(10)}>click mee</button>
  
    </>
  )
}

export default App
