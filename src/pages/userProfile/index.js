import { useAuthState, useAuthDispatch, logOut } from "../../context";
import Style from "./style";

function UserProfile() {
  const userData = useAuthState();
  const dispatch = useAuthDispatch();

  document.title = "Profile";

  return (
    <Style>
      <div className="wrapper">
        <div
          className="profile"
          style={{
            backgroundImage: `url(${userData.gravatar})`,
          }}
        >
          <div className="overlay">
            <div className="about d-flex flex-column">
              <h4>{userData.userName}</h4>
              <span>{userData.email}</span>
              <span>{userData.phoneNumber}</span>
              <button
                className="btn btn-primary"
                onClick={() => logOut(dispatch)}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}

export default UserProfile;
