
import { useState } from 'react';

import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';

import {
  GalleryContainer,
  MainImageContainer,
  ImageTrack,
  MainImage,
  ArrowButton,
  ArrowIcon,
  ThumbnailsContainer,
  ThumbnailButton,
  ThumbnailImage,
} from './Gallery.styles';

const Gallery = ({
  className,
  width,
  height,
  radius = '4px',
  showThumbs = false,
  images = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const showPrevious = () => {
    if (hasPrevious) {
      setCurrentIndex((current) => current - 1);
    }
  };

  const showNext = () => {
    if (hasNext) {
      setCurrentIndex((current) => current + 1);
    }
  };

  return (
    <GalleryContainer className={className} $width={width}>
      <MainImageContainer $height={height} $radius={radius}>
        <ImageTrack $currentIndex={currentIndex}>
          {images.map((image, index) => (
            <MainImage
              key={`${image.src}-${index}`}
              src={image.src}
              alt={`Imagem ${index + 1} do produto`}
              $radius={radius}
            />
          ))}
        </ImageTrack>

        <ArrowButton
          type="button"
          onClick={showPrevious}
          disabled={!hasPrevious}
          $position="left"
          aria-label="Imagem anterior"
        >
          <ArrowIcon src={arrowLeft} alt="" />
        </ArrowButton>

        <ArrowButton
          type="button"
          onClick={showNext}
          disabled={!hasNext}
          $position="right"
          aria-label="Próxima imagem"
        >
          <ArrowIcon src={arrowRight} alt="" />
        </ArrowButton>
      </MainImageContainer>

      {showThumbs && (
        <ThumbnailsContainer>
          {images.map((image, index) => (
            <ThumbnailButton
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              $selected={currentIndex === index}
              $radius={radius}
              aria-label={`Selecionar imagem ${index + 1}`}
              aria-pressed={currentIndex === index}
            >
              <ThumbnailImage
                src={image.src}
                alt={`Miniatura ${index + 1}`}
                $radius={radius}
              />
            </ThumbnailButton>
          ))}
        </ThumbnailsContainer>
      )}
    </GalleryContainer>
  );
};

export default Gallery;
