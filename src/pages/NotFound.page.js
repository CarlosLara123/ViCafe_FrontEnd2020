import React from 'react';
import imageNotFound from '../images/error-404.gif'
function NotFound() {
    return(
        <React.Fragment>
            <img src={imageNotFound} style={{width: "50%", display: "block", margin: "auto", marginTop: "20px"}} alt=""></img>
        </React.Fragment>
    )
}

export default NotFound;