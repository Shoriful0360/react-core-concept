

import './App.css'
import Counter from './count'
import User from './use'
import Friends from './Friend'


function App() {
  
function  handleClick (){
  alert('click button one')
}
function handleThird(num){
  alert(num+10)
}
  return (
    <>
     
      <h3>Explore-React-core-concept</h3>
      <Friends></Friends>
      <User></User>
      <Counter></Counter>
      <button onClick={handleClick}>Click 1</button>
      <button onClick={()=>{alert('Click button 2')}}>Click 2</button>
      {/* when called is parameter */}
      <button onClick={()=>handleThird(3)}>third</button>
   
     
    </>
  )
}

export default App
