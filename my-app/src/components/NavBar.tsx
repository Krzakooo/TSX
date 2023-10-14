import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
<nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/blog">Blog</Link>
          </li>
          <li>
             <Link to="/photos">Photos</Link>
          </li>
          <li>
             <Link to="/profile">Profile</Link>
          </li>
       </ul>
</nav>
 );
};

export default NavBar;

