import axios from 'axios';
import { useState } from 'react';
import './App.css';
import ImageSlider from './ImageSlider';

function App() {
  const slides = [
    { url: "https://coffee.alexflipnote.dev/random", title: "beach" },
    { url: "https://coffee.alexflipnote.dev/random", title: "boat" },
    { url: "https://coffee.alexflipnote.dev/random", title: "forest" },
    { url: "https://coffee.alexflipnote.dev/random", title: "city" },
    { url: "https://coffee.alexflipnote.dev/random", title: "italy" },
  ];
  const [render, setrender] = useState(true)
  setInterval(() => {
    slides.forEach((item)=>{

      axios.get("https://coffee.alexflipnote.dev/random")
      .then(res=>item.url = res.data)

    });
    setrender(!render)

  },3000)
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="App" style={containerStyles}>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
