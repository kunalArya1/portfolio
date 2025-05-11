"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Share2,
  Check,
  Copy,
} from "lucide-react";

interface LinkItemProps {
  href: string;
  text: string;
  icon?: string;
  dropdown?: boolean;
}

// Custom TikTok icon component
const TikTokIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
      fill="currentColor"
    />
  </svg>
);

export default function LinkTree() {
  const [expandedLink, setExpandedLink] = useState<string | null>(null);
  const [showShareToast, setShowShareToast] = useState(false);
  const [shareIcon, setShareIcon] = useState<"share" | "copy" | "check">(
    "share"
  );
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleDropdown = (text: string) => {
    if (expandedLink === text) {
      setExpandedLink(null);
    } else {
      setExpandedLink(text);
    }
  };

  const handleShare = async () => {
    const currentUrl = window.location.href;
    const shareData = {
      title: "@KunalArya LinkTree",
      text: "Check out this LinkTree!",
      url: currentUrl,
    };

    try {
      // Try to use Web Share API if available
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      // Fallback to clipboard API
      await navigator.clipboard.writeText(currentUrl);
      setShareIcon("check");
      setShowShareToast(true);

      // Clear previous timeout if exists
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }

      // Hide toast after 2 seconds
      toastTimeoutRef.current = setTimeout(() => {
        setShowShareToast(false);
        setShareIcon("share");
      }, 2000);
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const links: LinkItemProps[] = [
    {
      href: "#",
      text: "GUAC ON THE ROCK",
      icon: "/icons/guac.jpg",
    },
    {
      href: "#",
      text: "SHOP PROJECT ROCK 'DAY ONE' COLLECTION",
      icon: "/icons/shop.jpg",
    },
    {
      href: "#",
      text: "XFL GAME TICKETS",
      icon: "/icons/xfl.jpg",
    },
    {
      href: "#",
      text: "IRON PARADISE TOUR PLAYLIST",
      icon: "/icons/music.jpg",
      dropdown: true,
    },
    {
      href: "#",
      text: "ZOA ENERGY",
      icon: "/icons/zoa.jpg",
    },
    {
      href: "#",
      text: "TEREMANA TEQUILA",
      icon: "/icons/tequila.jpg",
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="w-6 h-6" /> },
    { name: "TikTok", icon: <TikTokIcon /> },
    { name: "Twitter", icon: <Twitter className="w-6 h-6" /> },
    { name: "YouTube", icon: <Youtube className="w-6 h-6" /> },
    { name: "Facebook", icon: <Facebook className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen  text-white flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 relative">
          <div className="absolute top-0 right-0">
            <button
              className="bg-[#181717] hover:bg-[#232222] rounded-full p-2 transition-colors"
              onClick={handleShare}
              aria-label="Share this page"
            >
              {shareIcon === "share" && (
                <Share2 className="w-5 h-5 text-white" />
              )}
              {shareIcon === "copy" && <Copy className="w-5 h-5 text-white" />}
              {shareIcon === "check" && (
                <Check className="w-5 h-5 text-green-400" />
              )}
            </button>
          </div>

          {/* Share Toast Notification */}
          {showShareToast && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#181717]text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-sm">Link copied to clipboard!</span>
            </div>
          )}

          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white mb-4">
            <div className="w-full h-full bg-[#181717] flex items-center justify-center">
              {/* We'll use a placeholder circle for the profile image */}
              <Image
                src="/kunal.jpg"
                alt="kunal Arya"
                width={400}
                height={200}
              />
              {/* <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                <span className="text-sm text-gray-400">Profile</span>
              </div> */}
            </div>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <h1 className="text-xl font-bold">@KunalArya</h1>
            <span className="text-blue-500">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-3 w-full">
          {links.map((link, index) => (
            <div key={index} className="w-full">
              <a
                href={link.href}
                className="flex items-center bg-[#181717] hover:bg-[#282828] rounded-lg overflow-hidden transition-colors w-full"
                onClick={
                  link.dropdown
                    ? (e) => {
                        e.preventDefault();
                        toggleDropdown(link.text);
                      }
                    : undefined
                }
              >
                {link.icon && (
                  <div className="h-12 w-12 min-w-12 bg-gray-700 flex items-center justify-center">
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                      <span className="text-xs text-gray-400">Icon</span>
                    </div>
                  </div>
                )}
                <div className="flex-1 py-4 px-4 font-medium text-sm">
                  {link.text}
                </div>
                {link.dropdown && (
                  <div className="pr-4">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        expandedLink === link.text ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                )}
              </a>

              {/* Dropdown Content */}
              {link.dropdown && expandedLink === link.text && (
                <div className="bg-gray-700 rounded-b-lg mt-1 p-4">
                  <p className="text-sm">Playlist content would go here...</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
