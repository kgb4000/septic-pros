import styled from 'styled-components'

const Button = styled.button`
  background-color: red;
  border: 0 solid #e2e8f0;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Basier circle', -apple-system, system-ui, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1;
  padding: 1.4rem 1.6rem;
  text-align: center;
  text-decoration: none #0d172a solid;
  text-decoration-thickness: auto;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #1e293b;
    color: #fff;
    border: 0 solid #e2e8f0;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 1.2rem 2rem;
  }
`

export default Button
