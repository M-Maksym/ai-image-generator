import './App.css';
import History from './Components/History/History';
import ImageGenerator from './Components/ImageGenerate/ImageGenerator';
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ImageGenerator />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<ImageGenerator/>} />
//           <Route path="/history" element={<History/>} />
//           <Route path="/n" element={<Navbar/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
