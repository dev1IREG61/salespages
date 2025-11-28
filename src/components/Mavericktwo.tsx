import { useState } from "react";
import { Play, ChevronDown, ChevronUp } from "lucide-react";

const styles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export default function MavricktwoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    "What if I've never offered tax advisory services before?",
    "Do I need to know advanced tax strategies to benefit from this event?",
    "How can I attract high-paying clients when I'm already struggling to get credits now?",
    "Will this work if I'm a solo practitioner with no team?",
    "What if I'm already too late with my current workload?",
    "Is this event really free?",
    "Will I have to invest in expensive software or tools after the event?",
    "What if I'm not confident in selling high-ticket services?",
    "How much time (realistically) can I see with my advisory service?",
    "What if I have questions or need help after the event?",
  ];

  const testimonials = [
    {
      name: "MAR",
      rating: 5,
      text: "Thank you for EVERYTHING!!",
      date: "10 months ago",
      action: "ENROLLED in Solvency by Calculation",
    },
    {
      name: "T",
      rating: 5,
      text: "First day $27,500.00",
      date: "11 months ago",
    },
    {
      name: "MAR",
      rating: 5,
      text: "5 day an assessment today - $15000",
      subtext: "up in west Knoxville and Nashville, and we put almost 20k",
      date: "about a month",
    },
    {
      name: "M",
      rating: 5,
      text: "I always wanted to figure for as a tax advisor. I never imagined myself. Thank...",
      date: "about 30k",
    },
    {
      name: "LO",
      rating: 5,
      text: "That was quite fun! Everyone -lot",
      date: "StraightForward",
    },
    {
      name: "T",
      rating: 5,
      text: "I see $27",
      subtext:
        "Client Appraisal for Enterprise - Thanks! Got the start i was looking...",
    },
    {
      name: "G",
      rating: 5,
      text: "Handwriting HamMan to Everyone - I can 8",
      subtext: "Thank you and your whole team Claude!",
    },
    {
      name: "M",
      rating: 5,
      text: "Ava 195k over to Everyone - 2 year",
      subtext: "- it in Solvency Enterprise",
      date: "Wow life changing!",
    },
    {
      name: "...",
      rating: 5,
      text: "Great information with IMPLEMENTATION & results!",
      date: "approx of - 9 yrs now",
    },
    {
      name: "MAR",
      rating: 5,
      text: "Can't be high data these days us about these value stuff lol",
      date: "a little",
    },
  ];

  return (
    <>
      <style>{styles}</style>
      <div
        className="bg-gray-900 text-white fixed inset-0 w-screen h-screen overflow-y-auto"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 40px, #0a0a0a 40px, #0a0a0a 80px), repeating-linear-gradient(-45deg, #1a1a1a 0px, #1a1a1a 40px, #0a0a0a 40px, #0a0a0a 80px)",
        }}
      >
        {/* Top Bar */}
        <div className="bg-red-600 text-center py-2 text-xl font-semibold">
          For Business Owners - Call 919-336-1512
        </div>

        {/* Header */}
        <div className="bg-blue-800 text-center py-3 text-xl">
          FREE TRAINING FOR TAX BUSINESS OWNERS, CPAS, EAS & CPAS
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            CPAS, EAS: YOUR CLIENTS WANT TAX SAVING RIGHT NOW
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
            LEARN HOW TO CHARGE $5K+ PER ENGAGEMENT WITHOUT ADDING MORE CLIENTS
            OR STRESS.
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Tired of being burned-out, Stuck? Discover how to Land Firm
            Referrals you already one doing for Free and Turn Them into
            High-Paying Advisory Services
          </p>

          <div className="mb-8">
            <p className="text-xl font-bold mb-4">
              Join the LIVE Training [Friday, November 16 @ 12 PM PST | 2 PM CST
              | 3 PM EST]
            </p>
            <p className="text-lg mb-6">FREE training starts in...</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Register Now – Limited Seats
            </button>
          </div>

          {/* Agenda Box */}
          <div className="bg-gray-800 border-2 border-green-500 rounded-lg p-6 mb-8 text-left max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">
              HERE'S THE AGENDA
            </h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">
                  How to Get Clients to Your High-Ticket Tax Advisory Offers
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">
                  The Tax Advisory Offer That Sell – Your Framework for Solvency
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">
                  How to Charge $5,000-$25,000 (per Tax Advisory Client)
                </span>
              </div>
            </div>
          </div>

          {/* Featured On Section */}
          <div className="py-12 border-y border-gray-800 overflow-hidden">
            <p className="text-center text-gray-400 mb-6">FEATURED ON</p>
            <div className="flex items-center gap-12 px-4 animate-scroll">
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

          {/* What You Can Expect Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">
              What You Can Expect From The Training?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before Column */}
              <div className="bg-white text-gray-900 rounded-lg p-6 text-left">
                <h3 className="text-2xl font-bold mb-6 text-red-600">
                  Before The Event
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">○</span>
                    <div>
                      <p className="font-bold">Overwhelmed and Underpaid</p>
                      <p className="text-sm">
                        Caught pumping between low-cost, time-intense work
                        (preparing tax returns and bookkeeping)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">○</span>
                    <div>
                      <p className="font-bold">No Clear Path to Growth</p>
                      <p className="text-sm">
                        feeling stuck trying to grow your income without
                        drastically increasing your workload or hiring more
                        employees
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">○</span>
                    <div>
                      <p className="font-bold">Struggling to More Clients</p>
                      <p className="text-sm">
                        facing difficulties to find clients willing to pay or
                        attracting clients who dont value their expertise at
                        higher price
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">○</span>
                    <div>
                      <p className="font-bold">Uncertainty About Scalability</p>
                      <p className="text-sm">
                        not know to how to turn firms or practices into profit
                        center or scale with high paying services
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">○</span>
                    <div>
                      <p className="font-bold">Lack of Tools and Resources</p>
                      <p className="text-sm">
                        missing the frameworks processes strategies or mindset
                        to move up one price or stay high value to generate
                        consistent, or a hard to replicate or improved revenue
                        stream
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* After Column */}
              <div className="bg-white text-gray-900 rounded-lg p-6 text-left border-2 border-green-500">
                <h3 className="text-2xl font-bold mb-6 text-green-600">
                  After Attending The Event
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <p className="font-bold">Clarity on High-Ticket Offers</p>
                      <p className="text-sm">
                        clear clarity offers you can selling the right people.
                        You understand the types tax advisory offers to
                        providing that client who are willing to pay
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <p className="font-bold">Increased Revenue Potential</p>
                      <p className="text-sm">
                        learn how to price your service properly and change
                        $5000-$25000 per tax client, without adding the stress
                        of time or overhead
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <p className="font-bold">A Proven System to Scale</p>
                      <p className="text-sm">
                        concrete on business with you can implement right away
                        the framework, training and resources to grow your
                        revenue
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <p className="font-bold">Step-by-Step Proposal Filing</p>
                      <p className="text-sm">
                        Know how to confidently present your advisory services
                        using the art of delivering the efficient and services
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <p className="font-bold">Freedom from Burnouts</p>
                      <p className="text-sm">
                        Understand to leverage advisory services to free up time
                        to instead of being stuck in work and trading time for
                        dollars
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <p className="font-bold">Confidence in Your Expertise</p>
                      <p className="text-sm">
                        realize that you're already sit on gold mine of
                        knowledge and expertise. You just don't know how to turn
                        this into right or skill while delivery service
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <p className="font-bold">Real-World Success Stories</p>
                      <p className="text-sm">
                        hear from others other CPA and tax professional were
                        also your shoes and who now growing firms making more
                        money and getting life, too
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <p className="font-bold">Immediate Action Steps</p>
                      <p className="text-sm">
                        come of the training with direct and actions steps to
                        implement immediately and start the journey towards more
                        money and predictable and sustain revenue stream
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg mt-8 transition-colors">
              Register Now – Limited Seats
            </button>
            <p className="text-sm mt-4">
              [Friday, November 16 @ 12 PM PST | 2 PM CST | 3 PM EST]
            </p>
          </div>

          {/* Testimonials Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              See what REAL PEOPLE with REAL RESULTS
              <br />
              have to say about us.
            </h2>
            <p className="mb-6">All 5 Star on Gusto</p>

            {/* Video Placeholder */}
            <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg mb-8 h-64 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Play
                    className="w-10 h-10 text-blue-600 ml-1"
                    fill="currentColor"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-bold">MCCORMACK</p>
              </div>
              <div className="absolute top-0 right-0 -rotate-12">
                <span className="bg-red-600 text-white px-8 py-2 inline-block font-bold text-2xl transform">
                  GET READY FOR THIS
                </span>
              </div>
              <p className="absolute bottom-8 right-8 text-2xl font-handwriting text-blue-300">
                Play me!
              </p>
            </div>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {testimonials.slice(0, 9).map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white text-gray-900 rounded-lg p-4"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name}
                    </div>
                    <div>
                      <div className="flex text-yellow-500">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold mb-1">
                    {testimonial.text}
                  </p>
                  {testimonial.subtext && (
                    <p className="text-xs text-gray-600 mb-2">
                      {testimonial.subtext}
                    </p>
                  )}
                  {testimonial.action && (
                    <p className="text-xs text-blue-600 mb-1">
                      {testimonial.action}
                    </p>
                  )}
                  {testimonial.date && (
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  )}
                </div>
              ))}
            </div>

            {testimonials.length > 9 && (
              <div className="mt-4 flex justify-center">
                <div className="bg-white text-gray-900 rounded-lg p-4 max-w-md">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonials[9].name}
                    </div>
                    <div>
                      <div className="flex text-yellow-500">
                        {[...Array(testimonials[9].rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">
                    {testimonials[9].text}
                  </p>
                  {testimonials[9].date && (
                    <p className="text-xs text-gray-500 mt-1">
                      {testimonials[9].date}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* FAQ Section */}
          <div className="mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked Questions (FAQ) and Answers
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-800 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-750 transition-colors"
                  >
                    <span className="flex items-center">
                      <span className="text-red-500 mr-3">❯</span>
                      <span className="text-sm">{faq}</span>
                    </span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-sm text-gray-300">
                      <p>Answer content would go here for each FAQ item.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg mb-8 transition-colors">
            Register Now – Limited Seats
          </button>
          <p className="text-sm mb-12">
            [Friday, November 16 @ 12 PM PST | 2 PM CST | 3 PM EST]
          </p>
        </div>

        {/* Footer */}
        <div className="bg-black py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
              <span className="text-red-600 font-bold text-xl">MCCORMACK</span>
            </div>
            <p className="text-xl text-white mb-4">
              2145 W. Ina Rd #224H, Oro Valley, AZ 85742 - 919.336.1512
            </p>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              This is the bottom of information, but that it may offer or tax or
              AICPA legal advice. CPAs are tax licensed and professionals.
              Circular 230 Disclosure: Nothing in this webinar is intended as
              tax advice or legal advice. All examples or strategies tax
              advisors and strategies that have implemented into IRS laws in
              accordance with Circular 230 regulations. The content provided in
              this webinar is for education purposes only. We recommend that you
              seek appropriate tax advice and legal counsel.
            </p>
            <p className="text-xl text-white max-w-4xl mx-auto mt-4 leading-relaxed">
              Earnings Disclaimer: The information contained in the webinar or
              marketing about our program is for information purposes only and
              is not intended to guarantee that you will earn specific results.
              Client results will vary from person to person and are not
              guaranteed. This document will be success and is going to be
              dependent on a lot of factors. There are no guaranteed tax savings
              like the IRS information and existing tool filing. The real
              information that a team or tax professional is representing is
              true and accurate.
            </p>
            <p className="text-xl text-white max-w-4xl mx-auto mt-4 leading-relaxed">
              Our primary mission is to provide CPAs and tax tax professionals
              with strategies, tools, resources, and education to improve their
              services and revenue is the ultimate tax compliance outcome. It is
              absolutely critical that you do the work and the required work to
              implement the strategies, and that you exercise professional
              judgment when giving financial advice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
