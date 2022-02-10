import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Update from "./Update";
import Delete from "./Delete";
import { getMoviesList } from "../../store/actions/moviesAction";

const Listing = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state);
  const { search } = filter;
  const { movie } = useSelector((state) => state);
  const [list, setList] = useState(null);
  const [data, setData] = useState(null);
  const [totalResults, settotalResults] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [show, setShow] = useState(false);
  const [pageNo, setPageno] = useState(0);

  useEffect(() => {
    if (movie) {
      setList(movie.list);
      settotalResults(movie.totalResults);
    } else {
      setList(null);
      settotalResults(null);
    }
  }, [movie]);

  useEffect(() => {
    if (search) {
      dispatch(getMoviesList(search, pageNo));
    }
  }, [pageNo]);

  return (
    <div className="card shadow-lg mb-5 bg-white rounded">
      <Update show={show} onHide={() => setShow(false)} data={data} />
      <Delete show={confirm} onHide={() => setConfirm(false)} data={data} />
      <div className="row  p-3">
        <div className="col-md-8">
          <h4>View the list of the Movie</h4>
        </div>
        {list && list.length > 0 && (
          <div className="col-md-4 float-right">
            <div className="results">
              <p>Showing</p>
              <h6> {list.length}</h6>
              <p> of {totalResults} Results</p>
            </div>
          </div>
        )}
      </div>
      {list && (
        <>
          <div class="table-responsive">
            <table class="table table-separate table-striped table-head-custom table-checkable mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Sr.No</th>
                  <th>Movie Title</th>
                  <th>Movie Poster</th>
                  <th>Action</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {list.length > 0 ? (
                  list.map((l, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{l.Title}</td>
                      <td>
                        {" "}
                        <a target={"_blank"} href={l.Poster}>
                          {l.Poster}
                        </a>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            setConfirm(true);
                            setData(l);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <i
                          class="fa fa-eye"
                          role={"button"}
                          onClick={() => {
                            setShow(true);
                            setData(l);
                          }}
                        ></i>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center">
                      {" "}
                      No Movie Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-sm-6 mt-3">
            <ReactPaginate
              className="pagination justify-content-center"
              previousClassName="page-item"
              nextClassName="page-item"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              nextLinkClassName="page-link"
              previousLinkClassName="page-link"
              activeClassName="active"
              pageCount={Math.ceil(totalResults / 10)}
              renderOnZeroPageCount={null}
              onPageChange={(e) => {
                setPageno(e.selected + 1);
              }}
              marginPagesDisplayed={2}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Listing;
