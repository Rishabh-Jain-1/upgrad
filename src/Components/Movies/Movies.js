import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SORT_ASC, SORT_DSC } from "../../store/actions/actionTypes";
import Filters from "./Filters";
import Listing from "./Listing";

const Movies = () => {
  const dispatch = useDispatch();
  const [sorting, setSorting] = useState(false);
  const sort = () => {
    if (sorting) {
      dispatch({
        type: SORT_DSC,
      });
      setSorting(false);
    } else {
      dispatch({
        type: SORT_ASC,
      });
      setSorting(true);
    }
  };
  return (
    <div>
      <div className="container mt-4">
        <Filters />
        <div className="row">
          <div className="col-md-12">
            <button className="apply-button float-right mb-3" onClick={sort}>
              Sort
            </button>
          </div>
        </div>
        <Listing />
      </div>
    </div>
  );
};

export default Movies;
