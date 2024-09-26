import { useEffect } from "react";

export const SubstackFeed = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;

    // Configure the Substack Feed Widget
    window.SubstackFeedWidget = {
      substackUrl: "junaidadams.substack.com", // Replace with your Substack URL
      posts: 3, // Number of posts to display
      colors: {
        primary: "#ea580c", // Customize colors
        secondary: "#222222",
        background: "#f5f5f5 ",
      },
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-4 bg-[#333333] rounded shadow-xl">
      <div className="p-1 bg-orange-600 rounded-md shadow-xl">
        <div id="substack-feed-embed" className=""></div>
      </div>
    </div>
  );
};
