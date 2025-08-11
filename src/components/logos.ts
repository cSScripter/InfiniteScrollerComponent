import reactLogo from '../assets/react.svg';
import nextjsLogo from '../assets/nextjs-light.svg';
import nextjsDarkLogo from '../assets/nextjs-dark.svg';
import supabaseLogo from '../assets/supabaselogo.svg';
import tailwindLogo from '../assets/tailwindlogo.svg';


const lightLogos = [reactLogo, nextjsLogo, supabaseLogo, tailwindLogo];
const darkLogos = [reactLogo, nextjsDarkLogo, supabaseLogo, tailwindLogo];

export function getImages(darkMode: boolean) {
    return darkMode ? darkLogos : lightLogos;
}