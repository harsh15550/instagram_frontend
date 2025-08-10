import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const {user} = useSelector(store => store.auth);
    return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute 