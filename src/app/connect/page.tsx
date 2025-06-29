"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { HiChevronRight } from "react-icons/hi";

export default function Connect() {
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "kunal.arya.work@gmail.com"; // Replace with your actual email

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-10 px-4 md:px-8 lg:px-20 text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a question
            or just want to say hello, I'll try my best to get back to you!
          </p>
        </div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Social Links Section */}
          <div className="bg-[#111111] border border-gray-800 rounded-xl p-8 hover:border-purple-500/30 transition-all">
            <h2 className="text-2xl font-semibold mb-6">Social Profiles</h2>
            <div className="grid grid-cols-1 gap-4">
              <SocialLink
                icon={<FaGithub className="text-2xl" />}
                platform="GitHub"
                username="kunalArya1"
                url="https://github.com/kunalArya1"
              />
              <SocialLink
                icon={<FaLinkedinIn className="text-2xl" />}
                platform="LinkedIn"
                username="kunalarya"
                url="https://linkedin.com/in/kunalarya"
              />
              <SocialLink
                icon={<FaTwitter className="text-2xl" />}
                platform="Twitter"
                username="kunalarya"
                url="https://twitter.com/kunalarya"
              />
              <SocialLink
                icon={<FaInstagram className="text-2xl" />}
                platform="Instagram"
                username="kunalarya"
                url="https://instagram.com/kunalarya"
              />
              <div
                className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg hover:bg-gray-800/40 transition-colors cursor-pointer"
                onClick={copyEmail}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-2xl text-purple-400" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400 text-sm font-jetbrains">
                    {email}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span
                    className={`px-3 py-1 text-xs rounded-full transition-all ${
                      emailCopied
                        ? "bg-green-600/30 text-green-400"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {emailCopied ? "Copied!" : "Copy"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Topmate Section */}
          <div className="bg-[#111111] border border-gray-800 rounded-xl p-8 hover:border-amber-500/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <MdSchedule className="text-3xl text-amber-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">
                  Book a Session on Topmate
                </h2>
                <p className="text-gray-400">
                  Schedule a mentoring or consultation session
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">1:1 Quick Chat</h3>
                  <span className="text-amber-400 font-semibold">₹499</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  15-minute session to quickly discuss a specific topic or
                  question
                </p>
                <Link
                  href="https://topmate.io/kunalarya/15min"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-amber-500 text-black rounded-lg py-2.5 px-4 font-medium hover:bg-amber-600 transition-colors"
                >
                  Book Now <HiChevronRight />
                </Link>
              </div>

              <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Career Guidance</h3>
                  <span className="text-amber-400 font-semibold">₹999</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  30-minute session for career advice, portfolio review, or job
                  search tips
                </p>
                <Link
                  href="https://topmate.io/kunalarya/30min"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-amber-500 text-black rounded-lg py-2.5 px-4 font-medium hover:bg-amber-600 transition-colors"
                >
                  Book Now <HiChevronRight />
                </Link>
              </div>

              <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Project Consultation</h3>
                  <span className="text-amber-400 font-semibold">₹1999</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  60-minute deep dive session to discuss your project or
                  technical challenges
                </p>
                <Link
                  href="https://topmate.io/kunalarya/60min"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-amber-500 text-black rounded-lg py-2.5 px-4 font-medium hover:bg-amber-600 transition-colors"
                >
                  Book Now <HiChevronRight />
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-800">
              <Link
                href="https://topmate.io/kunalarya"
                target="_blank"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-lg py-3 px-4 font-medium hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                View Full Profile on Topmate <HiChevronRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-[#111111] border border-gray-800 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Social Link Component
function SocialLink({ icon, platform, username, url }) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg hover:bg-gray-800/40 transition-colors"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
        {icon}
      </div>
      <div className="flex-grow">
        <p className="font-medium">{platform}</p>
        <p className="text-gray-400 text-sm font-jetbrains">@{username}</p>
      </div>
      <div className="flex-shrink-0">
        <HiChevronRight className="text-gray-500 text-xl" />
      </div>
    </Link>
  );
}
