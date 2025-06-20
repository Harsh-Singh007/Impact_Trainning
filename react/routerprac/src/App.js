import './App.css';
import Home from './home';
import { Routes, Route } from 'react-router-dom';
import Addsaler from './addsaler';
import Loginsign from './loginsign';
import Product from './product';
import Customer from './customer';
import Counter from './counter';
import Tweet from './tweet';
import Apifetch from './apifetch';
import Emojji from './emojji';
import State from './stateprac' 
function App() {
  return (
   <>
    <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/home" element={< Home/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/addsaler" element={<Addsaler />} />
          <Route path="/loginsign" element={<Loginsign />} />
 <Route path="/stateprac" element={<State />} />
          <Route path="/counter" element={<Counter/>}></Route>
          <Route path="/tweet" element={<Tweet/>}></Route>
                  <Route path="/apifetch" element={<Apifetch/>}></Route>
                            <Route path="/emoji" element={<Emojji/>}></Route>

  


    </Routes> 
   </>
  );
}

export default App;
