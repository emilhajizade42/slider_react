// import axios from 'axios';
// import { useState } from 'react';
import './App.css';
import ImageSlider from './ImageSlider';

function App() {
  const slides = [
    { url: "https://coffee.alexflipnote.dev/random", title: "beach" },
    { url: "https://picsum.photos/id/237/200/300", title: "boat" },
    { url: "https://picsum.photos/id/217/200/300", title: "forest" },
    { url: "https://picsum.photos/id/216/200/300", title: "city" },
    { url: "https://picsum.photos/id/219/200/300", title: "italy" },
  ];
  // const [render, setrender] = useState(true)
  // setInterval(() => {
  //   slides.forEach((item)=>{

  //     axios.get("https://coffee.alexflipnote.dev/random")
  //     .then(res=>item.url = res.data)

  //   });
  //   setrender(!render)

  // },3000)
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
