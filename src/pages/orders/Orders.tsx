import React, { useState } from "react";
import AuthMessage from "../auth/utils/AuthMessage";

const Orders = () => {
  const [token] = useState(sessionStorage.getItem("access_token"));
  return (
    <div>
      {token ? (
        <div></div>
      ) : (
        <div>
          <AuthMessage />
        </div>
      )}
    </div>
  );
};

export default Orders;
