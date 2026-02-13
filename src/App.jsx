import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  return (
    <div>
    <form>

      <input type="text" placeholder="enter your name"  value={title} onChange={(e) => {settitle(e.target.value)}}></input>
      <button>submit</button>
    </form>
    </div>
  )
}

export default App
