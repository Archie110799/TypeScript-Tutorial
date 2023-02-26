import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../redux/interfaces/common";
import { State } from "../../redux/rootReducer";
import { deleteUserAsync, getUsersAsync } from "../../redux/User/actions";

type Props = {};

function HomePage({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state: State) => state.user);
  useEffect(() => {
    // CALL API  get list Users
    dispatch(getUsersAsync());
  }, []);

  const handleDelete = (id: string | undefined) => {
    dispatch(deleteUserAsync(id));
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6 col-xl-8">
        <table className="table table-light table-responsive table-striped table-hover w-75 m-auto border border-secondary">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUser) => {
              return (
                <tr key={user?.id}>
                  <th scope="row" onClick={() => navigate(`/${user?.id}`)}>
                    {user?.id}
                  </th>
                  <td onClick={() => navigate(`/${user?.id}`)}>{user?.name}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col-12 col-md-6 col-xl-4">
        <table className="table table-light table-responsive table-striped table-hover w-75 m-auto border border-secondary">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUser) => {
              return (
                <tr key={user?.id}>
                  <th scope="row" onClick={() => navigate(`/${user?.id}`)}>
                    {user?.id}
                  </th>
                  <td onClick={() => navigate(`/${user?.id}`)}>{user?.name}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
