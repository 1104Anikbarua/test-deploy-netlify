// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Countries from './components/Countries/Countries';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Navbar from './components/Navbar/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/', element: <Countries></Countries> },
        {
          path: '/about', element: <About></About>
        },
        {
          path: '/detail', element: <Detail></Detail>
        }
      ]
    },
    {
      path: '/navbar', element: <Navbar></Navbar>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
