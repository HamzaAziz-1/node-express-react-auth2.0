import { Link,Redirect } from 'react-router-dom';
import styled from 'styled-components';
import main from '../assets/main.svg';
import { useGlobalContext } from '../context';

function Home() {
  const { user } = useGlobalContext();
  return (
    <>
      <Wrapper className="page">
        <div className="info">
          <h2>
            Secure and Seamless <span>Authentication</span> with OAuth 2.0
          </h2>
          <p>
            Welcome to our OAuth 2.0 authentication platform. We provide a
            secure and seamless way for you to authenticate and authorize
            applications.
          </p>
          <p>
            Whether you're building a web or mobile app, our OAuth 2.0
            implementation ensures your users have a smooth and secure
            authentication experience. No more managing passwords directly —
            leave the authentication to us.
          </p>
          {!user && (
            <>
            <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
           </>
            )}
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  h2 {
    font-weight: 700;
  }
  h2 span {
    color: var(--primary-500);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
    }
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export default Home;
