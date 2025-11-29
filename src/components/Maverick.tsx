import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Workbook from "./Workbook";
import { fetchLandingPageData, type SalesPages } from "../types/maverick";

const styles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  .geometric-bg {
    background-color: #000000;
    background-image: 
      linear-gradient(30deg, #050505 12%, transparent 12.5%, transparent 87%, #050505 87.5%, #050505),
      linear-gradient(150deg, #050505 12%, transparent 12.5%, transparent 87%, #050505 87.5%, #050505),
      linear-gradient(30deg, #050505 12%, transparent 12.5%, transparent 87%, #050505 87.5%, #050505),
      linear-gradient(150deg, #050505 12%, transparent 12.5%, transparent 87%, #050505 87.5%, #050505),
      linear-gradient(60deg, #0a0a0a 25%, transparent 25.5%, transparent 75%, #0a0a0a 75%, #0a0a0a),
      linear-gradient(60deg, #0a0a0a 25%, transparent 25.5%, transparent 75%, #0a0a0a 75%, #0a0a0a);
    background-size: 80px 140px;
    background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
  }
`;

export default function TaxAdvisorLandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 18,
    hours: 2,
    minutes: 36,
    seconds: 44,
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showWorkbook, setShowWorkbook] = useState(false);
  const [pageData, setPageData] = useState<SalesPages | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLandingPageData()
      .then((data) => {
        setPageData(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  console.log(pageData);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const speakers = [
    { name: "DAVID A. PEREZ", image: "/david.webp" },
    { name: "DANIEL TAPIA", image: "/daniel.webp" },
    { name: "GEORGE NIÑO", image: "/george.webp" },
    { name: "RUTH CREAPO", image: "/ruth.webp" },
  ];

  const faqs = [
    "What if I miss the live event? Will the workshop still be free for me?",
    "Do I need to have software systems in place yet?",
    "What can I learn in the tax advisory niche? What if I want just deductions?",
    "What's the time commitment?",
    "Can this work even with $0 STARTING CAPITAL (no existing services)?",
    "What if I am a sole practitioner or brand new starting out how will this help?",
    "Is this for beginners or advanced too?",
    "Will this show me what exactly to say/do or just AI tools?",
    "Can you walk everybody step by step concept?",
    "How much time will it take? We would find the class all times or just?",
  ];

  if (showWorkbook) {
    return <Workbook />;
  }

  if (loading) {
    return (
      <div className="geometric-bg text-white fixed inset-0 w-screen h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="geometric-bg text-white fixed inset-0 w-screen h-screen overflow-y-auto">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 px-4 text-center font-bold">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm">
              From Tax Preparer to $100K/Month In 90 Days | French-fork Beginner
              for $100K/Month Strategies | powered by AI
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Save my Spot
            </button>
          </div>
        </div>
        <p className="text-xl sm:text-sm mt-2 text-center font-bold text-yellow-300">
          🔥 DON'T LIVE VIRTUAL EVENT FOR CPAS, EAS, TAX BUSINESS OWNERS
        </p>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"></div>

          <div className="container mx-auto px-4 py-12 relative max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                  THE $100K/MONTH
                  <br />
                  <span className="text-yellow-500">TAX ADVISOR</span>
                  <br />
                  WORKSHOP
                </h1>
                <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  Join this to transform today's transforming clients seeking
                  cash in $3K-$10K per client over the holidays at lightning
                  speed, WITHOUT ANY AI expertise.
                </p>

                {/* Countdown Timer */}
                <div className="flex justify-center gap-4 mb-8">
                  <div className="text-center">
                    <div className="bg-white text-black rounded-lg px-4 py-2 text-3xl font-bold">
                      {timeLeft.days}
                    </div>
                    <div className="text-xs mt-1">DAYS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white text-black rounded-lg px-4 py-2 text-3xl font-bold">
                      {timeLeft.hours}
                    </div>
                    <div className="text-xs mt-1">HRS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white text-black rounded-lg px-4 py-2 text-3xl font-bold">
                      {timeLeft.minutes}
                    </div>
                    <div className="text-xs mt-1">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white text-black rounded-lg px-4 py-2 text-3xl font-bold">
                      {timeLeft.seconds}
                    </div>
                    <div className="text-xs mt-1">SEC</div>
                  </div>
                </div>

                <div className="text-yellow-500 font-bold mb-4 text-center">
                  DECEMBER 16-17, 2025 9AM-3PM CST
                  <br />
                  <span className="text-white text-sm">
                    ON ZOOM (Link Sent to Email)
                  </span>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform"
                >
                  🎯 REGISTER FOR FREE WORKSHOP
                </button>
              </div>
              <div>
                <img
                  src="/hero.webp"
                  alt="Workshop Hero"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featured On Section */}
        <div className="py-12 border-y border-gray-800 overflow-hidden">
          <p className="text-center text-gray-400 mb-6">FEATURED ON</p>
          <div className="flex items-center gap-12 px-4 animate-[scroll_20s_linear_infinite]">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex items-center gap-12 shrink-0">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span className="text-gray-500 text-2xl font-bold whitespace-nowrap">
                    CBS
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                  <span className="text-gray-500 text-2xl font-bold whitespace-nowrap">
                    FOX
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-gray-500 text-2xl font-bold whitespace-nowrap">
                    NBC
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                  <span className="text-gray-500 text-2xl font-bold whitespace-nowrap">
                    Entrepreneur
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                  <span className="text-gray-500 text-2xl font-bold whitespace-nowrap">
                    Inc.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-6">WHAT YOU'LL LEARN</h2>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-4 px-6 rounded-lg max-w-4xl mx-auto">
              <p className="font-bold text-lg">
                In 2 days, I'll show you how to turn free advice into a
                $25K-per-week advisory business.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 md:p-12 rounded-2xl max-w-4xl mx-auto border border-gray-700 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">
                THE $100K/MONTH TAX ADVISOR WORKSHOP
              </h2>
            </div>

            {/* Day 1 */}
            <div className="mb-8 bg-gradient-to-br from-gray-700 to-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-gray-600 to-gray-700 text-white font-bold px-6 py-3 rounded-lg text-xl border border-gray-500">
                  DAY 1
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-yellow-500 font-bold text-lg mb-3">
                    MORNING
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>
                        C.A.R.E. Formula: Your Ultimate Tax Advisory Roadmap
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Marketing Made Simple (Part 1):</span>
                    </li>
                    <li className="flex items-start gap-2 pl-6">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>How to Attract High-Paying Clients</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-yellow-500 font-bold text-lg mb-3">
                    AFTERNOON
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>
                        Marketing Made Simple (Part 2): Continuation on
                        High-Paying Clients
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>
                        The Power of a Consultation Call in Tax Advisory
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>How Onboarding Calls Help Build Trust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Delivering Tax Assessments Effectively</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-gray-600 to-gray-700 text-white font-bold px-6 py-3 rounded-lg text-xl border border-gray-500">
                  DAY 2
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-yellow-500 font-bold text-lg mb-3">
                    MORNING
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>
                        Making Tax Planning Easy with the Tax Maverick Software
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Building Your Program-Based Tax Business</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-yellow-500 font-bold text-lg mb-3">
                    AFTERNOON
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>
                        Scaling your Tax Advisory Business to 6 Figures
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Metrics That Determine Success</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>
                        Real Estate Tax Strategies For You and Your Clients
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>
                        Fulfillment: How to Master Tax Strategy Implementation
                        After Getting Paid
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-block">
                <svg className="h-16 mx-auto" viewBox="0 0 200 60" fill="none">
                  <text x="10" y="35" className="text-3xl font-bold fill-white">
                    TAX
                  </text>
                  <text x="10" y="55" className="text-lg fill-white">
                    MAVERICK
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Free Registration Banner */}
        <div className="container mx-auto px-4 py-8">
          <div className="border-4 border-yellow-500 rounded-lg p-8 text-center bg-black">
            <h2 className="text-2xl font-bold mb-4">
              Join The $100K/Month Tax Advisor Workshop
              <br />
              <span className="text-yellow-500">
                FOR A ONE-TIME CHANCE OF GETTING IT FOR FREE!
              </span>
            </h2>
            <p className="text-xl mb-4">DECEMBER 16-17, 2025 9AM-3PM CST</p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform"
            >
              🎯 REGISTER FOR FREE WORKSHOP
            </button>
          </div>
        </div>

        {/* Meet Your Speakers */}
        <div className="container mx-auto px-4 py-16">
          <div className="border-2 border-white rounded-full py-3 px-8 text-center inline-block mx-auto mb-12 block w-fit">
            <h2 className="text-2xl font-bold">MEET YOUR SPEAKERS</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {speakers.map((speaker, i) => (
              <div key={i} className="text-center">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-64 h-64 rounded-full mx-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 text-black p-8 rounded-lg max-w-md mx-auto text-center">
            <p className="text-sm mb-2">
              Join The $100K/Month Tax Advisor Workshop
            </p>
            <h2 className="text-4xl font-bold mb-2">
              TODAY'S PRICE: <span className="text-red-600">100% FREE</span>
            </h2>
            <p className="text-xs mb-6">
              (Normally $2,997 If You Were To Miss Today)
            </p>
            <p className="text-sm font-bold mb-4">
              DECEMBER 16-17, 2025 9AM - 3PM CST
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 px-6 rounded-full w-full hover:scale-105 transition-transform"
            >
              🎯 REGISTER FOR FREE WORKSHOP
            </button>
          </div>
        </div>

        {/* Don't Wait Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-sm mb-2">
            If you're ready to transform your Tax firm to a Firm of the
            Future...
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            DON'T WAIT! SECURE YOUR SPOT IN THE
          </h2>
          <p className="text-yellow-500 text-2xl md:text-3xl font-bold mb-8">
            THE $100K/MONTH TAX ADVISOR WORKSHOP
          </p>
          <p className="text-xl mb-8">DECEMBER 16-17, 2025 9AM-3PM CST</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform mb-12"
          >
            🎯 REGISTER FOR FREE WORKSHOP
          </button>

          <div className="max-w-4xl mx-auto mb-12">
            <img
              src="/secure.webp"
              alt="Workshop Preview"
              className="rounded-lg mx-auto"
            />
          </div>

          {/* What, When, Why */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div>
              <h3 className="text-yellow-500 text-xl font-bold mb-2">WHAT:</h3>
              <p className="text-lg font-bold ">
                THE $100K/MONTH TAX ADVISOR WORKSHOP
              </p>
            </div>
            <div>
              <h3 className="text-yellow-500 text-xl font-bold mb-2">WHEN:</h3>
              <p className="text-lg font-bold">
                DECEMBER 16TH-17TH
                <br />
                9AM - 3PM CST
              </p>
            </div>
            <div>
              <h3 className="text-yellow-500 text-xl font-bold mb-2">WHY:</h3>
              <p className="text-sm">
                Because you deserve to scale, thrive, and collect more value for
                your remarkable expertise without breaking your back.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">DON'T SIT THIS ONE OUT!</h2>
          <p className="text-xl mb-8">
            JOIN THE $100K/MONTH TAX ADVISOR WORKSHOP TODAY FOR FREE
          </p>
          <p className="mb-4">DECEMBER 16-17, 2025 9AM-3PM CST</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform"
          >
            🎯 REGISTER FOR FREE WORKSHOP
          </button>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-4 px-6 rounded-t-lg text-center">
            <h2 className="text-2xl font-bold">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="bg-white text-black rounded-b-lg overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium">{faq}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-gray-600">
                    This is the answer to the question. Details will be provided
                    here.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA with Countdown */}
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center gap-4 mb-8">
            <div className="text-center">
              <div className="bg-white text-black rounded-lg px-4 py-2 text-3xl font-bold">
                {timeLeft.days}
              </div>
              <div className="text-xs mt-1">DAYS</div>
            </div>
            <div className="text-center">
              <div className="bg-white text-black rounded-lg px-4 py-2 text-3xl font-bold">
                {timeLeft.hours}
              </div>
              <div className="text-xs mt-1">HRS</div>
            </div>
            <div className="text-center">
              <div className="bg-white text-black rounded-lg px-4 py-2 text-3xl font-bold">
                {timeLeft.minutes}
              </div>
              <div className="text-xs mt-1">MIN</div>
            </div>
            <div className="text-center">
              <div className="bg-white text-black rounded-lg px-4 py-2 text-3xl font-bold">
                {timeLeft.seconds}
              </div>
              <div className="text-xs mt-1">SEC</div>
            </div>
          </div>

          <p className="text-xl mb-8">DECEMBER 16-17, 2025 9AM-3PM CST</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform"
          >
            🎯 REGISTER FOR FREE WORKSHOP
          </button>
        </div>

        {/* Registration Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500 rounded-lg max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-yellow-500 hover:text-yellow-400 text-3xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-white mb-2">
                The $100k/Month Tax Advisor Workshop
              </h2>
              <p className="text-yellow-500 mb-6 font-semibold">
                DECEMBER 16-17, 2025 9AM-5PM CST
              </p>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowModal(false);
                  setShowWorkbook(true);
                }}
              >
                <div>
                  <label className="block text-white font-medium mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-2 border-gray-700 bg-gray-800 rounded px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border-2 border-gray-700 bg-gray-800 rounded px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-1">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border-2 border-gray-700 bg-gray-800 rounded px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 rounded-full hover:scale-105 transition-transform"
                >
                  🎯 REGISTER NOW
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-gray-800 py-8 px-4">
          <div className="container mx-auto text-center text-xl text-gray-200">
            <p className="mb-4">
              © 2025 By TAXMAVERICK. tax Advisor Workshop. All rights reserved.
            </p>
            <p className="mb-4">
              This site is not a part of the Facebook website or Facebook, Inc.
              Additionally, this site is NOT endorsed by Facebook in any way.
              FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
            <p>
              DISCLAIMER: Your level of success in attaining the results you
              desire depends on many factors, including (but not limited to) the
              time you devote to the strategies discussed, your background,
              experience, and work ethic. The average person who follows any
              "how to" information gets little to no results. All business
              entails risk and requires substantial and consistent effort. If
              you're not willing to accept that, this training is not for you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
