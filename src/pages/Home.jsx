// Home.jsx
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useCallback } from "react";
import { fetchVideos } from "../store/postslice";
import GridView from "../components/GridView";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, nextPageToken } = useSelector((state) => state.post);
  const loaderRef = useRef(null);

  // Initial load
  useEffect(() => {
    dispatch(fetchVideos({ query: '' }));
  }, [dispatch]);

  // IntersectionObserver to load more when bottom is reached
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && nextPageToken && !loading) {
        dispatch(fetchVideos({ query: '', pageToken: nextPageToken }));
      }
    },
    [dispatch, loading, nextPageToken]
  );

  useEffect(() => {
    const option = { root: null, rootMargin: "100px", threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className="w-full h-full flex flex-col">
      <GridView />

      {/* Loader */}
      <div ref={loaderRef} className="p-6 flex justify-center">
        {loading && (
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        )}
      </div>
    </div>
  );
}
