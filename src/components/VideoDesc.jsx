// VideoDesc.jsx
import React from "react";

function VideoDesc({ video }) {
  if (!video) return null;

  const { snippet, statistics } = video;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics || {};

  return (
    <div
      className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md 
                 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
                 transition-transform transition-shadow duration-300 cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden">
        <img
          src={thumbnails?.medium?.url || thumbnails?.high?.url}
          alt={title}
          className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="p-2 sm:p-3">
        <h3 className="text-sm sm:text-md font-semibold line-clamp-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
          {channelTitle}
        </p>
        {viewCount && (
          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
            {parseInt(viewCount).toLocaleString()} views
          </p>
        )}
      </div>
    </div>
  );
}

export default VideoDesc;
