import React, { useState } from "react";
import Card from "./UI/Card";
const Images = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Photo uploaded successfully:", data.url);
      } else {
        console.error("Error uploading photo:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  return (
    <Card>
      <div className="flex flex-col ">
        <input type="file" accept="image/*" onChange={handleFileChange} className="bg-5" />
        <button onClick={handleUpload} className="bg-accent rounded-md w-1/2 self-center">Upload Photo</button>
      </div>
    </Card>
  );
};
export default Images;
