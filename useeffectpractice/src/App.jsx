import { useEffect, useState } from "react"

function App() {

  const [currentTab, setCurrentTap] = useState('feed');

  return (
    <>
      <button style={{color : currentTab == "feed" ? "red" : "black"}} onClick={() => setCurrentTap('feed')}>Feed</button>
      <button style={{color : currentTab == "followers" ? "red" : "black"}} onClick={() => setCurrentTap('followers')}>Followers</button>
      <button style={{color : currentTab == "notifications" ? "red" : "black"}} onClick={() => setCurrentTap('notifications')}>Notifications</button>
      <button style={{color : currentTab == "profile" ? "red" : "black"}} onClick={() => setCurrentTap('profile')}>Profile</button>
      <h1>This is {currentTab} page</h1>
      <UI/>
    </>
  )
}

function UI(){
  const [currentTab, setCurrentTap] = useState(1);
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
    .then(async response => {
      const json = await response.json();
      setTodo(json);
      setLoading(false);
    })
  }, [currentTab])

  return (
    <>
      <button style={{color : currentTab == 1 ? "red" : "black"}} onClick={() => setCurrentTap(1)}>todo1</button>
      <button style={{color : currentTab == 2 ? "red" : "black"}} onClick={() => setCurrentTap(2)}>todo2</button>
      <button style={{color : currentTab == 3 ? "red" : "black"}} onClick={() => setCurrentTap(3)}>todo3</button>
      <button style={{color : currentTab == 4 ? "red" : "black"}} onClick={() => setCurrentTap(4)}>todo4</button>
      <h1>{loading ? "loading..." : todo.title}</h1>
    </>
  )
}





export default App
