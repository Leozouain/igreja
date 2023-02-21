import Principal from "./Pages/Principal"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Visit from "./Pages/Visit"
import About from "./Pages/About"



function App() {


  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Principal/>}/>
          <Route path="/visit" element={<Visit/>}/>
          <Route path="/about" element={<About/>}/>

          
        </Routes>
        <Footer/>
      </Router>
        
    </div>
  )
}

export default App
