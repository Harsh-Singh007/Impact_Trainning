import {Routes, Route } from 'react-router-dom';
import Emoji from './emojji'
import Home from './home'
import ApiFetch from './apifetch'
import Counter from './counter'
import Tweet from './tweet'
import UseeeEffect  from './useeefect';
import Useeffect1 from './useeffect1';
import Autorefreshclock from './autorefreshclock';
import Formlocalstoarge from './formlocalstoarge';
import Userstatus from './Userstatus';


function App() {
  return (
    <>
    <Routes>
       <Route path='/' element={<Home/>}></Route>
              <Route path='/home' element={<Home/>}></Route>

      <Route path='/emoji' element={<Emoji/>}></Route>
      <Route path='/counter' element={<Counter />} />
      <Route path='/apifetch' element={<ApiFetch />} />
      <Route path='/twitter' element={<Tweet />} />
      <Route path='/useeffect' element={<UseeeEffect />} />
      <Route path='/useeffect1' element={<Useeffect1 />} />
      <Route path='/autorefreshclock' element={<Autorefreshclock />} />
        <Route path='/formlocalstorage' element={<Formlocalstoarge />} />
     <Route path='/userstatus' element={<Userstatus />} />



    </Routes>
    </>
  );
}

export default App;
