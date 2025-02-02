import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Router,Route} from 'react-router-dom'
import Main from "./components/Main/main"
import Login from './components/Login/Login';
import Occasions from './components/Occasion/Occasions';
import Gallery from './components/Gallery/Gallery';
import Bridal from './components/Bridal/Bridal';
import Model from './components/Model/Model';
import Others from './components/Others/Others';
import Contactus from './components/ContactUS/Contactus';
import Getstartedb from './components/Getstartedb/Getstartedb';
import Getstartedn from './components/Getstartedn/Getstartedn';
import Signup from './components/Signup/Signup';
import Getstarted from './components/Getstarted/Getstarted';
import Men from './components/Men/Men';
import Female from './components/Female/Female';
import Root from './root';
import SearchArtist from './components/SearchArtist/SearchArtist';
import Male from './components/Male/Male';
import Review from './components/Review/Review';
function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<Login></Login>,
    },
    {
      path:"/Home",
      element:<Root></Root>,
      children:[
        {
          path:'/Home',
          element:<Main></Main>
        },{
          path:'occ',
          element:<Occasions></Occasions>
        },
        {
          path:'Gall',
          element:<Gallery></Gallery>
        },
        {
          path:'contact',
          element:<Contactus></Contactus>
        },
        {
          path:'review',
          element:<Review></Review>
        }
      ]
      },
        {
          path:'/bridal',
          element:<Bridal></Bridal>
        },
        {
          path:'/male',
          element:<Male></Male>
        },
        {
          path:'/model',
          element:<Model></Model>
        },
        {
          path:'/o',
          element:<Others></Others>
        },
        
        {
          path:'/get',
          element:<Getstartedb></Getstartedb>
        },
        {
          path:'getn',
          element:<Getstartedn></Getstartedn>
        },
        {
          path:'shoot',
          element:<Getstarted></Getstarted>
        },
        {
          path:'men',
          element:<Men></Men>
        },
        {
          path:'female',
          element:<Female></Female>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/searchartist',
          element:<SearchArtist></SearchArtist>
        }
      

  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
