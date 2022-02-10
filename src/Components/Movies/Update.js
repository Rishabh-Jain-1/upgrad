import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { UPDATE_DATA } from "../../store/actions/actionTypes";

const Update = ({ show, onHide, data }) => {
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    setTitle(data?.Title);
  }, [data]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!Title) {
      setError("Please enter Title");
      return;
    }
    dispatch({
      type: UPDATE_DATA,
      payload: { ...data, Title },
    });
    onHide();
  };
  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <Modal.Body>Update Movie Title</Modal.Body>
        <form onSubmit={onSubmit}>
          <div class="container mt-3">
            <div className="form-group">
              <div className="d-flex ">
                <input
                  type="text"
                  class="form-control position-relative custom-input"
                  placeholder="Text input"
                  value={Title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setError("");
                  }}
                />
              </div>
              <span className="invalid-feedback d-block text-center">
                {error}
              </span>
              <div className="form-group mt-3">
                <button className="apply-button w-100" type="submit">
                  Save & Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Update;
