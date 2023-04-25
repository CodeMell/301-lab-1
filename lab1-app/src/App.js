import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import imageArray from './data.json';
import SelectedBeast from './Components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Main imageData={imageArray} />
      <Footer/>
    </div>
  );
}

export default App;
