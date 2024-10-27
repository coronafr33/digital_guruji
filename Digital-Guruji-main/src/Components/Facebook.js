import React from "react";

const Facebook = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-zinc-200"> {/* Change to flex-col for vertical stacking */}
      {/* Heading Section */}
      <h1 className="bungee-spice-regular font-bold text-5xl mb-4"> {/* Add margin-bottom for spacing */}
        Social Media & Helpline
      </h1>

      {/* Iframe Section */}
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheStressManagementSociety%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="500"
        style={{
          border: "none",
          overflow: "hidden",
          borderRadius: "10px", // Adjust radius as needed
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow effect
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>

      {/* Feedback Button Section */}
      <div className="mt-4"> {/* Add margin-top for spacing */}
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdsWyyLVjDo8sfjgPNdUnWyHItopYl1167ccWKSJJCyiNWfVg/viewform?embedded=true" // Replace with your feedback URL
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Feedback
          </button>
        </a>
      </div>
    </div>
  );
};

export default Facebook;
