import { getImages } from './logos';

interface ScrollerProps {
  darkMode: boolean;
}

const Scroller: React.FC<ScrollerProps> = ({ darkMode }) => {
  const images = getImages(darkMode);

  const repeatCount = 10;
  const repeatedImages = Array(repeatCount).fill(images).flat();

  // Simple iOS detection
  // const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  return (
    <div className="flex overflow-hidden whitespace-nowrap space-x-10">
      <div className="flex flex-shrink-0 space-x-10 animate-infinite-scroll whitespace-nowrap w-max">
        {repeatedImages.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`Image ${idx}`}
            loading="lazy"
            className="h-12 w-12 object-contain"
          />
        ))}

        {repeatedImages.map((image, idx) => (
          <img
            key={idx + repeatedImages.length} // keys must be unique
            src={image}
            alt={`Image ${idx + repeatedImages.length}`}
            loading="lazy"
            className="h-12 w-12 object-contain"
          />
        ))}
      </div>
      {/* <div className="flex text-red-500 animate-infinite-scroll whitespace-nowrap"><h1>Scroller</h1></div> */}
    </div>
  );
};

export default Scroller;
