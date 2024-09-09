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
      posts: 1, // Number of posts to display
      colors: {
        primary: "#404040", // Customize colors
        secondary: "#808080",
        background: "#FFFFFF",
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
    <div>
      <h1>Substack Feed</h1>
      <div id="substack-feed-embed"></div>
    </div>
  );
};
