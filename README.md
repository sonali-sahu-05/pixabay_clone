# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


=========================================================
1 createcontext hoga phir

import { createContext } from "react";

const PixabayContext=createContext()

export default PixabayContext
========================================================
2 state mai provide hoga  (context 1 use hoga)

import React from 'react'
import PixabayContext from './PixabayContext'
function PixabayState(props) {
  return (
<>
<PixabayContext.Provider value={{}}>
{props.children}
</PixabayContext.Provider>
</>  )
}
export default PixabayState
========================================================
3 main ma state sa wrap hoga 
 <PixabayState>
  <App/>
 </PixabayState>

 ====================================
 4 
 mai phir 1 sa wrap hoga

 const data=usecontext(pixabaycontext)