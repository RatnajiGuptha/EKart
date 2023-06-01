import React, { Component } from "react";

import { Route, Link, Navigate } from "react-router-dom";
// import Swal from "sweetalert2";

const PrivateRoute = ({ component: Component, ...rest }) => {
    if (localStorage.getItem('token') != null) {
        return <Component {...rest} />
    }
    else {
        // Swal.fire("Please Login First");
        return <Navigate to="/login" />
    }
}

export default PrivateRoute;