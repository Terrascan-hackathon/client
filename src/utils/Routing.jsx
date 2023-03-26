// import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import LogIn from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/Notfound';
import { useSelector } from 'react-redux';
import Guest from '../pages/Guest/Guest';
import Temperature from '../pages/Temperature/Temperature';
import Wind from '../pages/Wind/Wind';
import Humidity from '../pages/Humidity/Humidity';
import PostAlert from '../pages/PostAlert/PostAlert';
import Information from '../pages/Information/Information'

// Here, the Header and the Footer will stay the same on every page.
// We then have the routes, the path prop shows the path of the page,
// and the element is the page itself.

// The Home element is first because it is the main page,
// and the rest are put in alphabetical order.

const Routing = () => {
  const isLoggedIn = useSelector((state) => state?.userState?.isLoggedIn);
  const role = useSelector((state)=> state?.userState?.user?.role)

  const ProtectedRoute = ({ isLoggedIn, redirectPath = '/guest', children }) => {
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
          path="/guest"
          element={
            <ProtectedRoute isLoggedIn={!isLoggedIn}>
              <Guest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/temperature"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Temperature />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wind"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Wind />
            </ProtectedRoute>
          }
        />
        <Route
          path="/humidity"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Humidity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post-alert"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn && role === 'authority'}>
              <PostAlert />
            </ProtectedRoute>
          }
        />
        <Route path="/information" element={
          <Information />
        } />
        <Route path="/register" element={
          <Register />
        } />
        <Route path="/login" element={
          <LogIn />
        } />
      </Routes>
    </div>
  );
};

export default Routing;
