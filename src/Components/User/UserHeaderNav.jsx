import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Feed from '../../Assets/feed.svg?react';
import Exit from '../../Assets/sair.svg?react';
import Post from '../../Assets/adicionar.svg?react';
import Stats from '../../Assets/estatisticas.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const navigate = useNavigate();
  const { userLogout} = React.useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)');
  const {pathname} = useLocation()

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])
  
  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      { mobile && <button aria-label='Menu' className={`${styles.mobileButton} ${ mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button> }
      <nav className={`${ mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to='/account' end><Feed />{mobile && 'My Pics'}</NavLink>
        <NavLink to='/account/stats'><Stats />{mobile && 'Stats'}</NavLink>
        <NavLink to='/account/post'><Post />{mobile && 'New Post'}</NavLink>
        <button onClick={handleLogout}><Exit />{mobile && 'Log Out'}</button>
      </nav>
    </>
  )
}

export default UserHeaderNav;