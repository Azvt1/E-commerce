import React, { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    document.title = "Home Page"; // Set the title when the component mounts
    return () => {
      // Optionally reset the title when the component unmounts
      document.title = "Original Title"; // Replace "Original Title" with your desired original title
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      {/* Add your other homepage content here */}
    </div>
  );
}
