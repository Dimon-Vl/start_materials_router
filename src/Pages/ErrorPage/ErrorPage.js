import {Link} from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1><b>Page not found</b></h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
