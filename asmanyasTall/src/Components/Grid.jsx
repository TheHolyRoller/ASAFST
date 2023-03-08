import React from 'react'
import '../Styles/Grid.css'; 


function Grid() {
  return (
    <div className="wrapper">
    Wrapper 
    {/* Add in the header here */}
    <header>Navbar </header>
    {/* Add in the contents here  */}
    <div className="panel"></div>
    <div className="panel"></div>
    <div className="panel tall-panel"></div>
    <div className="panel"></div>
    <div className="panel"></div>
    <div className="panel"></div>
    <div className="panel tall-panel"></div>
    <div className="panel tall-panel"></div>
    <div className="panel"></div>
    <div className="panel"></div>
    
    
    {/* Add in the Footer here  */}
    <footer className="footer">
    
    Footer
    </footer>
    </div>
  )
}

export default Grid
