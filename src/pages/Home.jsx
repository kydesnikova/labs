import React from 'react';
import Form from "../Components/Form";
import Table from "../Components/Table";

import { useDispatch } from "react-redux";
import ProtectedRoute from "../Components/ProtectedRoute";
import { changeAllowed } from "../redux/actions/rest";
import { useNavigate } from "react-router";


const Home = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onClose = (e) => {
    e.preventDefault();
    dispatch(changeAllowed());
    navigate("/");
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-primary float-end" onClick={onClose}>Log out</button>
      <div className="form">
        <Form />
      </div>
      <hr style={{ width: "75%", marginLeft: "17%", float: "center" }} />
      <div>
        <Table />
      </div>
    </div>
  );
};

export default ProtectedRoute(Home);
