import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #121214;
    --main-shape: #202024;
    --secundary-shape: #29292E;
    --tertiary-shape: #323238;

    --white: #FFFF;
    --green: #00875F;
    --red: #F75A68;
    --green-light: #00B37E;
    --green-dark: #015F43;
    --red-dark: #AA2834;

    --placeholder: #7C7C8A;
    --base-text: #C4C4CC;
    --title: #E1E1E6;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`