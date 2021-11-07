import { Link } from "react-router-dom";
import Style from "./style";

function Error() {
  return (
    <Style>
      <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
        <img src="/assets/images/not-found-robot.png" alt="not-found" />
        <h1>404</h1>
        <p>Not Found</p>
        <button className="btn btn-primary rounded-pill">
          <Link className="text-light" to="/">
            Back To Home
          </Link>
        </button>
      </div>
    </Style>
  );
}

export default Error;
