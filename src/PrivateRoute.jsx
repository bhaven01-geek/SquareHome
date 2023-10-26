import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard";

export default function PrivateRoute() {
  const { currentUser } = useAuth();

  // If logged in return component else redirect
  return (
    currentUser? 
    <Dashboard /> : 
    <Navigate replace to="/login" />
  );
}
