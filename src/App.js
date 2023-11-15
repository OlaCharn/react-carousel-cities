import './App.css';
import { useState } from 'react';
import { data } from "./data"
import Carousel from './Carousel';

function App() {

  const [city, setCity] = useState(data);

  return (
    <div className='container'>
    <div>
      <h2> My {city.length} best cities in the world. </h2>
    </div>
    {city.map( item=>{
      const {id, cityName, images, description} = item;
      return(
        <div key={id}  >
        <div className='container'>
          <h2> {cityName} </h2>
          <div >
          <Carousel imagesMyProps={images} />
          </div>
          <p> {description} </p>
        </div>
        </div>
      )
    } )}

    </div>
  );
}

export default App;
