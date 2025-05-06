import React, { useState } from "react";
import "../../UserAuthentication/SignupPage/Signuppage.css";
import youtube from "./youtube.json";
import { Link } from "react-router-dom";

export default function CoursePage() {
  const API_KEY = "AIzaSyBpumRLsw0u6-sVoTiNEmPWlDMpe5LbYuA";
  const [searchQuery, setSearchQuery] = useState("");
  const [videoData, setVideoData] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery) return;

    // Sample testing data from youtube.json
    // setVideoData(youtube.items);

    // Actual Code for fetching youtube data
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${API_KEY}&type=video`
      );
      const data = await response.json();
      setVideoData(data.items);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <p>Apple</p>
      <input
        type="text"
        placeholder="Search for Courses"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Submit</button>

      {videoData.map((video, index) => (
        <div>
          <Link to={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
            <p key={index}>Video Title: {video.snippet.title}</p>
          </Link>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt="Video thumbnail"
          ></img>
        </div>
      ))}
    </div>
  );
}
