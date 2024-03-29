import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Link,useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { user, logoutUser } = useGlobalContext();
  const history = useHistory();
  return (
    <Wrapper>
      <div className='nav-center'>
        <Link to='/' className='home-link'>
          <img src={logo} alt='jobs app' className='logo' />
        </Link>

        <Link to='/' className='home-link'>
          Home
        </Link>
        <Link to='/contact' className='home-link'>
          Contact Us
        </Link>
        <Link to='/about' className='home-link'>
          About
        </Link>
        {user && (
          <div className='nav-links'>
            <p>hello, {user.name}</p>
            <button
              className='btn btn-small'
              onClick={() => {
                logoutUser();
                history.push('/')
              }}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--white);
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .logo{
    width: 30%;
    height: auto;
  }
  .nav-links {
    display: flex;
    flex-direction: row;
  }
  .nav-links p {
    margin: 0;
    text-transform: capitalize;
    margin-bottom: 0.25rem;
  }
  .home-link {
    display: flex;
    align-items: flex-end;
  }
  @media (min-width: 776px) {
    .nav-links {
      flex-direction: row;
      align-items: center;
    }
    .nav-links p {
      margin: 0;
      margin-right: 1.5rem;
    }
  } ;
`;

export default Navbar;
