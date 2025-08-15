// GridView.jsx
import { useSelector } from "react-redux";
import VideoDesc from "./VideoDesc";

export default function GridView() {
  const myData = useSelector((state) => state.post.videos);

  return (
    <div className="w-full h-full p-2 sm:p-4">
      <div
        className="
          grid 
          grid-cols-1       /* Default: 1 column for smallest devices */
          xs:grid-cols-2    /* ~480px: 2 columns */
          sm:grid-cols-2    /* Small screens: still 2 columns */
          md:grid-cols-3    /* Medium: 3 columns */
          lg:grid-cols-4    /* Large: 4 columns */
          xl:grid-cols-5    /* Extra large: 5 columns */
          gap-2 sm:gap-4
        "
      >
        {myData.map((x, index) => (
          <VideoDesc
            key={x.id?.videoId || x.id || index}
            video={x}
          />
        ))}
      </div>
    </div>
  );
}
