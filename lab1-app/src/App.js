import './App.css';
import { useState } from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import SelectedBeast from './Components/SelectedBeast';
import imageArray from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [clickedImg, setClickedImg] = useState(null)
  return (
    <div className="App">
      <Header/>
      {/* pop out image */}
      {clickedImg && <SelectedBeast imageData={clickedImg} selectedImg={setClickedImg}/>}
      {/* list of images */}
      <Main imageData={imageArray} selectedImg={setClickedImg}/>
      <Footer/>
    </div>
  );
}

export default App;
