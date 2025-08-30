import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import './global.css';
import routes from './router';

const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    );
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            {routes.map(r => (
                <Route
                    key={r.path || "index"}
                    path={r.path}
                    index={r.index}
                    element={r.element}
                    loader={r.loader}
                />
            ))}
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider future={{
        v7_startTransition: true,
    }}
        router={router} />
);

