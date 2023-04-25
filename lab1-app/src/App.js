import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import imageArray from './data.json';
import { useState } from 'react'
import SelectedBeast from './Components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [clickedBeast, setClickedBeast] = useState(null)
  return (
    <div className="App">
      <Header/>
      {/* pop out image */}
      <Main imageData={imageArray} selectedImg={setClickedBeast}/>
      {/* list of images */}
      {clickedBeast && <SelectedBeast imageData={clickedBeast} selectedImg={setClickedBeast}/>}
      <Footer/>
    </div>
  );
}

export default App;
