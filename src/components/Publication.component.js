import React from 'react';
import NotImagePublication from '../images/noneImagePublication.png'

function Publication(props) {
    return (
        <React.Fragment>
            <div className="card mb-3">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">Card title</h3>
                            <div className="text-justify">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={NotImagePublication} className="card-img img-fluid" alt="..." />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Publication;