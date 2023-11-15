import { useState } from "react";

function Carousel( {imagesMyProps} ){

    const [index, setIndex] = useState(0);

    const previousImage = () => {
        setIndex((index => {
            index--;
            if(index<0 ){
                return imagesMyProps.length - 1;
            }
            return index;
        }))
    }

    const nextImage =() =>{
        setIndex((index => {
            index++;
            if (index > imagesMyProps.length - 1){
                index=0;
            }
            return index;
        }))
    }

    return(
        <div>
            <img src={imagesMyProps[index]} width="400px" alt="piece" />
            <div>
                <button onClick={previousImage} >Previous</button>
                <button onClick={nextImage} >Next</button>
            </div>
        </div>
    )
}
export default Carousel;