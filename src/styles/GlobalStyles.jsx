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
  --box-shadow-glass:  0 2px 8px rgba(90, 38, 232, 0.5),
    inset 0 1px rgba(255, 255, 255, 0.3), inset 0 10px rgba(255, 255, 255, 0.2),
    inset 0 10px 20px rgba(255, 255, 255, 0.25),
    inset 0 -15px 30px rgba(76, 8, 135, 0.3);

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
