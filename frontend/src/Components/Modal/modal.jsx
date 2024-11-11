import PropTypes from "prop-types";
import "./modal.css";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react";
import imgProfile from "../../assets/user.jpg";

const Modal = ({ toggleModal }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/profile", {
          withCredentials: true, // Important for sending cookies in the request
        });
        setProfile(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        if (err.response && err.response.data) {
          setError(err.response.data.error || "An error occurred");
        } else {
          setError("Network error or authentication failed");
        }
      }
    };

    fetchProfileData();
  }, []);

  const [fullname, setFullname] = useState(profile?.fullname || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [username, setUsername] = useState(profile?.username || "");

  // Add a new function to handle the PUT request
  const handleUpdateUser = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:8081/update-user",
        { fullname, email, username },
        {
          withCredentials: true, // Include authentication cookie in the request
        }
      );
      console.log(response.data);
      window.location.reload(); // Reload the page
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="overlay"></div>
          <span className="close" onClick={toggleModal}>
            <AiFillCloseCircle />
          </span>
          {error ? (
            <p className="error-message">{error}</p>
          ) : profile ? (
            <div className="modal-header">
              <div className="user-info">
                <img
                  src={imgProfile}
                  alt="Profile"
                  className="profile-picture"
                />
                <h2 className="profileUsername">{profile.fullname}</h2>
              </div>
              <p className="profileEmail">{profile.email}</p>
              <p className="profileEmail">{profile.username}</p>
            </div>
          ) : (
            <p>Loading profile...</p>
          )}

          <div className="modal-body">
            <form onSubmit={handleUpdateUser}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="New Name"
                  className="profileInput"
                  name="fullname"
                  value={fullname}
                  onChange={(event) => setFullname(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="New Email"
                  className="profileInput"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="New Username"
                  className="profileInput"
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="saveButton">
                <button type="submit" className="btn button">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
