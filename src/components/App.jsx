import { Route, Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage';
import TweetsPage from '../pages/TweetsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route path="/tweetsApp" element={<Navigate to="/home" replace />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
