// src/components/VideoDesc.jsx
import React from "react";

function VideoDesc({ video }) {
  if (!video) return null;

  const { snippet, statistics } = video;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div
      className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <img
        src={thumbnails?.high?.url}
        alt={title}
        className="w-full aspect-video object-cover"
      />
      <div className="p-3">
        <h3 className="text-md font-semibold line-clamp-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {channelTitle}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          {parseInt(viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  );
}

export default VideoDesc;
