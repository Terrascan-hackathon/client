// import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import LogIn from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/Notfound';

// Here, the Header and the Footer will stay the same on every page.
// We then have the routes, the path prop shows the path of the page,
// and the element is the page itself.

// The Home element is first because it is the main page,
// and the rest are put in alphabetical order.

const Routing = () => {
  const isLoggedIn = true;

  const ProtectedRoute = ({ isLoggedIn, redirectPath = '/login', children }) => {
    if (!isLoggedIn) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

  return (
    <div className="d-flex justify-between flex-column h-100">
      <Routes>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default Routing;
