import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../1-Example/Redux/interfaces/common";
import { State } from "../../1-Example/Redux/rootReducer";
import { deleteUserAsync, getUsersAsync } from "../../1-Example/Redux/User/actions";

type Props = {};

function HomePage({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state: State) => state.user);
  useEffect(() => {
    // CALL API  get list Users
    dispatch(getUsersAsync())
  }, []);

  const handleDelete = (id: string | undefined) => {
    dispatch(deleteUserAsync(id))
  };

  return (
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
  );
}

export default HomePage;
