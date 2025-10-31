import './App.css'
import Header from './component/header'
import Home from './pages/home'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { CartSection } from './component/cart';
import { ProductCategories } from './component/Product_Section';
import { ShopCategories } from './component/Category_Section';
import { User_Profile } from './component/User_Profile';
import {UnderWorking} from './component/UnderWorking';
import SingleProduct from './component/SingleProduct';
import Contact from './component/Contact';
import Brands from './component/Brands';
import { FavouriteSection } from './component/Favourite';

function App() {
 return <div className='h-screen'>
    <BrowserRouter>
      <Header />
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<CartSection />}/>
          <Route path='/products' element={<ProductCategories/>}/>
          <Route path='/categories' element={<ShopCategories/>}/>
          <Route path='/profile' element={<User_Profile/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/brands' element={<Brands/>}/>
          <Route path='/favourite' element={<FavouriteSection/>}/>
          <Route path='/product/:id' element={<SingleProduct/>}/>
          <Route path='*' element={<UnderWorking/>}/>
        </Routes>
    </BrowserRouter>
      
  
   
 </div>
}

export default App
