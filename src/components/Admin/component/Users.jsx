import { useEffect, useState } from "react";
import UserBar from "../bars/UserBar";
import UserModal from "../modals/UserModal";
import userService from "../../../services/user-service";

// const initialUsers = [
//   {
//     _id: 1,
//     firstName: "Ammar",
//     lastName: "Adnew",
//     email: "ammar.adnew@gmail.com",
//     phone: "+251964666570",
//   },
//   {
//     _id: 2,
//     firstName: "Sara",
//     lastName: "Belay",
//     email: "sara.belay@gmail.com",
//     phone: "+251911223344",
//   },
//   {
//     _id: 3,
//     firstName: "Yared",
//     lastName: "Tekle",
//     email: "yared.tekle@gmail.com",
//     phone: "+251922334455",
//   },
//   {
//     _id: 4,
//     firstName: "Helen",
//     lastName: "Alemu",
//     email: "helen.alemu@gmail.com",
//     phone: "+251933445566",
//   },
//   {
//     _id: 5,
//     firstName: "Kalkidan",
//     lastName: "Getachew",
//     email: "kalkidan.getachew@gmail.com",
//     phone: "+251944556677",
//   },
//   {
//     _id: 6,
//     firstName: "Samuel",
//     lastName: "Mekonnen",
//     email: "samuel.mekonnen@gmail.com",
//     phone: "+251955667788",
//   },
//   {
//     _id: 7,
//     firstName: "Betty",
//     lastName: "Abebe",
//     email: "betty.abebe@gmail.com",
//     phone: "+251966778899",
//   },
//   {
//     _id: 8,
//     firstName: "Mulu",
//     lastName: "Girma",
//     email: "mulu.girma@gmail.com",
//     phone: "+251977889900",
//   },
//   {
//     _id: 9,
//     firstName: "Robel",
//     lastName: "Wondimu",
//     email: "robel.wondimu@gmail.com",
//     phone: "+251988990011",
//   },
//   {
//     _id: 10,
//     firstName: "Lemlem",
//     lastName: "Hailu",
//     email: "lemlem.hailu@gmail.com",
//     phone: "+251999001122",
//   },
//   {
//     _id: 11,
//     firstName: "Abel",
//     lastName: "Fikre",
//     email: "abel.fikre@gmail.com",
//     phone: "+251910112233",
//   },
//   {
//     _id: 12,
//     firstName: "Hanna",
//     lastName: "Kidane",
//     email: "hanna.kidane@gmail.com",
//     phone: "+251921223344",
//   },
//   {
//     _id: 13,
//     firstName: "Dawit",
//     lastName: "Mesfin",
//     email: "dawit.mesfin@gmail.com",
//     phone: "+251932334455",
//   },
//   {
//     _id: 14,
//     firstName: "Lidia",
//     lastName: "Tadesse",
//     email: "lidia.tadesse@gmail.com",
//     phone: "+251943445566",
//   },
//   {
//     _id: 15,
//     firstName: "Eyob",
//     lastName: "Mengistu",
//     email: "eyob.mengistu@gmail.com",
//     phone: "+251954556677",
//   },
// ];

const App = () => {
  const [users, setUsers] = useState(); // Store users dynamically
  const [error, setError] = useState(null); // Store users dynamically
  const [isLoading, setIsLoading] = useState(true); // Store users dynamically
  const [id, setId] = useState(null);
  const [showUser, setShowUser] = useState(false);

  useEffect(() => {
    userService
      .getAll()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleEdit = (id) => {
    console.log("Edit user:", id);
    setId(id);
    setShowUser(true); // Show modal for editing
  };

  const handleDelete = (userId) => {
    console.log("Delete user:", userId);
    const filteredUsers = users.filter((user) => user._id !== userId);
    setUsers(filteredUsers);
    userService
      .delete(userId)
      .then((res) => console.log(res.data))
      .catch((err) =>
        setError(err.message || "Couldn`t Delete the user try again")
      );
  };

  const handleDetails = (user) => {
    console.log("View details for user:", user);
    setId(user._id);
    setShowUser(true); // Show modal for details
  };

  if (isLoading) return <p>loadding...</p>;

  if (error) return <p>{error || "some thing went wrong"}</p>;

  return (
    <div className="flex flex-col gap-2 justify-start items-start min-h-screen w-screen py-20 px-10 bg-background">
      {users.map((user, index) => (
        <UserBar
          key={user._id}
          index={index}
          user={user}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onDetails={handleDetails}
        />
      ))}

      {showUser && (
        <UserModal
          user={users.find((u) => u._id === id)}
          onClose={() => setShowUser(false)}
        />
      )}
    </div>
  );
};

export default App;
