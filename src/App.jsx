import { useState } from 'react'
import { puppyList } from './data'
import './App.css'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log(setPuppies);

  const featPup = puppies.find((pup) => pup.id === featPupId)

  return (
    <>
      <div className='App'>
        { featPupId && (
          <div className='featured'>
            <h2>{featPup.name}</h2>
            <u>
              <li>Age: {featPup.age}</li>
              <li>E-mail: {featPup.email}</li>
            </u>
          </div>
        )} 
        
        {
          puppies.map((puppy) => {
            return <p onClick={() => { setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
      </div>
    </>
  )
}

export default App
