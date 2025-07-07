import React, { useState } from 'react';
import { Video, Clock, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const ScheduleMeet = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    notes: ''
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate available dates (next 14 days)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Meeting scheduled:', { selectedDate, selectedTime, ...formData });
    // You would typically send this data to your backend
  };

  const availableDates = generateAvailableDates();

  return (
    <div className="min-h-screen bg-black dot-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
          {/* Header Section */}
          <div className="p-8 border-b border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h1 className="text-3xl font-bold text-white">Aditya Patel</h1>
                <p className="text-white/80 mt-2">30-Minute Meeting</p>
                <div className="flex items-center mt-4 space-x-4">
                  <div className="flex items-center text-white/70">
                    <Video className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-sm">Video link will be sent by email</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-sm">30 mins</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <span className="text-white font-medium">
                  {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </span>
                <button 
                  onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {!selectedDate ? (
              // Date Selection
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
                {availableDates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateClick(date)}
                    className={`p-4 rounded-lg flex flex-col items-center transition-all ${
                      date.toDateString() === new Date().toDateString()
                        ? 'bg-primary/20 border border-primary'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <span className="text-white font-medium">
                      {date.toLocaleString('default', { weekday: 'short' })}
                    </span>
                    <span className="text-white text-xl font-bold mt-1">
                      {date.getDate()}
                    </span>
                    <span className="text-white/50 text-xs mt-1">
                      {date.toLocaleString('default', { month: 'short' })}
                    </span>
                  </button>
                ))}
              </div>
            ) : !selectedTime ? (
              // Time Selection
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">
                    {selectedDate.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric' })}
                  </h2>
                  <button 
                    onClick={() => setSelectedDate(null)}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Change date
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimeClick(time)}
                      className={`py-3 px-4 rounded-lg text-center transition-all ${
                        selectedTime === time
                          ? 'bg-primary text-white'
                          : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Form Section
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {selectedDate.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </h2>
                    <p className="text-primary">{selectedTime}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedTime(null)}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Change time
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-1">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label htmlFor="countryCode" className="block text-sm font-medium text-white/80 mb-1">
                      Country Code
                    </label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="+91">India (+91)</option>
                      <option value="+1">USA (+1)</option>
                      <option value="+44">UK (+44)</option>
                      <option value="+61">Australia (+61)</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-white/80 mb-1">
                    Notes / Message
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Book Now
                  </button>
                  <p className="text-white/60 text-sm mt-3 text-center">
                    You will receive a confirmation by email.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeet;