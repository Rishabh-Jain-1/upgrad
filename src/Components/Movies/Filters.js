import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  CLEAR_LIST,
  CLEAR_SEARCH,
  SET_SEARCH,
} from "../../store/actions/actionTypes";
import { getMoviesList } from "../../store/actions/moviesAction";

const Filters = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      setError("Please enter value to search");
      return;
    } else {
      dispatch(getMoviesList(search));
      dispatch({
        type: SET_SEARCH,
        payload: { search: search },
      });
    }
  };
  const reset = () => {
    setSearch("");
    dispatch({
      type: CLEAR_SEARCH,
    });
    dispatch({
      type: CLEAR_LIST,
    });
  };
  return (
    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
      Filter List of the Movie Title
      <form onSubmit={onSubmit}>
        <div className="form-row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-4 col-sm-12">
            <div className="form-group">
              <div className="d-flex ">
                <input
                  type="text"
                  class="form-control position-relative custom-input"
                  placeholder="Text input"
                  value={search}
                  onChange={(e) => {
                    setError("");
                    setSearch(e.target.value);
                  }}
                />
                <div className="icon">
                  <i className="far fa-search"></i>
                </div>
              </div>
              {console.log(error)}
              <span className="invalid-feedback d-block text-center">
                {error}
              </span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <button className="apply-button" type="submit">
              Apply
            </button>
          </div>
          <div className="col-md-3 col-sm-6">
            <button className="apply-button" type="reset" onClick={reset}>
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filters;
