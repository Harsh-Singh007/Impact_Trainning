import Header from './header';
import { Link} from 'react-router-dom';

const Useeefect = () => {
 

  return (
    <>
      <Header />
      <button className='m-3 bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white w-[100px]'><Link to='/useeffect1'>Data fetch</Link></button>
      
            <button className='m-3 bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white w-[100px]'><Link to='/autorefreshclock'>clock</Link></button>
            <button className='m-3 bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white w-[200px]'><Link to='/formlocalstorage'>Form localStorage</Link></button>

    </>
  );
};

export default Useeefect;
