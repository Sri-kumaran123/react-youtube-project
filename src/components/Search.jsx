import { useState } from "react"
function Search(){
    const [value, setValus] = useState("");

    console.log(value);

    return <input
        onChange={e=>{
            setValus(_=>e.target.value)
        }}
        type="text"
        name="Search"
         className="
                border border-gray-300 rounded-md
                px-4 py-2 w-1/2
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition
            "
    />
}

export default Search;