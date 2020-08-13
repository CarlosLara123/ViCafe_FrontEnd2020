import React from 'react';
import './styles/PageError.component.css';

function PageError(props) {
    return(
        <React.Fragment>
            <div className="PageError">
                <h2>{props.error.message}</h2>
            </div>
        </React.Fragment>
    );
}

export default PageError;