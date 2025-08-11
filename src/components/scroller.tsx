import reactLogo from '../assets/react.svg';
import nextjsLogo from '../assets/nextjs-light.svg';
import supabaseLogo from '../assets/supabaselogo.svg';
import tailwindLogo from '../assets/tailwindlogo.svg';

const images = [reactLogo, nextjsLogo, supabaseLogo, tailwindLogo];

const Scroller = () => {
const repeatedImages  = [...images, ...images, ...images, ...images, ...images]
    return (
        <div className="flex overflow-hidden animate-infinite-scroll whitespace-nowrap space-x-10 w-max">
            <div className="flex flex-shrink-0 space-x-10 w-max">
                {repeatedImages.map((image, idx) => (
                    <img
                        key={idx}
                        src={image}
                        alt={`Image ${idx}`}
                        loading='lazy'
                        className="h-12 w-auto object-contain"
                    />
                ))}
            
                       
                {repeatedImages.map((image, idx) => (
                    <img
                        key={idx}
                        src={image}
                        alt={`Image ${idx}`}
                        loading="lazy"
                        className="h-12 w-auto object-contain"
                    />
                ))}
            </div>
            {/* <div className="flex text-red-500 animate-infinite-scroll whitespace-nowrap"><h1>Scroller</h1></div> */}
        </div>
    );
}

export default Scroller;