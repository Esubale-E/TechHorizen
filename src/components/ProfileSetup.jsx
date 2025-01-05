import { useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";

const ProfileSetup = () => {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(eventData);
    setEventData({
      title: "",
      date: "",
      location: "",
      description: "",
    }); // Reset form
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Add New Event
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-900 dark:text-gray-200"
          />
          <Input
            type="text"
            id="location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-900 dark:text-gray-200"
            placeholder="Enter event location"
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
    </div>
  );
};

export default ProfileSetup;
