// Img.tsx
import { ImageProps } from 'next/image';

interface ImgProps extends ImageProps {
  alt: string;
  src: string
}

const Img: React.FC<ImgProps> = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default Img;
