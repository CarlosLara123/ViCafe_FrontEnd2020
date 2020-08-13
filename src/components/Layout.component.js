import React from 'react';
import Navbar from '../components/Navbar.component';
import Footer from '../components/Footer.component';

function Layout(props){
    const children = props.children
    return (
        <React.Fragment>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;