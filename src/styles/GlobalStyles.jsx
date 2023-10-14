import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  /* Colors */
  --text-primary: #FAFAFA;
  --text-secondary: #FFFFFFB2;
  --background-primary: #0C0B0B;

  /* Cards colors */
  --violet: #34387f;
  --red: #600404;
  --green: #5B7F3C;

  /* Ellipse colors */
  --ellipse-red: radial-gradient(81.15% 81.15% at 50% 18.85%, #600404 0%, #171717 100%);
  --ellipse-green: radial-gradient(81.15% 81.15% at 50% 18.85%, #5B7F3C 0%, #171717 100%);
  --ellipse-violet: radial-gradient(81.15% 81.15% at 50% 18.85%, #34387F 0%, #171717 100%);

  /* Font */
  --font-family: 'Poppins', sans-serif;

  /* Sizes */
  --horizontal-padding: 32px;

  /* Shadows and Borders */
  --box-shadow-glass:  rgba(255, 107, 1, 0) 0px 2px 8px,
      rgba(255, 255, 255, 0.3) 0px 1px inset,
      rgba(255, 255, 255, 0.2) 0px 10px inset,
      rgba(255, 255, 255, 0.25) 0px 10px 20px inset,
      rgba(130, 11, 5, 0.3) 0px -15px 30px inset;

  --btn-border-radius: 100px;

  /* Animations and Transitions */
  --transition-duration: 0.3s;
}


  body {
    font-family: var(--font-family);
    background: var(--background-primary);
    color: var(--text-primary);
    /* overflow-x: hidden; */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    width: fit-content;
  }
  
`;

export default GlobalStyles;
