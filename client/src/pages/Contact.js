import styled from "styled-components";

function Contact() {
  return (
    <Wrapper className="page">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We'd love to hear from you! Reach out to
          us using the contact information below or fill out the form, and we'll
          get back to you as soon as possible.
        </p>
        <Form>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required/>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required/>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required minLength={10} rows="4"></textarea>
          <div className="btn-container">
          <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: grid;
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
  .btn{
    align-items: center;
    justify-content: center;
  }
`;

const Form = styled.form`
  margin-top: 2rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: var(--primary-500);
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    margin: 0;
    position: absolute;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .btn-container {
    position: relative;
  }
`;

export default Contact;
