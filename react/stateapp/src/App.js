import {Routes, Route } from 'react-router-dom';
import Emoji from './emojji'
import Home from './home'
import ApiFetch from './apifetch'
import Counter from './counter'
import Tweet from './tweet'
import UseeeEffect  from './useeefect';
function App() {
  return (
    <>
    <Routes>
       <Route path='/' element={<Home/>}></Route>
      <Route path='/emoji' element={<Emoji/>}></Route>
      <Route path='/counter' element={<Counter />} />
      <Route path='/apifetch' element={<ApiFetch />} />
      <Route path='/twitter' element={<Tweet />} />
        <Route path='/useeffect' element={<UseeeEffect />} />

    </Routes>
    </>
  );
}

export default App;
