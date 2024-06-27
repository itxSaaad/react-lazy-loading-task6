import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Admin from './components/Admin';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
