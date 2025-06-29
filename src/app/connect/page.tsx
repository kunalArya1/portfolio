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
import { HiChevronRight } from "react-icons/hi";

export default function Connect() {
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "kunalkrraj@gmail.com"; // Replace with your actual email

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-10 px-4 md:px-8 lg:px-20 text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text">
            Let's Connect
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a question
            or just want to say hello, I'll try my best to get back to you!
          </p>
        </div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-3">
          {/* Social Links Section - Left Side (Smaller) */}
          <div className="lg:col-span-1 bg-[#111111] border border-gray-800 rounded-xl p-8 hover:border-purple-500/30 transition-all">
            <h2 className="mb-6 text-2xl font-semibold">Social Profiles</h2>
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
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20">
                  <FaEnvelope className="text-2xl text-purple-400" />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-400 font-jetbrains break-all">
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

          {/* Send Message Section - Right Side (Larger) */}
          <div className="lg:col-span-2 bg-[#111111] border border-gray-800 rounded-xl p-8 hover:border-purple-500/30 transition-all">
            <h2 className="mb-6 text-2xl font-semibold">Send Me a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-400">
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
                  <label htmlFor="email" className="block mb-2 text-gray-400">
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
                <label htmlFor="subject" className="block mb-2 text-gray-400">
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
                <label htmlFor="message" className="block mb-2 text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 font-medium text-white transition-colors rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Social Link Component Interface
interface SocialLinkProps {
  icon: React.ReactNode;
  platform: string;
  username: string;
  url: string;
}

// Social Link Component
function SocialLink({ icon, platform, username, url }: SocialLinkProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg hover:bg-gray-800/40 transition-colors"
    >
      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-purple-400 rounded-full bg-purple-500/20">
        {icon}
      </div>
      <div className="flex-grow">
        <p className="font-medium">{platform}</p>
        <p className="text-sm text-gray-400 font-jetbrains">@{username}</p>
      </div>
      <div className="flex-shrink-0">
        <HiChevronRight className="text-xl text-gray-500" />
      </div>
    </Link>
  );
}
