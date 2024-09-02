import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext.jsx'; // Fix import here

function Navbar() {
    const {fetchImagebyCategory,setQuery}=useContext(PixabayContext)
  return (
    <>
    <div className="container text-center my-3">
<button type="button" onClick={()=>fetchImagebyCategory("nature")}   className="btn btn-outline-secondary mx-3           ">Nature</button>
<button type="button" onClick={()=>fetchImagebyCategory("science")} className="btn btn-outline-primary   mx-3         ">Science</button>
<button type="button" onClick={()=>fetchImagebyCategory("computer")} className="btn btn-outline-success   mx-3      ">Computer</button>
<button type="button" onClick={()=>fetchImagebyCategory("buildings")} className="btn btn-outline-danger    mx-3      ">Building</button>
<button type="button" onClick={()=>fetchImagebyCategory("sports")} className="btn btn-outline-warning   mx-3       ">Sports</button>

<button type="button" onClick={()=>fetchImagebyCategory("transportation")} className="btn btn-outline-light     mx-3          ">Transportation</button>
<button type="button" onClick={()=>fetchImagebyCategory("travel")} className="btn btn-outline-primary     mx-3       ">Travel</button>
<button type="button" onClick={()=>fetchImagebyCategory("food")} className="btn btn-outline-info      mx-3       ">Food</button>
    
</div>
    
    <div className="container" style={{width:"600px"}}>

        <input type="text" onChange={(e)=>setQuery(e.target.value)}           className="form-control bg-dark text-light"  />
    </div>
    
    
    
    </>
  )
}

export default Navbar