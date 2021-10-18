import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./header";
import Footer from "./footer";
import AppRoute from "../route";

function Layout() {
    return (
        <>
            <Router>
                <Header></Header>
                <AppRoute></AppRoute>
                <Footer></Footer>
            </Router>
        </>
    );
}

export default Layout;
