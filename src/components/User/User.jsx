import { Link, useLoaderData } from "react-router-dom";

export default function UserPage() {
  const user = useLoaderData();

  return (
    <div className="user-page">
      <Link to="/users">Back</Link>
      <h1>User</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  );
}