import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
  const users = useLoaderData();

  return (
    <div className="users">
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}