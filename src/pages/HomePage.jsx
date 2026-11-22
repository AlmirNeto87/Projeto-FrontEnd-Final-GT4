
import Gallery from '../components/Galery';

const galleryImages = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
];

function HomePage() {
  return (
    <main>
    <Gallery
  images={galleryImages}
  width={700}
  height={570}
  radius="4px"
  showThumbs
/>
    
    </main>
  );
}

export default HomePage;
