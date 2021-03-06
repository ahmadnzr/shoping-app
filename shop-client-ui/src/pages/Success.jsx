import React from "react";
import { useLocation } from "react-router";

function Success() {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Successfull. Your order is being prepared...
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </div>
    </div>
  );
}

export default Success;
