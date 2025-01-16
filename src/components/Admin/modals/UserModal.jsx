/* eslint-disable react/prop-types */
import UserCard from "./../cards/UserCard";

const UserModal = ({ user, onClose }) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        if (e.target.classList.contains("my-overlay")) onClose();
      }}
      className="my-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <UserCard user={user} />
    </div>
  );
};

export default UserModal;
