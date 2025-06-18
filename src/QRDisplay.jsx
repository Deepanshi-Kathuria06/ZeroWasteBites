import React from "react";
import { QRCode } from "qrcode.react"; // Make sure to use named import

const QRDisplay = ({ value, size = 128 }) => {
  return (
    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      <h3>Pickup QR Code</h3>
      <QRCode value={value} size={size} />
    </div>
  );
};

export default QRCodeDisplay;
