import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Details from './components/Details';
import Form from './components/Form'
import Favorites from './components/Favorites';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes,Route, useLocation, useNavigate, } from 'react-router-dom';


const URL_BASE ='https://be-a-rym.up.railway.app/api/character'
const API_KEY ='7f935e3d861f.9b1064a47e65b6b004f5'

const email = 'lautarosarife@gmail.com'
const password = 'mate123'



function App() {
   const location = useLocation();
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);


  const login = (userData) =>{
   if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate('/home');
   }
  }
  useEffect (() => {
                !access && navigate('/')  
  },[access, navigate])
    const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    .then(response=> response.data)
    .then((data) => {
       if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
  }
  const onClose = (id) => {
    const charactersFiltered = characters.filter(character => character.id !== id)
    setCharacters(charactersFiltered)
 }
   return (
     <div className='App'>
      {
         location.pathname !== '/'
         ? <Nav onSearch={onSearch} setAccess={setAccess}/>
         : null
      }
        <Routes>
                 <Route path='/home' element={<Cards characters={characters}onClose={onClose}/>}/>
                 <Route path='/about' element={<About/>}/>
                 <Route path='/detail/:id' element={<Details/>} />
                 <Route path='/' element={<Form login={login}/>} />
                 <Route path='favorites'  element={<Favorites/>} />

        </Routes>
     </div>
   );
}

export default App;