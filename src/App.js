import { useState } from 'react';
import './App.css';

function App() {

  const images = [
    {
      id: 1,
      src: "https://img.freepik.com/fotos-kostenlos/close-up-portraet-einer-hexe-aus-dem-indigenen-afrikanischen-stamm-in-traditioneller-tracht-make-up-konzept-getrennt-auf-einem-dunklen-hintergrund_613910-18555.jpg?w=1800&t=st=1687970729~exp=1687971329~hmac=a2f4692ee570af3ea881d9cdb2548e1931a3d5c48f249027cf5f518bd7aaf7eb",
      alt: "African witch"
    },
    {
      id: 2,
      src: "https://img.freepik.com/fotos-kostenlos/close-up-portraet-einer-hexe-aus-dem-indigenen-afrikanischen-stamm-in-traditioneller-tracht-make-up-konzept-getrennt-auf-einem-dunklen-hintergrund_613910-21200.jpg?w=1800&t=st=1687970732~exp=1687971332~hmac=0458b87be25a8bde9597418c86c35e2180513e93b954116399806f384200baab",
      alt: "African witch looking at a mask"
    },
    {
      id: 3,
      src: "https://img.freepik.com/fotos-kostenlos/nahaufnahme-portraet-einer-afrikanischen-schamanin-aus-dem-indigenen-afrikanischen-stamm-die-traditionelle-tracht-traegt-make-up-konzept-getrennt-auf-einem-dunklen-hintergrund_613910-21210.jpg?w=1480&t=st=1687970732~exp=1687971332~hmac=acae35f5c8ddeef10044a9358b91dded15dc77d21b5adc572ecc0a93108c934a",
      alt: "African witch putting on a mask"
    },
  ]

  const [currentImg, setCurrentImg] = useState(0)

  const nextImg = () => {
    setCurrentImg((id) => (id + 1) % images.length);
  }

  const prevImg = () => {
    setCurrentImg((id) => (id - 1 + images.length) % images.length)
  }

  return (
    <div className="App">
      <h1>Slider App</h1>
     <div className="slider-container">
        <div className="slider">
        {images.map((img, index) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className={index === currentImg ? "active" : ""}
            />
          ))}
        </div>
        <button id="prev-button" onClick={prevImg}>
          Prev
        </button>
        <button id="next-button" onClick={nextImg}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
