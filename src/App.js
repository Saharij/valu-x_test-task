import './App.css';
import { images } from './images';
import { Header } from './components/Header';
import { Main } from './components/Content';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

const randomIndexes = {
  index1: 0,
  index2: 1,
  index3: 2,
  index4: 3,
  index5: 4,
}

function App() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);
  const [index3, setIndex3] = useState(2);
  const [index4, setIndex4] = useState(3);
  const [index5, setIndex5] = useState(4);
  const [changeImg, setChangeImg] = useState(false);

  useEffect(() => {
    setIndex1(Math.floor(Math.random() * images.length - 1))
    setIndex2(Math.floor(Math.random() * images.length - 1))
    setIndex3(Math.floor(Math.random() * images.length - 1))
    setIndex4(Math.floor(Math.random() * images.length - 1))
    setIndex5(Math.floor(Math.random() * images.length - 1))
  }, [changeImg])

  return (
    <div className="app">
      <Header imageUrl={images[index1]} />
      <Main
        images={{
          image1: images[index2],
          image2: images[index3],
          image3: images[index4],
        }}
        handleChange={setChangeImg}
        changeImg={changeImg}
      />
      <Footer imageUrl={images[index5]} />
    </div>
  );
}

export default App;
