
import Home from './pages/home.jsx';
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'


import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Signin />,
//   },
//   {
//     path: "signup",
//     element: <Signup />,
//   }
// ]);

function App() {


  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </>
  )
}

export default App
