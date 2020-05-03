import React, { useState } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import I6 from "./LCars2.jpg";
import Modal from "react-modal";
import "./MyModal.styles.css";
import { Link } from "react-router-dom";
export function MyModal7() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <ButtonToolbar>
      <Button onClick={() => setModalIsOpen(true)}>show details</Button>
      <Link to={"/MyForm"}>
        <button className="card-cont">Book This</button>
      </Link>
      <Modal isOpen={modalIsOpen}>
        <div className="MyModal">
          <div>
            <img src={I6} />
          </div>
          <h6>Vehicle Number : MH 07 CA 4352 </h6>
          <h6>Price: 6000/Day With Fuel </h6>
          <h6>Petrol Car</h6>
          <h6>1.2 Kappa Dual VTVT BS6 Petrol Engine</h6>
          <p>
            This Car comes with wonder warranty options of upto 5 years Std.
            Customer can choose any warranty option as per his driving
            requirement at the time of new vehicle delivery. From a strong body
            structure to standard dual airbags and ABS with EBD, maximum care
            has taken to integrate a piethora of safety features.{" "}
          </p>

          <div className="show">
            <button onClick={() => setModalIsOpen(false)}>close</button>
          </div>
        </div>
      </Modal>
    </ButtonToolbar>
  );
}
