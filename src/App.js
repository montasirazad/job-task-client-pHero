import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Layout/Home/Home';
import router from './Routes/Routes';


function App() {


  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
