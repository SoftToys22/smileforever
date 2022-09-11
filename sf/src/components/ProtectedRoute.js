import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';

export default function AdminRoute({ children }) {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo && userInfo.isAdmin ? children : <navigate to="/signin" />;
}
