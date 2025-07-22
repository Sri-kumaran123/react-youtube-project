// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../store/postslice";
import VideoDesc from "../components/VideoDesc";

function Home() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.post.videos);

  useEffect(() => {
    dispatch(fetchVideos({ query: "" }));
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        YouTube Clone - Video Feed
      </h1>
      {videos && videos.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {videos.map((video) => (
            <VideoDesc key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">Loading videos...</p>
      )}
    </div>
  );
}

export default Home;
