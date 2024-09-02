


import  { useContext } from 'react';
import PixabayContext from '../context/PixabayContext.jsx'; // Fix import here

function Images() {




  const {imageData} = useContext(PixabayContext); // Access context data

  return (
    <>

<div className="container my-5">
<div className='flex'>
        {imageData.map((image)=><div key={image.id}> 
            <div className="item">
                <img src={image.largeImageURL} alt="" />
            </div>
            
             </div>)}
    </div>
</div>




   
    </>
  );
}

export default Images;
