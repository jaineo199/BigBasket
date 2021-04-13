import React from 'react'
import NavBar from './Components/NavBar';
import BackImg from './Components/BackImg1';
import BackImg2 from './Components/BackImg2';
import Button from './Components/Button';
import Dot from './Components/Dots';
import Bankoff from './Components/BankOff';
import Card from './Components/Card';
import Product from './Components/Products';
import Products2 from './Components/Products2';
import Products3 from './Components/Products3';
import Products4 from './Components/Products4';
import BothPro from './Components/ProductsTwo'
import Demo from './Components/Demo';
import GridPrac from './Components/GridPrac';
import NewProduct1 from './Components/NewProducts1';
import NewProduct2 from './Components/NewProducts2';
function Main() {
    return (
        <div style={{backgroundColor:'#d8dbe3'}}>
           <NavBar/>
           <BackImg/>
           <Button/>
           {/* <Dot/> */}
           <BackImg2/>
           <Card/>
           <Bankoff/>
           {/* <Card/> */}
        {/* <Product/>
        <Products2/> */}
        <Card/>
        {/* <Products3/>
        <Products4/> */}
        
        {/* <BothPro/>
        <Demo/> */}
        {/* <GridPrac/> */}
        {/* <NewProduct1/> */}
        <NewProduct2 />
        <Card/>
        </div>
    )
}

export default Main
