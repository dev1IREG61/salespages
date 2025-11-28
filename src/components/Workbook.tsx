import React, { useState } from "react";
import { Lock } from "lucide-react";

const styles = `
  .geometric-bg {
    background-color: #000000;
    background-image: 
      linear-gradient(30deg, #0a0a0a 12%, transparent 12.5%, transparent 87%, #0a0a0a 87.5%, #0a0a0a),
      linear-gradient(150deg, #0a0a0a 12%, transparent 12.5%, transparent 87%, #0a0a0a 87.5%, #0a0a0a),
      linear-gradient(30deg, #0a0a0a 12%, transparent 12.5%, transparent 87%, #0a0a0a 87.5%, #0a0a0a),
      linear-gradient(150deg, #0a0a0a 12%, transparent 12.5%, transparent 87%, #0a0a0a 87.5%, #0a0a0a);
    background-size: 80px 140px;
    background-position: 0 0, 0 0, 40px 70px, 40px 70px;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .blink-arrow {
    animation: blink 1s infinite;
  }
`;

export default function WorkbookOfferPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "United States",
    state: "",
    subscribe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Order placed successfully!");
  };

  return (
    <>
      <style>{styles}</style>
      <div className="bg-black text-white fixed inset-0 w-screen h-screen overflow-y-auto">
        {/* Top Yellow Banner */}
        <div className="bg-yellow-500 text-black text-center py-2 px-4 font-bold text-xl">
          <u>YOUR SPOT IS SECURED!</u> BUT WAIT... CLAIM YOUR WORKBOOK & REPLAY!
        </div>

        {/* Hero Section */}
        <div className="geometric-bg py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  GET YOUR WORKSHOP
                  <br />
                  <span className="text-yellow-500">WORKBOOK & REPLAY</span>
                  <br />
                  <span className="text-white">NOW FOR ONLY $17</span>
                </h1>
                <p className="text-yellow-500 font-bold mb-6">
                  (Normally $25-$197)
                </p>

                <p className="text-gray-300 text-sm mb-6">
                  You're in! Your spot is reserved for the workshop. But your
                  path from tax preparer to $100K/month tax advisor doesn't have
                  to wait until December 16th. You can start RIGHT NOW with the
                  exclusive workshop workbook and instant replay access.
                </p>

                <p className="text-gray-300 text-sm mb-6">
                  Don't just take notes during the live event - get the complete
                  implementation blueprint that's already transformed hundreds
                  of tax professionals into six-figure advisors.
                </p>

                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform">
                  🎯 CLAIM YOUR COPY - JUST $17!
                </button>

                <p className="text-xs text-gray-400 mt-4">
                  This one-time offer is only available on this page. Don't miss
                  out!
                </p>
              </div>

              <div className="relative">
                <iframe
                  className="w-full aspect-video rounded-lg border-4 border-yellow-500"
                  src="https://www.youtube.com/embed/_wux3uZotVg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="geometric-bg py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="border-2 border-white rounded-lg p-1 mb-8">
              <div className="bg-black p-6 rounded">
                <h2 className="text-2xl font-bold text-center mb-8">
                  WHAT'S INCLUDED IN YOUR GOLD VIP ACCESS:
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-yellow-500 font-bold text-xl mb-6">
                      WHAT YOU GET
                    </h3>

                    <div className="space-y-6">
                      <div className="border-b border-gray-700 pb-4">
                        <p className="text-white font-bold mb-2">
                          Full 2-Day Workbook w/ Recording (Value: $197 + Tax)
                        </p>
                      </div>

                      <div className="border-b border-gray-700 pb-4">
                        <p className="text-white font-bold mb-2">
                          EBook Tax Advisory Workbook (Value: $197)
                        </p>
                      </div>

                      <div className="pb-4">
                        <p className="text-white font-bold mb-2">
                          Virtual Roadmap - Build MY Funnel
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-yellow-500 font-bold text-xl mb-6">
                      WHY IT MATTERS
                    </h3>

                    <div className="space-y-6 text-gray-300 text-sm">
                      <div className="border-b border-gray-700 pb-4">
                        <p>
                          Lifetime access every valuable session, and precisely
                          address you down during the training, real-time, and
                          understand Step by Step at your own pace.
                        </p>
                      </div>

                      <div className="border-b border-gray-700 pb-4">
                        <p>
                          This isn't just a workbook. It's your step-by-step
                          implementation blueprint built to help you take real
                          action, win high-value clients, and structures where
                          that wins.
                        </p>
                      </div>

                      <div className="pb-4">
                        <p>
                          Your Done VIP Upload Blueprint in more than a visual
                          upgrade. It's your proof of authority. You can present
                          the system with clients, improve your professional
                          brand, and establish client confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform">
                UPGRADE NOW & GET INSTANT ACCESS FOR $17
              </button>
              <p className="text-xs text-gray-400 mt-3">(Normally $25-$197)</p>
            </div>
          </div>
        </div>

        {/* Product Image Section */}
        <div className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-4xl border border-gray-300 rounded-lg p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <img src="/workbook.webp" />
            </div>

            <div className="bg-yellow-500 text-black text-center py-4 px-6 rounded-lg font-bold mb-6">
              This isn't another bonus – it's the $17 shortcut to transforming
              your firm from transactional to transformational.
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform">
                🎯 Claim Your Gold VIP Access Now
              </button>
              <p className="text-gray-600 text-xs mt-3">
                Or return later and miss the best deal available
              </p>
            </div>
          </div>
        </div>

        {/* Workbook Value Section */}
        <div className="geometric-bg py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-yellow-500">
                $100K TAX ADVISORY WORKBOOK
              </span>{" "}
              <span className="text-white">($197 VALUE)</span>
            </h2>
            <p className="text-xl mb-8">
              This workbook is your implementation engine. Inside, you'll be
              guided to:
            </p>

            <div className="text-left max-w-2xl mx-auto space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p className="text-gray-300">
                  Build your first (or next) $9K–$25K offer
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p className="text-gray-300">
                  Access the C.A.R.E. Formula for closing high-ticket clients
                  (this alone is worth the upgrade)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p className="text-gray-300">
                  Use checklists, scripts, and prompts that elevate conversion
                  and boost compliance
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p className="text-gray-300">
                  Create your own "favorite client" dashboard and scaling
                  project
                </p>
              </div>
            </div>

            <p className="text-2xl font-bold text-yellow-500 mb-6">
              It's not just about learning. It's about launching.
            </p>

            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform">
              🎯 CLAIM YOUR COPY - JUST $17!
            </button>
            <p className="text-xs text-gray-400 mt-3">(Normally $25-$197)</p>
          </div>
        </div>

        {/* Don't Sit This Out Section */}
        <div className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              DONT SIT THIS ONE OUT!
            </h2>

            <div className="bg-black text-white p-6 rounded-lg mb-6">
              <p className="font-bold mb-4">
                You didn't show up just to learn, you showed up to win.
              </p>
              <p className="text-sm text-gray-300">
                Put yourself on the fast track to success with the best
                strategies you've ever been introduced to and forget to-do
                lists. Gold VIP gives you the steps, structure, and clarity to
                go implement what works best.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="text-black font-bold mb-2">
                This offer will not be available after this page. If you leave
                now, you may lose this opportunity for good.
              </p>
            </div>

            <button className="bg-black text-yellow-500 font-bold py-3 px-8 rounded mb-4 hover:scale-105 transition-transform block w-full max-w-md mx-auto">
              UPGRADE NOW & GET INSTANT ACCESS FOR $17
            </button>

            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform block w-full max-w-md mx-auto">
              🎯 Claim Your Gold VIP Access for $17
            </button>
            <p className="text-gray-600 text-xs mt-3">
              Or return later and miss the best deal available
            </p>
          </div>
        </div>

        {/* Secure Order Form */}
        <div className="geometric-bg py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white text-black rounded-lg p-8 shadow-2xl border-8 border-dashed border-gray-300">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Lock className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold">Secure Order Form</h2>
              </div>

              <h3 className="text-center text-xl mb-6 italic">
                Yes! I want my 100k Workbook & Replay (Offers Access):
              </h3>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:border-yellow-500 focus:outline-none"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:border-yellow-500 focus:outline-none"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:border-yellow-500 focus:outline-none"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:border-yellow-500 focus:outline-none"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Country
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:border-yellow-500 focus:outline-none"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:border-yellow-500 focus:outline-none"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-400 rounded p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 text-xl blink-arrow mt-0">
                      ➤
                    </span>
                    <input
                      type="checkbox"
                      className="mt-2"
                      checked={formData.subscribe}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subscribe: e.target.checked,
                        })
                      }
                    />
                    <label className="text-sm">
                      <strong>YES!</strong> Get both books by David A. Perez for
                      $17 Build Your Own Economy & Get Paid First Book Bundle
                    </label>
                  </div>
                  <ul className="ml-6 mt-2 text-xs space-y-1">
                    <li>• First name access</li>
                    <li>
                      • Get on the list for early access to upcoming products
                      that will save you time, money and effort!
                    </li>
                    <li>
                      • Get INSTANT access to my free "AI-Powered Tax Advisor
                      Newsletter that's 100% free right now!
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Item</span>
                    <div className="flex gap-8">
                      <span className="font-medium">Quantity</span>
                      <span className="font-medium">Amount</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                    <span className="text-sm">
                      100K Tax Advisor Workshop - 2 Days Recording
                    </span>
                    <div className="flex gap-8">
                      <span>1</span>
                      <span className="font-bold">$17.00</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3 text-lg font-bold">
                    <span>Order Total:</span>
                    <span>$17.00</span>
                  </div>
                </div>

                {/* Payment Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      alert("PayPal payment selected");
                    }}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded flex items-center justify-center gap-2"
                  >
                    <span>PayPal</span>
                  </button>

                  <div className="text-center text-gray-500 text-sm">OR</div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded"
                  >
                    💳 PAY $17.00
                  </button>
                </div>

                <div className="text-center text-xs text-gray-500 mt-4">
                  <p>🔒 SECURE CHECKOUT via Stripe</p>
                  <div className="flex justify-center gap-2 mt-2">
                    {["VISA", "MC", "AMEX", "DISC"].map((card) => (
                      <span
                        key={card}
                        className="border px-2 py-1 rounded text-xs"
                      >
                        {card}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 rounded-full hover:scale-105 transition-transform mt-6"
                >
                  🎯 GET $17 WORKBOOK & REPLAY
                </button>
              </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
              Or return later and miss the best deal available
            </p>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="bg-black border-t border-gray-800 py-8 px-4">
          <div className="container mx-auto max-w-4xl text-center text-lg text-white space-y-4">
            <p>
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
