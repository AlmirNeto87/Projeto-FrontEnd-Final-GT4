
import styled from 'styled-components';

export const GalleryContainer = styled.div`
  width: ${({ $width }) =>
    typeof $width === 'number' ? `${$width}px` : $width || '100%'};

  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${({ $height }) =>
    typeof $height === 'number' ? `${$height}px` : $height || 'auto'};

  overflow: hidden;
  border-radius: ${({ $radius }) => $radius};
`;

export const ImageTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  transform: translateX(-${({ $currentIndex }) => $currentIndex * 100}%);
  transition: transform 450ms ease-in-out;
`;

export const MainImage = styled.img`
  display: block;
  flex: 0 0 100%;
  width: 100%;
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ $radius }) => $radius};
`;

export const ArrowButton = styled.button`
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);

  ${({ $position }) =>
    $position === 'left' ? 'left: 16px;' : 'right: 16px;'}

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  padding: 8px;

  border: none;
  border-radius: 50%;
  background: #FFFFFF;
  cursor: pointer;

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
`;

export const ThumbnailButton = styled.button`
  flex: 0 0 117px;
  width: 117px;
  height: 95px;
  padding: 0;
  overflow: hidden;

  border: ${({ $selected }) =>
    $selected ? '2px solid #C92071' : '2px solid transparent'};

  border-radius: ${({ $radius }) => $radius};
  background: transparent;
  cursor: pointer;
`;

export const ThumbnailImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ $radius }) => $radius};
`;
