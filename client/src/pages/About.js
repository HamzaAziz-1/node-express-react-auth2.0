import styled from "styled-components";
import about from "../assets/about.svg"
const About=()=> {
  return (
    <Wrapper className="page">
      <div className="content">
        <h2>About Us</h2>
        <p>
          Welcome to our journey! We are a team of passionate individuals
          dedicated to providing innovative solutions in the world of
          technology. Our mission is to make a positive impact through
          creativity and cutting-edge technology.
        </p>
        <p>
          With a blend of skills ranging from web development to artificial
          intelligence, we strive to create products that not only meet but
          exceed expectations. Our commitment to excellence drives us to explore
          new horizons and push the boundaries of what is possible.
        </p>
      </div>
      <img src={about} alt="job hunt" className="img main-img" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  .content {
    max-width: 800px;
    margin: auto;
    padding: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--primary-500);
  }

  p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
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
`;
export default About;
