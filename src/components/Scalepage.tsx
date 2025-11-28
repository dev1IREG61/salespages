import React, { useState } from "react";
import { Calendar, Users, Mail, CheckCircle, Clock } from "lucide-react";

const ScaleLandingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(29);
  const [selectedTime, setSelectedTime] = useState("");

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // November 2025 calendar
  const calendarDays = [
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

  const timeSlots = ["1:00pm", "1:30pm", "2:00pm", "2:30pm"];

  const scrollToCTA = () => {
    document
      .getElementById("booking-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="w-full  bg-[#003BFF] py-4 flex justify-center items-center">
        <p className="text-white font-semibold text-lg underline underline-offset-4">
          Only for agency Owners Above $5k/mo
        </p>
      </div>

      {/* Hero Section */}
      <div className="w-full px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            I Will Build Your Cold Email System
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            For Free, And Help You Book 20+
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            calls/month With It
          </h2>
          <p className="text-gray-600 italic mb-8">
            No agency retainers or commitment
          </p>
          <button
            onClick={scrollToCTA}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition text-lg"
          >
            Get your FREE buildout now
          </button>
        </div>

        {/* Main Video */}
        <div className="w-full mb-16">
          <div className="relative bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 rounded-lg overflow-hidden aspect-video">
            <img
              src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=675&fit=crop"
              alt="Video presentation"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                  Now imagine this
                </p>
              </div>
            </div>
            <div className="absolute top-3 left-3 bg-gray-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded">
              Enable sound
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
              <div className="h-1 flex-1 bg-white bg-opacity-30 rounded">
                <div className="h-full w-1/4 bg-white rounded"></div>
              </div>
              <button className="text-white hover:text-gray-200">🔇</button>
              <button className="text-white hover:text-gray-200">⚙️</button>
              <button className="text-white hover:text-gray-200">⛶</button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
            Get Your Free Buildout Below
          </h3>
        </div>

        {/* Booking Section */}
        <div id="booking-section" className="w-full mb-16">
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            {/* Left Side - Description */}
            <div className="p-8 bg-gray-50">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <Clock className="w-4 h-4" />
                <span>60 min</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                This is a free 1 call with Foundera(or)'s team
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Business<span className="text-red-600">*</span> who are
                    struggling to book more calendars
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Agencies or service providers who feel like they're not
                    booking enough calls
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Who you'll get this with call:
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-semibold text-gray-900">
                    A Personalized Audit Of Your Business's Marketing
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-semibold text-gray-900">
                    A Full Walkthrough of how we can get you qualified calls for
                    your calendar
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-semibold text-gray-900">
                    A rundown of the systems we use to run our goals
                  </p>
                </div>
              </div>

              <button className="text-blue-600 text-sm font-medium hover:underline">
                Cookie settings
              </button>
            </div>

            {/* Right Side - Calendar */}
            <div className="p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-6">
                Select a Date & Time
              </h4>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <span className="text-gray-600">←</span>
                  </button>
                  <span className="font-semibold text-gray-900">
                    November 2025
                  </span>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <span className="text-gray-600">→</span>
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-medium text-gray-500 py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <button
                      key={index}
                      onClick={() => day && setSelectedDate(day)}
                      disabled={!day}
                      className={`
                        aspect-square flex items-center justify-center text-sm rounded
                        ${!day ? "invisible" : ""}
                        ${
                          day === 29 && selectedDate === 29
                            ? "bg-blue-600 text-white font-bold"
                            : ""
                        }
                        ${
                          day && day !== 29
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

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Position: Western Time UTC-8 (4pm-...)
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-3">
                  Saturday, November 29
                </h5>
                <div className="space-y-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-full py-2 px-4 rounded border text-sm font-medium transition ${
                        selectedTime === time
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white border-gray-300 text-gray-700 hover:border-blue-600"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2">Testimonials</p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              What others are saying
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Testimonial 1 */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                alt="Testimonial"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-gray-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                Enable sound
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                <div className="h-1 flex-1 bg-white bg-opacity-30 rounded">
                  <div className="h-full w-1/3 bg-white rounded"></div>
                </div>
                <button className="text-white hover:text-gray-200 text-xs">
                  🔇
                </button>
                <button className="text-white hover:text-gray-200 text-xs">
                  ⚙️
                </button>
                <button className="text-white hover:text-gray-200 text-xs">
                  ⛶
                </button>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop"
                alt="Testimonial"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-gray-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                Enable sound
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                <div className="h-1 flex-1 bg-white bg-opacity-30 rounded">
                  <div className="h-full w-1/3 bg-white rounded"></div>
                </div>
                <button className="text-white hover:text-gray-200 text-xs">
                  🔇
                </button>
                <button className="text-white hover:text-gray-200 text-xs">
                  ⚙️
                </button>
                <button className="text-white hover:text-gray-200 text-xs">
                  ⛶
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <button
            onClick={scrollToCTA}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition text-lg"
          >
            Get your FREE buildout now
          </button>
        </div>

        {/* 3 Step Process */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our 3 Step Process
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Qualification
              </h4>
              <p className="text-gray-600 text-sm">
                We jump on a call with you to see if we'd be a great fit for
                each other.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Onboarding
              </h4>
              <p className="text-gray-600 text-sm">
                We onboard you on a call, send you an email with the next steps
                and you fill out our onboarding form.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Hand Over
              </h4>
              <p className="text-gray-600 text-sm">
                We hand the system over to you, and you start booking 15-30
                calls every month from our done for you cold email course to
                handle any questions.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-900 mb-6">
            Ready to get started?
          </p>
          <button
            onClick={scrollToCTA}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition text-lg uppercase tracking-wide"
          >
            Get your free buildout now
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-6 text-center">
        <p className="text-sm text-gray-600">
          Powered by <span className="font-semibold">Mypowerly</span>
        </p>
      </div>
    </div>
  );
};

export default ScaleLandingPage;
