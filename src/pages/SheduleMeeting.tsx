import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Video,
  Globe,
  Plus,
} from "lucide-react";
import Header from "../components/Header";
import FinalCTA from "@/components/FinalCTA";

interface ScheduleMeetProps {}

const ScheduleMeet: React.FC<ScheduleMeetProps> = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "India",
    note: "",
  });

  // Generate time slots from 10:00 AM to 10:00 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour < 22; hour++) {
      const time12 = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? "PM" : "AM";
      const displayHour = time12 === 0 ? 12 : time12;

      slots.push(`${displayHour}:00 ${ampm}`);
      if (hour < 21) {
        // Don't add 30 min slot for 9:30 PM
        slots.push(`${displayHour}:30 ${ampm}`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatSelectedDateTime = () => {
    if (!selectedDate || !selectedTime) return "";
    const dateStr = selectedDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return `${dateStr}, ${selectedTime}`;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime("");
    setShowForm(false);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setShowForm(true);
    }
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    if (formData.firstName && formData.lastName && formData.email) {
      console.log("Meeting booked:", { selectedDate, selectedTime, formData });
      // Reset form or show success message
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const days = getDaysInMonth(currentDate);

  return (
    <>
    <section className="">
      <Header />
      <div className="min-h-[30rem] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[10rem] text-white flex flex-col lg:flex-row">
        {/* Left Side - Meeting Details */}
        <div className="w-full lg:w-1/3 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-800">
          <div className="mb-6">
            <button className="text-gray-400 hover:text-white mb-4">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-2">Aditya Patel</h2>
            <h3 className="text-xl mb-4">30-minute meeting</h3>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Video size={16} />
                <span>Video link will be sent by email</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} />
                <span>30 mins</span>
              </div>
              {selectedDate && selectedTime && (
                <>
                  <div className="flex items-center space-x-3">
                    <Calendar size={16} />
                    <span>{formatSelectedDateTime()}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe size={16} />
                    <span>Asia/Calcutta timezone</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Calendar/Time Slots/Form */}
        <div
          className={`w-full ${
            showForm ? "lg:w-2/3" : selectedDate ? "lg:w-2/3" : "lg:w-2/3"
          } p-6 lg:p-8`}
        >
          {!showForm ? (
            <div className="flex flex-col lg:flex-row h-full">
              {/* Calendar */}
              <div className={`${selectedDate ? "w-full lg:w-1/2" : "w-full"} lg:pr-4`}>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">
                      {monthNames[currentDate.getMonth()]}{" "}
                      {currentDate.getFullYear()}
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => navigateMonth("prev")}
                        className="p-2 hover:bg-gray-800 rounded"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => navigateMonth("next")}
                        className="p-2 hover:bg-gray-800 rounded"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {dayNames.map((day) => (
                      <div
                        key={day}
                        className="text-center text-gray-400 text-sm py-2"
                      >
                        {day}
                      </div>
                    ))}
                    {days.map((day, index) => (
                      <div key={index} className="aspect-square">
                        {day && (
                          <button
                            onClick={() => handleDateClick(day)}
                            className={`w-full h-full flex items-center justify-center text-sm rounded hover:bg-gray-800 transition-colors ${
                              selectedDate &&
                              day.toDateString() === selectedDate.toDateString()
                                ? "bg-white text-black"
                                : day.toDateString() ===
                                  new Date().toDateString()
                                ? "bg-[#FF8A00] text-black"
                                : "text-white"
                            }`}
                          >
                            {day.getDate()}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timezone */}
                <div className="mt-4">
                  <label className="block text-sm text-gray-400 mb-2">
                    Timezone
                  </label>
                  <select className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white">
                    <option>Asia/Calcutta - 5:24 PM</option>
                  </select>
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-4 border-t lg:border-t-0 lg:border-l border-gray-800 pt-6 lg:pt-0">
                  <h3 className="text-xl font-semibold mb-4">
                    {formatDate(selectedDate)}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeClick(time)}
                        className={`w-full text-center px-4 py-3 rounded border transition-colors ${
                          selectedTime === time
                            ? "bg-[#FF8A00] text-black border-[#FF8A00]"
                            : "border-gray-700 hover:border-[#FF8A00] hover:bg-gray-800"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  {selectedTime && (
                    <button
                      onClick={handleContinue}
                      className="w-full mt-6 bg-[#FF8A00] text-black py-3 px-6 rounded font-semibold hover:bg-[#e67a00] transition-colors"
                    >
                      Continue
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Form */
            <div className="max-w-lg mx-auto lg:mx-0">
              <h3 className="text-xl font-semibold mb-6">Your information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name*"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-3 text-white placeholder-gray-400 focus:border-[#FF8A00] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name*"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-3 text-white placeholder-gray-400 focus:border-[#FF8A00] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border border-gray-700 rounded px-3 py-3 text-white placeholder-gray-400 focus:border-[#FF8A00] focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-3 text-white focus:border-[#FF8A00] focus:outline-none"
                    >
                      <option value="India">India</option>
                      <option value="US">US</option>
                      <option value="UK">UK</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-3 text-white placeholder-gray-400 focus:border-[#FF8A00] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="text-[#FF8A00] hover:text-[#e67a00] flex items-center space-x-2"
                >
                  <Plus size={16} />
                  <span>Add another participant</span>
                </button>

                <div>
                  <textarea
                    name="note"
                    placeholder="Add note"
                    value={formData.note}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-transparent border border-gray-700 rounded px-3 py-3 text-white placeholder-gray-400 focus:border-[#FF8A00] focus:outline-none resize-none"
                  />
                  <div className="text-right text-sm text-gray-400 mt-1">
                    {formData.note.length}/1000
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 accent-[#FF8A00]"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    Yes, I agree to the{" "}
                    <a href="#" className="text-[#FF8A00] hover:underline">
                      Terms of Service
                    </a>{" "}
                    and the{" "}
                    <a href="#" className="text-[#FF8A00] hover:underline">
                      Data Policy
                    </a>{" "}
                    of Brevo Meetings
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="w-full bg-[#FF8A00] text-black py-3 px-6 rounded font-semibold hover:bg-[#e67a00] transition-colors"
                >
                  Book now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <FinalCTA />
      </section>
    </>
  );
};

export default ScheduleMeet;