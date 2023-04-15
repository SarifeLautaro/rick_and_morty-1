import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'
const Nav = ({onSearch, access, setAccess}) => {
    const handleLogOut = () => {
        setAccess(false);
    }
    return(
        <nav className='nav'>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to='/about'>ABOUT</Link>
            </button>
            <button>
                <Link to='/home'>HOME</Link>
            </button>
            <button> 
                <Link to='/favorites'>FAVORITES</Link>
            </button>
            <button onClick={handleLogOut}>Log Out</button>
        </nav>
    )
}
export default Nav;