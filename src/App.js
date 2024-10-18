


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

// import ProductsDetail from './componants/pages/ProductsDetails'; 
// import Addtocard from './componants/pages/Addtocard';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CartPage from './componants/pages/Cardpage';
// import BlogPage from './componants/pages/Blogepage';

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
//               <Herosection />
//               <Products />
//               <Tebs />
//               <Latestpost />
//             </>
//           } 
//         />
//         <Route path="/ProductsDetail/:productId" element={<ProductsDetail />} />
//         <Route path="/Listingpage" element={<Listingpage />} />
//         <Route path="/Addtocard" element={<Addtocard />} />
//         <Route path="/CartPage" element={<CartPage />} />
//         <Route path="/BlogPage" element={<BlogPage />} />
//       </Routes>
//       <Footer /> 
//     </Router>
//   );
// }

// export default App;

// src/App.js
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Dasbord from './componants/Dasbord/Dasbord';
// import Footer from './componants/Footer/Footer';
// import Header from './componants/Header/Header';
// import Herosection from './componants/Herosection/Herosection';
// import Latestpost from './componants/Latestpost/Latestpost';
// import Products from './componants/Products/Products';
// import Tebs from './componants/Tebs/Tebs';
// import Listingpage from './componants/pages/Listingpage';
// import ProductsDetail from './componants/pages/ProductsDetails'; 
// import Addtocard from './componants/pages/Addtocard';
// import CartPage from './componants/pages/Cardpage';
// import BlogPage from './componants/pages/Blogepage';
// import Loader from './componants/Loader'; // Import the Loader component
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a data fetching process
//     setTimeout(() => {
//       setLoading(false); // Set loading to false after 3 seconds
//     }, 2000); // Simulating a 3-second loading time
//   }, []);

//   return (
//     <Router>
//       {loading ? (
//         <Loader /> // Show the loader while loading
//       ) : (
//         <>
//           <Header />
//           <Routes>
//             <Route 
//               path="/" 
//               element={
//                 <>
//                   <Dasbord />
//                   <Herosection />
//                   <Products />
//                   <Tebs />
//                   <Latestpost />
//                 </>
//               } 
//             />
//             <Route path="/ProductsDetail/:productId" element={<ProductsDetail />} />
//             <Route path="/Listingpage" element={<Listingpage />} />
//             <Route path="/Addtocard" element={<Addtocard />} />
//             <Route path="/CartPage" element={<CartPage />} />
//             <Route path="/BlogPage" element={<BlogPage />} />
//           </Routes>
//           <Footer /> 
//         </>
//       )}
//     </Router>
//   );
// }

// export default App; 



// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Dasbord from './componants/Dasbord/Dasbord';
// import Footer from './componants/Footer/Footer';
// import Header from './componants/Header/Header';
// import Herosection from './componants/Herosection/Herosection';
// import Latestpost from './componants/Latestpost/Latestpost';
// import Products from './componants/Products/Products';
// import Tebs from './componants/Tebs/Tebs';
// import Listingpage from './componants/pages/Listingpage';
// import ProductsDetail from './componants/pages/ProductsDetails'; 
// import Addtocard from './componants/pages/Addtocard';
// import CartPage from './componants/pages/Cardpage';
// import BlogPage from './componants/pages/Blogepage';
// import Loader from './componants/Loader';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// const AppRoutes = () => {
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleStart = () => {
//       setLoading(true);
//     };
//     const handleStop = () => {
//       setLoading(false);
//     };

//     // Start loading on route change
//     handleStart();

//     // Stop loading after a short delay to simulate loading time
//     const timer = setTimeout(handleStop, 2000); // Adjust delay as necessary

//     // Cleanup the timer on component unmount
//     return () => clearTimeout(timer);
//   }, [location]);

//   return (
//     <>
//       {loading && <Loader />}
//       <Routes>
//         <Route 
//           path="/" 
//           element={
//             <>
//               <Dasbord />
//               <Herosection />
//               <Products />
//               <Tebs />
//               <Latestpost />
//             </>
//           } 
//         />
//         <Route path="/ProductsDetail/:productId" element={<ProductsDetail />} />
//         <Route path="/Listingpage" element={<Listingpage />} />
//         <Route path="/Addtocard" element={<Addtocard />} />
//         <Route path="/CartPage" element={<CartPage />} />
//         <Route path="/BlogPage" element={<BlogPage />} />
//       </Routes>
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Header />
//       <AppRoutes />
//       <Footer /> 
//     </Router>
//   );
// }

// export default App; 



import React, { useState, useEffect } from 'react';
import './App.css';
import Dasbord from './componants/Dasbord/Dasbord';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Herosection from './componants/Herosection/Herosection';
import Latestpost from './componants/Latestpost/Latestpost';
import Products from './componants/Products/Products';
import Tebs from './componants/Tebs/Tebs';
import Listingpage from './componants/pages/Listingpage';
import ProductsDetail from './componants/pages/ProductsDetails'; 
import Addtocard from './componants/pages/Addtocard';
import CartPage from './componants/pages/Cardpage';
import BlogPage from './componants/pages/Blogepage';
import Loader from './componants/Loader';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import WishlistPage from './componants/pages/Wishlist';
import Login from './componants/pages/Loginpage';
import SignIn from './componants/pages/Singinpage';
import BackToTopButton from './componants/Backtotopbutton';

const AppRoutes = () => {
  const [routeLoading, setRouteLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => {
      setRouteLoading(true);
    };
    const handleStop = () => {
      setRouteLoading(false);
    };

    
    handleStart();

    
    const timer = setTimeout(handleStop, 1000); 

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {routeLoading && <Loader />} 
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
              {/* <Login/> */}
              <BackToTopButton/>
              
             
            </>
          } 
        />
        <Route path="/ProductsDetail/:productId" element={<ProductsDetail />} />
        <Route path="/Listingpage" element={<Listingpage />} />
        <Route path="/Addtocard" element={<Addtocard />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/WishlistPage" element={<WishlistPage/>} />
        <Route path="/SignIn" element={<SignIn/>} />
       
        
        
      </Routes>
    </>
  );
};

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {initialLoading ? (
        <Loader  /> 
      ) : (
        <>
          <Header />
          <AppRoutes />
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App; 
