import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";


export default function Home() {

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUser({id}))
  }

  return (
    <div className="container">
      <h2>Crud app with json server</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.userList?.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <Link
                    to={`edit/${data.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(data.id)} className="btn btn-sm btn-danger ms-2 ">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
