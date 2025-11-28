import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Clock,
  Globe,
} from "lucide-react";

type Step = "landing" | "booking" | "confirmation";
type Modal = "terms" | "privacy" | null;

const AgencyLandingPage: React.FC = () => {
  const [step, setStep] = useState<Step>("landing");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+92");
  const [isMuted, setIsMuted] = useState(true);
  const [selectedDate, setSelectedDate] = useState<number>(28);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h");
  const [showModal, setShowModal] = useState<Modal>(null);

  const currentMonth = "November 2025";
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const calendarDays = [
    null,
    null,
    null,
    null,
    null,
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];

  const timeSlots = [
    "05:15 PM",
    "05:30 PM",
    "07:30 PM",
    "07:45 PM",
    "08:00 PM",
    "08:15 PM",
    "08:30 PM",
    "08:45 PM",
    "09:00 PM",
    "09:15 PM",
    "09:30 PM",
    "09:45 PM",
  ];

  const handleContinue = () => {
    if (name && email && phone) {
      setStep("booking");
    }
  };

  const handleConfirmBooking = () => {
    if (selectedTime) {
      setStep("confirmation");
    }
  };

  // Landing Page
  if (step === "landing") {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
              <div className="bg-orange-600 text-white p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {showModal === "terms"
                    ? "Terms of Service"
                    : "Privacy Policy"}
                </h2>
                <button
                  onClick={() => setShowModal(null)}
                  className="text-white hover:text-gray-200 text-3xl leading-none"
                >
                  ×
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {showModal === "terms" ? (
                  <div className="space-y-4 text-gray-700">
                    <h3 className="font-bold text-lg">
                      1. Acceptance of Terms
                    </h3>
                    <p>
                      By accessing and using Mypowerly's services, you accept
                      and agree to be bound by the terms and provision of this
                      agreement.
                    </p>

                    <h3 className="font-bold text-lg">2. Use of Service</h3>
                    <p>
                      You agree to use our services only for lawful purposes and
                      in accordance with these Terms. You must not use our
                      services in any way that breaches any applicable local,
                      national, or international law or regulation.
                    </p>

                    <h3 className="font-bold text-lg">
                      3. Booking and Appointments
                    </h3>
                    <p>
                      All bookings made through our platform are subject to
                      availability. We reserve the right to cancel or reschedule
                      appointments with reasonable notice.
                    </p>

                    <h3 className="font-bold text-lg">
                      4. Intellectual Property
                    </h3>
                    <p>
                      The content, organization, graphics, design, and other
                      matters related to Mypowerly are protected under
                      applicable copyrights and other proprietary laws.
                    </p>

                    <h3 className="font-bold text-lg">
                      5. Limitation of Liability
                    </h3>
                    <p>
                      Mypowerly shall not be liable for any indirect,
                      incidental, special, consequential, or punitive damages
                      resulting from your use of or inability to use the
                      service.
                    </p>

                    <h3 className="font-bold text-lg">6. Changes to Terms</h3>
                    <p>
                      We reserve the right to modify these terms at any time.
                      Your continued use of the service following any changes
                      indicates your acceptance of the new terms.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 text-gray-700">
                    <h3 className="font-bold text-lg">
                      1. Information We Collect
                    </h3>
                    <p>
                      We collect information you provide directly to us,
                      including your name, email address, phone number, and any
                      other information you choose to provide when booking a
                      call or demo.
                    </p>

                    <h3 className="font-bold text-lg">
                      2. How We Use Your Information
                    </h3>
                    <p>
                      We use the information we collect to provide, maintain,
                      and improve our services, to process your bookings, to
                      send you technical notices and support messages, and to
                      communicate with you about our services.
                    </p>

                    <h3 className="font-bold text-lg">
                      3. Information Sharing
                    </h3>
                    <p>
                      We do not share your personal information with third
                      parties except as described in this policy. We may share
                      information with service providers who perform services on
                      our behalf.
                    </p>

                    <h3 className="font-bold text-lg">4. Data Security</h3>
                    <p>
                      We take reasonable measures to help protect your personal
                      information from loss, theft, misuse, unauthorized access,
                      disclosure, alteration, and destruction.
                    </p>

                    <h3 className="font-bold text-lg">5. Your Rights</h3>
                    <p>
                      You have the right to access, update, or delete your
                      personal information at any time. You can contact us to
                      exercise these rights.
                    </p>

                    <h3 className="font-bold text-lg">6. Cookies</h3>
                    <p>
                      We use cookies and similar tracking technologies to track
                      activity on our service and hold certain information to
                      improve and analyze our service.
                    </p>

                    <h3 className="font-bold text-lg">7. Contact Us</h3>
                    <p>
                      If you have any questions about this Privacy Policy,
                      please contact us at privacy@mypowerly.com
                    </p>
                  </div>
                )}
              </div>
              <div className="bg-gray-100 p-4 flex justify-end">
                <button
                  onClick={() => setShowModal(null)}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="max-w-4xl w-full text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">AGENCY OWNERS:</span> Watch how I
            built a $2M/year agency by booking qualified calls without spending
            a dollar on ads or building a personal brand
          </h1>
          <p className="text-gray-600 text-lg">
            (and how you can start too in the next 24 hours)
          </p>
        </div>

        <div className="max-w-4xl w-full mb-8">
          <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=675&fit=crop"
              alt="Presentation"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-green-600 text-white px-8 py-6 rounded-lg text-center shadow-xl">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="mb-3 flex items-center justify-center mx-auto"
                >
                  {isMuted ? <VolumeX size={48} /> : <Volume2 size={48} />}
                </button>
                <p className="font-semibold text-lg">
                  Your video has already started
                </p>
                <p className="text-sm mt-2">Click to listen</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm md:text-base px-4">
                So in the next 6 to 8 minutes, I'm going to show you how agency
                owners
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            <div className="flex-1 py-4 px-6 text-center font-medium text-red-600 border-b-2 border-red-600">
              ● Fill out the form
            </div>
            <div className="flex-1 py-4 px-6 text-center font-medium text-gray-400">
              ● Book your event
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 border-r border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Mypowerly Call Demo
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                We understand that every business has unique requirements. We'll
                work with you to craft a strategy tailored to your target
                audience that fits your needs.
              </p>

              <div className="mb-6">
                <p className="font-semibold text-gray-900 mb-3">
                  Mypowerly customers are winning
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm text-gray-700">
                      Booking more calls without manual work
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm text-gray-700">
                      Getting more replies with deeply personalized outreach
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm text-gray-700">
                      Consistently boosting efficiency and reducing costs
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm text-gray-700">
                      White glove implementation and setup
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="mb-4">
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-6">
                By entering your information, you consent to your data being
                saved in accordance with our{" "}
                <button
                  onClick={() => setShowModal("terms")}
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  Terms
                </button>{" "}
                &{" "}
                <button
                  onClick={() => setShowModal("privacy")}
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  Privacy Policy
                </button>
              </p>

              <button
                onClick={handleContinue}
                disabled={!name || !email || !phone}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
              >
                Continue
                <ChevronRight className="ml-2" size={20} />
              </button>
            </div>

            <div className="p-8 bg-gray-50">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <button
                    className="p-2 hover:bg-gray-200 rounded opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <h3 className="font-semibold text-gray-900">
                    {currentMonth}
                  </h3>
                  <button
                    className="p-2 hover:bg-gray-200 rounded opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-2">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-medium text-gray-500"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2 opacity-50">
                  {calendarDays.map((day, index) => (
                    <button
                      key={index}
                      disabled
                      className={`
                        aspect-square flex items-center justify-center rounded-lg text-sm cursor-not-allowed
                        ${!day ? "invisible" : ""}
                        ${
                          day === 28
                            ? "bg-orange-600 text-white font-bold"
                            : "bg-white text-gray-700"
                        }
                      `}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-700">
                  Please fill out the form before choosing your time slot.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 py-3 px-6 text-center">
            <p className="text-xs text-gray-600">
              Powered by <span className="font-semibold">Mypowerly</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Booking Page
  if (step === "booking") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-5xl w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            <div className="flex-1 py-4 px-6 text-center font-medium text-gray-900">
              <span className="text-green-600">✓</span> Fill out the form
            </div>
            <div className="flex-1 py-4 px-6 text-center font-medium text-red-600 border-b-2 border-red-600">
              ● Book your event
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {/* Left Panel */}
            <div className="p-8 border-r border-gray-200 bg-white">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mypowerly Call Demo
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs">📹</span>
                  </div>
                  <span className="text-sm">Zoom</span>
                </div>

                <div className="flex items-center text-gray-700">
                  <Clock className="mr-3 text-gray-600" size={20} />
                  <span className="text-sm">20 minutes</span>
                </div>

                <div className="flex items-center text-gray-700">
                  <Globe className="mr-3 text-gray-600" size={20} />
                  <span className="text-sm">Pakistan Time (4:40 PM)</span>
                </div>
              </div>
            </div>

            {/* Calendar Panel */}
            <div className="p-8 border-r border-gray-200 bg-white">
              <div className="flex items-center justify-between mb-6">
                <button className="p-2 hover:bg-gray-100 rounded">
                  <ChevronLeft size={20} />
                </button>
                <h3 className="font-semibold text-gray-900">{currentMonth}</h3>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-medium text-gray-500"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day && setSelectedDate(day)}
                    disabled={!day}
                    className={`
                      aspect-square flex items-center justify-center rounded-lg text-sm
                      ${!day ? "invisible" : ""}
                      ${
                        day === 28 && selectedDate === 28
                          ? "bg-orange-600 text-white font-bold"
                          : ""
                      }
                      ${day === 29 ? "bg-orange-200 text-orange-900" : ""}
                      ${
                        day !== 28 && day !== 29 && day
                          ? "hover:bg-gray-100 text-gray-700"
                          : ""
                      }
                    `}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots Panel */}
            <div className="p-8 bg-gray-50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">
                  Fri {selectedDate}
                </h3>
                <div className="flex gap-1 bg-white border border-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setTimeFormat("12h")}
                    className={`px-3 py-1 text-xs rounded ${
                      timeFormat === "12h"
                        ? "bg-orange-600 text-white"
                        : "text-gray-600"
                    }`}
                  >
                    12h
                  </button>
                  <button
                    onClick={() => setTimeFormat("24h")}
                    className={`px-3 py-1 text-xs rounded ${
                      timeFormat === "24h"
                        ? "bg-orange-600 text-white"
                        : "text-gray-600"
                    }`}
                  >
                    24h
                  </button>
                </div>
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full py-3 px-4 rounded-lg border text-sm font-medium transition ${
                      selectedTime === time
                        ? "bg-orange-600 text-white border-orange-600"
                        : "bg-white border-gray-200 text-gray-700 hover:border-orange-600"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {selectedTime && (
                <button
                  onClick={handleConfirmBooking}
                  className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </div>

          <div className="bg-gray-100 py-3 px-6 text-center">
            <p className="text-xs text-gray-600">
              Powered by <span className="font-semibold">Mypowerly</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Confirmation Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-orange-100">
            Your meeting has been successfully scheduled
          </p>
        </div>

        <div className="p-8">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Meeting Details
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Event</p>
                <p className="font-semibold text-gray-900">
                  Mypowerly Call Demo
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Date & Time</p>
                <p className="font-semibold text-gray-900">
                  Friday, November {selectedDate}, 2025 at {selectedTime}
                </p>
                <p className="text-sm text-gray-600">Pakistan Time (PKT)</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Duration</p>
                <p className="font-semibold text-gray-900">20 minutes</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="font-semibold text-gray-900">Zoom Video Call</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Attendee</p>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-gray-600">{email}</p>
                <p className="text-sm text-gray-600">
                  {countryCode} {phone}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">✉️ Confirmation email sent!</span>
              <br />A calendar invitation and meeting link have been sent to{" "}
              {email}
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Add to Calendar
            </button>
            <button className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-gray-100 py-3 px-6 text-center">
          <p className="text-xs text-gray-600">
            Powered by <span className="font-semibold">Mypowerly</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyLandingPage;
