import React from "react";

const image = {
    backgroundImage:
        "url(https://m44e2gy7fz2mhb6q13wbkw1f-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/image-2-2-compressed-760x300.jpg)",
};

function Jumbotron(props) {
    return (
        <>
            <div className="jumbotron text-white" style={image}>
                <div className="container">
                    <h1 className="display-4">Employee Directory</h1>
                    <p className="lead"></p>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Search</span>
                        </div>
                        <input
                            onChange={props.handleInputChange}
                            placeholder="Search Name"
                        ></input><button onClick={props.handleSortChange}>Sort</button>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Jumbotron;
