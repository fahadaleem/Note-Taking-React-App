import React from "react"


const Header = (props)=>{
  return(
    <header>
      <h1>Note Taking App</h1>
      <button className="new-note-btn" onClick={props.handler} >New Note</button>
      </header>
  )
}


export default Header;