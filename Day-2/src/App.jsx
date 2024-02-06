// import CustomNavBar from "./components/CustomNavBar"

import CoursesPage from "./pages/Courses"
import PaymentPage from "./pages/Payment"
import EnquiryPage from "./pages/Enquiry"
import HomePage from "./pages/Home"
import AboutUs from "./pages/About" 
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Suspense } from "react"
import Spinner from "./components/Spinner"
 import Profile from "./pages/profile"
import AdDashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import EnquiriesAd from "./pages/EnquiryAd"
 // import SignUp from "./pages/SignUp"

function App() {
  const router = createBrowserRouter([
    {
      path:'/home',
      element: <Suspense fallback={<Spinner/>}><HomePage/></Suspense>
    },
    {
      path: '/about',
      element :<Suspense fallback={<Spinner/>}><AboutUs/></Suspense>
    }, 
    {
      path: '/course',
      element :<Suspense fallback={<Spinner/>}><CoursesPage/></Suspense>
    },
    {
      path: '/enquiry',
      element :<Suspense fallback={<Spinner/>}><EnquiryPage/></Suspense>
    },
    {
      path: '/payment',
      element :<Suspense fallback={<Spinner/>}><PaymentPage/></Suspense>
    },
    {
      path: '/profile',
      element :<Suspense fallback={<Spinner/>}><Profile/></Suspense>
    },
    {
    path: '/dashboard',
    element :<Suspense fallback={<Spinner/>}><AdDashboard/></Suspense>
    },
{
  path: '/users',
  element :<Suspense fallback={<Spinner/>}><Users/></Suspense>
    },
{
  path: '/',
  element :<Suspense fallback={<Spinner/>}><Login/></Suspense>
    },{
  path: '/signup',
  element :<Suspense fallback={<Spinner/>}><Signup/></Suspense>
    },
{
  path: '/enquiryad',
  element :<Suspense fallback={<Spinner/>}><EnquiriesAd/></Suspense>
    }

  ])
  return (
    <RouterProvider router={router}></RouterProvider>
    // <EnquiryPage/>
  )
}

export default App

// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Home from "./pages/Home";
// import { Suspense, lazy } from "react";
// import Spinner from "./components/Spinner";
// // import About from "./pages/About"

// const LazyAbout = lazy(()=>import("./pages/About"));
// const LazyContact = lazy(()=>import("./pages/Contact"));

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path:'/home',
//       element: <Suspense fallback={<Spinner/>}><Home/></Suspense>
//     },
//     {
//       path: '/about',
//       element :<Suspense fallback={<Spinner/>}><LazyAbout/></Suspense>
//     },
//     {
//       path: '/contact',
//       element :<Suspense fallback={<Spinner/>}><LazyContact/></Suspense>
//     }
//   ])
//   return (
//     <RouterProvider router={router}></RouterProvider>
    
    
//   )
// }
// export default App;