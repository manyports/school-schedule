import { useState } from 'react'
import './App.css'
import Monday from './Monday.jsx'
import Tuesday from './Tuesday.jsx'
import Thursday from './Thursday.jsx'
import Friday from './Friday.jsx'
import Wednesday from './Wednesday.jsx'

function App() {
  return (
    <>
      <Monday/>
      <Tuesday/>
      <Wednesday/>
      <Thursday/>
      <Friday/>
      <p> This Template is on <a href="https://github.com/manyports/school-schedule">Github</a>. Make sure to check it out!</p>
    </>
  )
}

export default App
