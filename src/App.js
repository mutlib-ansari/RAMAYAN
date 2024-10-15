


// import './App.css';
// import Dasbord from './componants/Dasbord/Dasbord'
// import Footer from './componants/Footer/Footer';
// import Header from './componants/Header/Header';
// import Herosection from './componants/Herosection/Herosection';
// import Latestpost from './componants/Latestpost/Latestpost';
// import Products from './componants/Products/Products';
// import Tebs from './componants/Tebs/Tebs';


// function App() {
//   return (
   
//       <div>
//     <Header/>
//    <Dasbord/>
//    <Herosection/>
//   <Products/>
//  <Tebs/>
//     <Latestpost/>
//     <Footer/>
      
    
     
                                                                                        
//         </div>
    
//   );
// }

// export default App;


// import './App.css';
// import Dasbord from './componants/Dasbord/Dasbord';
// import Footer from './componants/Footer/Footer';
// import Header from './componants/Header/Header';
// import Herosection from './componants/Herosection/Herosection';
// import Latestpost from './componants/Latestpost/Latestpost';
// import Products from './componants/Products/Products';
// import Tebs from './componants/Tebs/Tebs';

// import ProductDetail from './componants/pages/ProductsDetails'; 


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
      
//       <Routes>
//       <Header element={<Header />} />
//         <Route path="/" element={<Dasbord />} />
//         <Route path="/herosection" element={<Herosection />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/tebs" element={<Tebs />} />
//         <Route path="/latestpost" element={<Latestpost />} />
//         <Route path="/ProductsDetails" element={<ProductDetail />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


// import './App.css';
// import Dasbord from './componants/Dasbord/Dasbord';
// import Footer from './componants/Footer/Footer';
// import Header from './componants/Header/Header';
// import Herosection from './componants/Herosection/Herosection';
// import Latestpost from './componants/Latestpost/Latestpost';
// import Products from './componants/Products/Products';
// import Tebs from './componants/Tebs/Tebs';
// import ProductDetail from './componants/pages/ProductsDetails'; 

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       {/* Header should be outside Routes */}
//       <Header />

//       <Routes>
//         <Route path="/" element={<Dasbord />} />
//         <Route path="/herosection" element={<Herosection />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/tebs" element={<Tebs />} />
//         <Route path="/latestpost" element={<Latestpost />} />
//         <Route path="/ProductsDetails/:productId" element={<ProductDetail />} />
//       </Routes>

//       {/* Footer should be outside Routes */}
//       <Footer />
//     </Router>
//   );
// }

// export default App;




import './App.css';
import Dasbord from './componants/Dasbord/Dasbord';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Herosection from './componants/Herosection/Herosection';
import Latestpost from './componants/Latestpost/Latestpost';
import Products from './componants/Products/Products';
import Tebs from './componants/Tebs/Tebs';
import Listingpage from './componants/pages/Listingpage';
import './index'


import ProductsDetail from './componants/pages/ProductsDetails'; 
import Addtocard from './componants/pages/Addtocard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './componants/pages/Cardpage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Dasbord />
              <Herosection />
              <Products />
              <Tebs />
              <Latestpost />
              
              
             
              
              
            </>
          } 
        />
        
        
        <Route path="/ProductsDetail/:productId" element={<ProductsDetail />} />
        <Route path="/Listingpage" element={<Listingpage />} />
        <Route path="/Addtocard" element={<Addtocard/>} />
        <Route path="/CartPage" element={<CartPage />} />
        
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;


// import './App.css';
// import Dasbord from './componants/Dasbord/Dasbord';
// import Footer from './componants/Footer/Footer';
// import Header from './componants/Header/Header';
// import Herosection from './componants/Herosection/Herosection';
// import Latestpost from './componants/Latestpost/Latestpost';
// import Products from './componants/Products/Products';
// import Tebs from './componants/Tebs/Tebs';
// import Listingpage from './componants/pages/Listingpage';
// import './index';

// import ProductDetail from './componants/pages/ProductsDetails'; 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { ScrollFadeSection } from './componants/ScrollFadeSection/ScrollFadeSection'; 

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route 
//           path="/" 
//           element={
//             <>
//               <Dasbord />
//               {/* Wrap sections in ScrollFadeSection */}
//               <ScrollFadeSection direction="left"> {/* Fade from left */}
//                 <Herosection />
//               </ScrollFadeSection>
              
//               <ScrollFadeSection direction="right"> {/* Fade from right */}
//                 <Products />
//               </ScrollFadeSection>
              
//               <ScrollFadeSection direction="left"> {/* Fade from left */}
//                 <Tebs />
//               </ScrollFadeSection>
              
//               <ScrollFadeSection direction="right"> {/* Fade from right */}
//                 <Latestpost />
//               </ScrollFadeSection>
//             </>
//           } 
//         />
        
//         <Route path='/ProductsDetails/:productId' element={<ProductDetail />} />
//         <Route path="/Listingpage" element={<Listingpage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
