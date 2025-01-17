import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import People from './pages/People'
import Error from './pages/Error'
import LogIn from './pages/Login'
import Register from './pages/Register'
import AboutUS from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import MovieDetail from './pages/MovieDetail'
import { Provider } from 'react-redux'
import { store } from './store'
const router = createBrowserRouter(
[
   {
path: '/',
element: <MainLayout/>,
children: [
{
path: "/",
element: <Home />
},
{
path: '/people',
element: <People/>
},
{
  path: '/about-Us',
element: <AboutUS/>
},
{
  path: '/contact-us',
element: <ContactUs/>
},

],
errorElement: <Error/>

},
{
  path: '/login',
element: <LogIn/>
},
{
  path: '/register',
element: <Register/>
},
{
  path: '/movie',
element: <MovieDetail/>
},

]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
