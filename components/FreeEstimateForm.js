import { useState } from 'react'
import styled from 'styled-components'

export default function FreeEstimateForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [select, setSelect] = useState('')
  const [message, setMessage] = useState('')

  //   Form validation state
  const [errors, setErrors] = useState({})

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Schedule Service')

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors['name'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (phone.length <= 0) {
      tempErrors['phone'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Sending')

      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          fullname: name,
          email: email,
          phone: phone,
          select: select,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')
        return
      }
      console.log(name, email, phone, select, message)
    }
    setShowSuccessMessage(true)
    setShowFailureMessage(false)
    setButtonText('Schedule Service')
  }

  return (
    <>
      <EstimateForm>
        <div className="service-form">
          <h3>Need Septic System Service?</h3>
          <p>Fill out the form below and we will contact you shortly</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }}
              placeholder="Phone"
            />
            <select
              name={select}
              onChange={(e) => {
                setSelect(e.target.value)
              }}
            >
              <option defaultValue="Free Estimate">Free Estimate</option>
              <option value="Septic Tank Installation">
                Septic Tank Installation
              </option>
              <option value="Septic Tank Repair">Septic Tank Repair</option>
              <option value="Septic Tank Inspection">
                Septic Tank Inspection
              </option>
              <option value="Perc Test">Perc Test</option>
              <option value="Septic System Installation">
                Septic System Instsallation
              </option>
              <option value="Drain Field Installation">
                Drain Field Installation
              </option>
              <option value="Drain Field Repair">Drain Field Repair</option>
            </select>
            <textarea
              type="text"
              name={message}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              placeholder="Describe your problem please"
            ></textarea>
            <button>{buttonText}</button>
            <div>
              {showSuccessMessage && (
                <p className="text-green">
                  Thankyou! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </EstimateForm>
    </>
  )
}

const EstimateForm = styled.div`
  .service-form {
    color: #fff;
    display: block;
    max-width: 100%;
    background: #2c3e50;
    padding: 1rem 2rem 2rem 2rem;

    h3 {
      margin: 1rem 0;
    }

    button {
      background-color: red;
      width: 100%;
      height: 50px;
      border: none;
      color: #fff;
      font-size: inherit;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }
`
