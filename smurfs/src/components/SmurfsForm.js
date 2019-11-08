import React, { useState } from "react";
import "./App.css"

const SmurfsForm = () => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChanges = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(smurf);
        setSmurf({
            name: "",
            age: "",
            height: ""
        });
    };
    
    return (
        <div className="smurfForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    );
};

export default SmurfsForm;

