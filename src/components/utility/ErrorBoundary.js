import React, { useState, useEffect } from "react";
import { SmileOutlined } from "@ant-design/icons";

const ErrorBoundary = (props) => {
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect((error, errorInfo) => {
    setError(error);
    setErrorInfo(errorInfo);
  }, []);

  return (
    <React.Fragment>
      {errorInfo ? (
        <React.Fragment>
          <div style={{ textAlign: "center" }}>
            <SmileOutlined style={{ fontSize: 20 }} />
            <p>Data Not Found</p>
          </div>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </React.Fragment>
      ) : (
        props.children
      )}
    </React.Fragment>
  );
};
export default ErrorBoundary;
