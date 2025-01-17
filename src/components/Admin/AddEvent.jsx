import { useContext, useState } from "react";
import Input from "./../common/Input";
import Button from "./../common/Button";
import eventService from "../../services/event-service";
import AuthContext from "../../contexts/authContext";
import { Heading2 } from "../common/Headings";

const AddEvent = () => {
  const { state } = useContext(AuthContext);

  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "",
    author: {
      _id: state.user._id,
      // name: `${state.user.firstName} ${state.user.lastName}`,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(eventData);

    setEventData({ ...eventData, date: new Date(eventData.date) });
    eventService
      .create(eventData)
      .then((res) => {
        console.log("Event added successfully:", res.data);
      })
      .catch((err) => {
        console.error("Failed to add event:", err);
      });

    // Reset form
    setEventData({
      title: "",
      date: "",
      location: "",
      description: "",
      category: "",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 md:w-full mx-16">
      <Heading2>Add New Event</Heading2>
      <form onSubmit={handleSubmit}>
        <Input
          id="title"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          required
          placeholder="Enter event title"
        />
        <Input
          type="date"
          id="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          required
        />
        <Input
          id="location"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          required
          placeholder="Enter event location"
        />
        <Input
          id="category"
          name="category"
          value={eventData.category}
          onChange={handleChange}
          placeholder="event category"
          required
        />
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-900 dark:text-gray-200"
            placeholder="Enter event description"
            rows="4"
          />
        </div>
        {/* Actions */}
        <div className="flex justify-end space-x-2">
          <Button type="submit">Add Event</Button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
