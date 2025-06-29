"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call - replace with actual newsletter subscription logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold tracking-wide text-purple-400 uppercase">
            Stay Connected
          </p>
          <div className="text-sm font-semibold text-gray-400">
            Join 1,000+ Developers
          </div>
        </div>

        {/* Newsletter Content */}
        <div className="pt-8 border-t border-gray-700">
          <div className="relative overflow-hidden bg-gradient-to-br from-black-900 via-black-900 to-black-900 rounded-2xl">
            {/* Background decoration */}
            <div className="absolute inset-0 border bg-gradient-to-r from-black-200/10 via-transparent to-black-200/10 "></div>
            <div className="absolute w-32 h-32 rounded-full top-4 right-4 bg-purple-500/20 blur-3xl"></div>
            <div className="absolute w-24 h-24 rounded-full bottom-4 left-4 bg-blue-500/20 blur-2xl"></div>

            <div className="relative px-8 py-12 md:px-12">
              <div className="max-w-2xl mx-auto text-center">
                {!isSubscribed ? (
                  <>
                    {/* Title and Description */}
                    <div className="mb-8">
                      <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                        Subscribe to My Newsletter
                      </h2>
                      <p className="text-base text-gray-300 md:text-lg">
                        Get the latest blog posts, project updates, and
                        development insights delivered directly to your inbox.
                        <br className="hidden sm:block" />
                        <span className="font-medium text-purple-400">
                          Pure inspiration, zero spam.
                        </span>
                      </p>
                    </div>

                    {/* Subscription Form */}
                    <form onSubmit={handleSubmit} className="mb-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                        <div className="relative flex-1 max-w-md">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full px-6 py-4 text-white placeholder-gray-400 transition-all duration-200 border border-gray-600 bg-gray-800/50 rounded-xl backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-gray-800/70"
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting || !email}
                          className="px-8 py-4 font-semibold text-white transition-all duration-200 transform bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="w-5 h-5 mr-2 border-2 border-white border-solid rounded-full animate-spin border-t-transparent"></div>
                              Subscribing...
                            </div>
                          ) : (
                            <div className="flex items-center">
                              Subscribe
                              <svg
                                className="w-5 h-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                              </svg>
                            </div>
                          )}
                        </button>
                      </div>
                    </form>

                    {/* Terms and Privacy */}
                    <p className="text-xs text-gray-400">
                      By subscribing, you agree to our{" "}
                      <button className="font-medium text-white transition-colors hover:text-purple-400">
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button className="font-medium text-white transition-colors hover:text-purple-400">
                        Privacy Policy
                      </button>
                    </p>
                  </>
                ) : (
                  /* Success State */
                  <div className="py-8">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20">
                        <svg
                          className="w-8 h-8 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      Successfully Subscribed!
                    </h3>
                    <p className="text-gray-300">
                      Thank you for subscribing! You'll receive the latest
                      updates and insights directly in your inbox.
                    </p>
                    <button
                      onClick={() => setIsSubscribed(false)}
                      className="mt-4 text-sm text-purple-400 transition-colors hover:text-purple-300"
                    >
                      Subscribe another email
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
