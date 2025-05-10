import React from "react";

// type Link = {
//   text: string;
//   url: string;
// };

// interface LinkTreeProps {
//   links: Link[];
// }

const linkss = [
  { text: "GitHub", url: "https://github.com/your-username" },
  { text: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
  { text: "Personal Website", url: "https://yourwebsite.com" },
  { text: "Blog", url: "https://yourblog.com" },
];

const LinkTree = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-4xl text-white text-center mb-6">My LinkTree</h2>
        <div className="flex flex-col space-y-4">
          {linkss.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-gray-100 py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkTree;
