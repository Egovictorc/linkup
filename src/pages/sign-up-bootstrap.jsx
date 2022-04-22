import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SignupForm from '../sections/signup/SignupForm';

import { Container } from 'react-bootstrap';

const Signup = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('state ', state);
    // e.stopPropagation();
  };

  return (
    <Layout>
      <Container className="d-flex flex-column site-container">
        <div className="" style={{ textAlign: 'center' }}>
          <p>Sign up to continue</p>
        </div>
        <section
          className="form-section"
          style={{ maxWidth: 550, margin: '0 auto' }}
        >
          <SignupForm />
        </section>
      </Container>
    </Layout>
  );
};

export default Signup;
