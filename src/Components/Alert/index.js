import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Alert = () => {
  const { alert } = useSelector((state) => state);

  return <div>{alert.loading && <Loader active={true} />}</div>;
};

export default Alert;
