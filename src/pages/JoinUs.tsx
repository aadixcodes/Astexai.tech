import React, { useState } from "react";
import Header from '../components/Header';
import FinalCTA from '../components/FinalCTA';

interface FormData {
  name: string;
  email: string;
  college: string;
  age: string;
  year: string;
  gender: string;
  type: string;
  github: string;
  skills: string;
  experience: string;
  portfolio: string;
  interests: string;
  strengths: string;
  relevantProjects: string;
}

const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    college: "",
    age: "",
    year: "",
    gender: "",
    type: "",
    github: "",
    skills: "",
    experience: "",
    portfolio: "",
    interests: "",
    strengths: "",
    relevantProjects: "",
  });

  const [showTechFields, setShowTechFields] = useState<boolean>(false);
  const [showNonTechFields, setShowNonTechFields] = useState<boolean>(false);
  const [formStep, setFormStep] = useState<number>(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "type") {
      if (value === "tech") {
        setShowTechFields(true);
        setShowNonTechFields(false);
      } else if (value === "nontech") {
        setShowTechFields(false);
        setShowNonTechFields(true);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        "https://astexstf.app.n8n.cloud/webhook/273c39ee-f243-406d-bb7b-b4a163c2088f",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status}`);
      }

      setIsSubmitting(false);
      setShowPopup(true);
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit application. Please try again later.");
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      college: "",
      age: "",
      year: "",
      gender: "",
      type: "",
      github: "",
      skills: "",
      experience: "",
      portfolio: "",
      interests: "",
      strengths: "",
      relevantProjects: "",
    });
    setFormStep(1);
    setShowTechFields(false);
    setShowNonTechFields(false);
    setTimeout(() => setShowPopup(false), 10000);
  };

  const nextStep = () => setFormStep(formStep + 1);
  const prevStep = () => setFormStep(formStep - 1);

  return (
    <div className="min-h-screen bg-black dot-bg relative text-white overflow-x-hidden">
      <Header />

      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 mt-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative inline-block">
              Join <span className="text-[#FF8A00]">Our Team</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FF8A00] rounded-full"></div>
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-80 mb-8">
              Become part of our innovative team and help shape the future.
              Whether you're a tech enthusiast or bring other valuable skills,
              we have a place for you.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[#141414] p-8 rounded-2xl shadow-2xl border border-[#FF8A00]/10 relative overflow-hidden">
            

            <form onSubmit={handleSubmit} className="relative">
              {/* Error message */}
              {error && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200">
                  {error}
                </div>
              )}

              {/* Progress indicator */}
              <div className="mb-8 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          formStep >= step
                            ? "bg-[#FF8A00] text-black"
                            : "bg-gray-700"
                        }`}
                      >
                        {step}
                      </div>
                      {step < 3 && (
                        <div
                          className={`h-1 w-12 ${
                            formStep >= step + 1 ? "bg-[#FF8A00]" : "bg-gray-700"
                          }`}
                        ></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  Step {formStep} of 3
                </div>
              </div>

              {/* Step 1: Basic Information */}
              {formStep === 1 && (
                <div className="space-y-6 transition-all duration-500 ease-in-out">
                  <h2 className="text-2xl font-bold mb-6 text-[#FF8A00]">
                    Basic Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="college"
                        className="block text-sm font-medium mb-2"
                      >
                        College/University
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="college"
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                          placeholder="University Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium mb-2"
                      >
                        Age
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <input
                          type="number"
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                          placeholder="Your age"
                          required
                          min="16"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="year"
                        className="block text-sm font-medium mb-2"
                      >
                        Year of Study
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <select
                          id="year"
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                          required
                        >
                          <option value="">Select Year</option>
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                          <option value="5th Year">5th Year</option>
                          <option value="graduate">Graduate</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium mb-2"
                      >
                        Gender
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          <option value="prefer-not-to-say">
                            Prefer not to say
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="relative w-[10rem] px-4 py-2 rounded-[7px] transition-all duration-200 group overflow-hidden"
                      style={{
                        border: "1px solid rgb(255, 177, 104)",
                        background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                        cursor: 'pointer'
                      }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-white font-medium">Next Step</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-transform group-hover:translate-x-1">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                      <div className={`absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300`}></div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Tech or Non-Tech Selection */}
              {formStep === 2 && (
                <div className="space-y-6 transition-all duration-500 ease-in-out">
                  <h2 className="text-2xl font-bold mb-6 text-[#FF8A00]">
                    What's your focus?
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 flex flex-col items-center text-center cursor-pointer ${
                        formData.type === "tech"
                          ? "border-[#FF8A00] bg-[#FF8A00] bg-opacity-10"
                          : "border-gray-700 hover:border-gray-500"
                      }`}
                      onClick={() =>
                        handleChange({
                          target: { name: "type", value: "tech" },
                        } as React.ChangeEvent<HTMLInputElement>)
                      }
                    >
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                          formData.type === "tech"
                            ? "bg-[#FF8A00] text-black"
                            : "bg-[#1E1E1E]"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium mb-2">
                        Technical Role
                      </h3>
                      <p className="text-gray-400">
                        For developers, designers, and other technical positions
                      </p>

                      <input
                        type="radio"
                        name="type"
                        value="tech"
                        checked={formData.type === "tech"}
                        onChange={handleChange}
                        className="absolute opacity-0"
                      />
                    </div>

                    <div
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 flex flex-col items-center text-center cursor-pointer ${
                        formData.type === "nontech"
                          ? "border-[#FF8A00] bg-[#FF8A00] bg-opacity-10"
                          : "border-gray-700 hover:border-gray-500"
                      }`}
                      onClick={() =>
                        handleChange({
                          target: { name: "type", value: "nontech" },
                        } as React.ChangeEvent<HTMLInputElement>)
                      }
                    >
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                          formData.type === "nontech"
                            ? "bg-[#FF8A00] text-black"
                            : "bg-[#1E1E1E]"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium mb-2">
                        Non-Technical Role
                      </h3>
                      <p className="text-gray-400">
                        For marketing, HR, management, and other positions
                      </p>

                      <input
                        type="radio"
                        name="type"
                        value="nontech"
                        checked={formData.type === "nontech"}
                        onChange={handleChange}
                        className="absolute opacity-0"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border border-gray-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 17l-5-5m0 0l5-5m-5 5h12"
                        />
                      </svg>
                      Previous
                    </button>

                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.type}
                      className={`relative w-[10rem] px-4 py-2 rounded-[7px] transition-all duration-200 group overflow-hidden ${
                        !formData.type ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      style={{
                        border: "1px solid rgb(255, 177, 104)",
                        background: !formData.type 
                          ? "rgba(227, 109, 0, 0.5)" 
                          : "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                        cursor: !formData.type ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-white font-medium">Next Step</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-transform group-hover:translate-x-1">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                      <div className={`absolute inset-0 bg-white/0 ${!formData.type ? '' : 'group-hover:bg-white/10'} transition-all duration-300`}></div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Specific Fields Based on Role Type */}
              {formStep === 3 && (
                <div className="space-y-6 transition-all duration-500 ease-in-out">
                  <h2 className="text-2xl font-bold mb-6 text-[#FF8A00]">
                    {showTechFields
                      ? "Technical Skills & Experience"
                      : "Your Background & Interests"}
                  </h2>

                  {/* Tech Fields */}
                  {showTechFields && (
                    <div className="space-y-6">
                      <div className="form-group">
                        <label
                          htmlFor="github"
                          className="block text-sm font-medium mb-2"
                        >
                          GitHub Profile URL
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                              />
                            </svg>
                          </div>
                          <input
                            type="url"
                            id="github"
                            name="github"
                            value={formData.github}
                            onChange={handleChange}
                            className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                            placeholder="https://github.com/yourusername"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="skills"
                          className="block text-sm font-medium mb-2"
                        >
                          Technical Skills
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <textarea
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                            placeholder="Languages, frameworks, tools you're proficient with"
                            rows={3}
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="experience"
                          className="block text-sm font-medium mb-2"
                        >
                          Years of Experience
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                          >
                            <option value="">Select Experience</option>
                            <option value="0">
                              No professional experience yet
                            </option>
                            <option value="0-1">Less than 1 year</option>
                            <option value="1-2">1-2 years</option>
                            <option value="2-3">2-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5+">5+ years</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="portfolio"
                          className="block text-sm font-medium mb-2"
                        >
                          Portfolio/Website (Optional)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                              />
                            </svg>
                          </div>
                          <input
                            type="url"
                            id="portfolio"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleChange}
                            className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                            placeholder="https://yourportfolio.com"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Non-Tech Fields */}
                  {showNonTechFields && (
                    <div className="space-y-6">
                      <div className="form-group">
                        <label
                          htmlFor="interests"
                          className="block text-sm font-medium mb-2"
                        >
                          Areas of Interest
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                              />
                            </svg>
                          </div>
                          <select
                            id="interests"
                            name="interests"
                            value={formData.interests}
                            onChange={handleChange}
                            className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                          >
                            <option value="">Select Area of Interest</option>
                            <option value="marketing">
                              Marketing & Communications
                            </option>
                            <option value="hr">Human Resources</option>
                            <option value="operations">Operations</option>
                            <option value="finance">Finance</option>
                            <option value="sales">Sales</option>
                            <option value="content">Content Creation</option>
                            <option value="project-management">
                              Project Management
                            </option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="strengths"
                          className="block text-sm font-medium mb-2"
                        >
                          Key Strengths
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                          <textarea
                            id="strengths"
                            name="strengths"
                            value={formData.strengths}
                            onChange={handleChange}
                            className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                            placeholder="What are your main strengths and skills?"
                            rows={3}
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="relevantProjects"
                          className="block text-sm font-medium mb-2"
                        >
                          Relevant Projects/Experience
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              />
                            </svg>
                          </div>
                          <textarea
                            id="relevantProjects"
                            name="relevantProjects"
                            value={formData.relevantProjects}
                            onChange={handleChange}
                            className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                            placeholder="Tell us about any relevant projects or experience you have"
                            rows={3}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Submit button */}
              {formStep === 3 && (
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border border-gray-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 17l-5-5m0 0l5-5m-5 5h12"
                      />
                    </svg>
                    Previous
                  </button>

                  <button
                    type="submit"
                    className="relative w-[10rem] px-4 py-2 rounded-[7px] transition-all duration-200 group overflow-hidden"
                    style={{
                      border: "1px solid rgb(255, 177, 104)",
                      background: isSubmitting 
                        ? "rgba(227, 109, 0, 0.5)" 
                        : "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                    disabled={isSubmitting}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="text-white font-medium">Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-white font-medium">Submit</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-transform group-hover:translate-x-1">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </>
                      )}
                    </div>
                    <div className={`absolute inset-0 bg-white/0 ${!isSubmitting && 'group-hover:bg-white/10'} transition-all duration-300`}></div>
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Success Popup */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300"></div>
              <div className="bg-[#141414] border border-[#FF8A00]/20 rounded-xl p-8 shadow-2xl relative z-10 max-w-md w-full transform transition-all duration-300 scale-95 opacity-0 animate-fade-in">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#FF8A00] bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#FF8A00]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your interest. Our team will contact you soon.
                  </p>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="relative w-[10rem] px-4 py-2 rounded-[7px] transition-all duration-200 group overflow-hidden"
                    style={{
                      border: "1px solid rgb(255, 177, 104)",
                      background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                      cursor: 'pointer'
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-white font-medium">Close</span>
                    </div>
                    <div className={`absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300`}></div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};

export default JoinUs;