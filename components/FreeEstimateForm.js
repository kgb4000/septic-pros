import styled from 'styled-components'
import Button from '../components/Button'

export default function FreeEstimateForm() {
  return (
    <>
      <EstimateForm>
        <h2>Get Your Free Estimate!</h2>
        <p>Get your Free Estimate on all our Septic System Services</p>
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" />
        </label>
        <label htmlFor="phone">
          Phone
          <input type="text" name="phone" />
        </label>
        <label type="text" htmlFor="message">
          Message
          <textarea placeholder="Please describe what you need."></textarea>
        </label>
        <Button>Get My Free Estimate!</Button>
      </EstimateForm>
    </>
  )
}

const EstimateForm = styled.form`
  input {
    width: 100%;
    height: 40px;
    padding: 1rem;
    margin: 0.5rem 0;
  }

  textarea {
    height: 200px;
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 0;
  }
`
