import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
 *{
    margin: 0;
    padding:0;
    outline: none;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }


  body{
    background-color: rgb(72, 127, 90);
  }

  body  .Toastify  .Toastify__toast--success{
  background: #0197f6;
  }
  body  .Toastify  .Toastify__toast--error{
  background: #F2AF29;
  }

  img{
    max-width: 100%;
  }

`;
