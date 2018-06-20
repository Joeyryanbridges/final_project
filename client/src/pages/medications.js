import React from "react";
import "../css/medications.css";
import { Link } from "react-router-dom";

class Medications extends React.Component {
    componentDidMount() {
    // ------    put on page load js here ------ //
    }
    render() {
        return (
    // -------- Start HTML here -------- //
    <div>
        <h1>Medication page</h1>
        <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
      ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
      quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
      imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>
        <p>
            <Link to="/homepage"> homepage </Link>
        </p> 
    </div>
    // ------ End HTML here -------------- //
    )}
};

export default Medications;