import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DELETE } from "../../store/actions/actionTypes";

const Delete = ({ show, onHide, data }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    console.log(data);
    dispatch({
      type: DELETE,
      payload: data.imdbID,
    });
    onHide();
  };
  return (
    <div>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Footer>
          <div className="form-group">
            <button className="btn btn-secondary" onClick={onHide}>
              Cancel
            </button>
          </div>
          <div className="form-group">
            <button className="btn btn-danger" onClick={deleteHandler}>
              Confirm Delete
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Delete;
