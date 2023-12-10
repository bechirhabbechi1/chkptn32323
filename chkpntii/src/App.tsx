// App.tsx
import React from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import product from "./product";

const firstName = "Bechir";

const App: React.FC = () => {
  return (
    <div className="container">
      <Card style={{ width: "18rem" }} className="Card-con">
        <Card.Body>
          <div className="info">
            <Name product={product} />
            <Price product={product} />
            <Description product={product} />
          </div>
        </Card.Body>
      </Card>
      <div className="Pp">
        <p>Hello, {firstName ? firstName : "there"}!</p>
      </div>
    </div>
  );
};

export default App;
