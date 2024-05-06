
import './App.css';
import Food from "./Components/Food/Food"
import Event from "./Components/Event/Event"
import Browse from './Components/Browse/Browse';
import Footer from './Components/Footer/Footer';
import Header from "./Components/Header/Header"
import Provide from './Components/Provide/Provide';
import Customer from './Components/Customer/Customer';


function App() {
  return (
    <>
    <Header/>
    <Browse/>
    <Provide/>
    <Event/>
    <Food/>
    <Customer/>
    <Footer />
</>
	
	
  )
}

export default App;
