import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../store/postslice";

function Home(){
    const dispatch = useDispatch();
    const stateValue = useSelector((state) => state.post.videos);
    useEffect(() => {
        dispatch(fetchVideos({ query: '' })); // Fetch popular videos on initial load
    }, []);

    console.log(stateValue);

    return <div className="flex-1">
        <h1>Hello World</h1>
    </div>
}

export default Home;