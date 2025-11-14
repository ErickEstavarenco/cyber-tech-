import React, { useEffect, useRef } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute() {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  const alertFiredRef = useRef(false);

  useEffect(() => {
    if (loading) return;

    if (!currentUser && !alertFiredRef.current) {
      alertFiredRef.current = true;
      alert("Você precisa realizar o Login antes!");
    }
  }, [loading, currentUser]);

  if (loading) return <div className="loading">Carregando...</div>;

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
