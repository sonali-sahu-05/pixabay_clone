import React, { useEffect } from "react";
import PixabayContext from "./PixabayContext";
import { useState } from "react";
function PixabayState(props) {
  const [imageData, setimageData] = useState([]);
  const [query, setQuery] = useState('london');

  // fetching of the data
  const api_key = "45763254-b9120ea6bb3f2b0f5879e801d";

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );

      const data = await api.json();
      setimageData(data.hits);
      console.log(data.hits);
    };

    fetchData();
  }, [query]);



const fetchImagebyCategory= async(cat)=>{
  const api = await fetch(
    `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
  );

  const data = await api.json();
  setimageData(data.hits);
  console.log(data.hits);
  
}








  return (
    <>
      <PixabayContext.Provider value={{ imageData,fetchImagebyCategory ,setQuery}}>
        {props.children}
      </PixabayContext.Provider>
    </>
  );
}

export default PixabayState;
