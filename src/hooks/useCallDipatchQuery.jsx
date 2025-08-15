import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../store/postslice";
import { useSearchParams } from "react-router-dom";

export default function useCallFetch(){
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const [searchparams, setSearchParams] = useSearchParams();

    const executeCall = () =>{
        let query = searchparams.get('search');
        if(query != null)   dispatch(fetchVideos({query}));
        else dispatch(fetchVideos({query:""}))
    }

    return [searchparams, executeCall];
}