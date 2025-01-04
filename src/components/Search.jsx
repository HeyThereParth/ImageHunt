import { SearchIcon } from "lucide-react";
import { useContext } from "react";
import { ImageContext } from "../context/ImageContextProvider";

export const Search = () => {
  const { inputValue, setInputValue, setSearchQuery, setPage, setSearchTitle } =
    useContext(ImageContext);
  const handleSearch = () => {
    // console.log("clicked");
    setPage(1);
    setSearchQuery(inputValue);
    setSearchTitle(inputValue);
    setInputValue(""); // Clear the input field after searching
  };
  const handleKey = (e) => {
    if (e.key === "Enter")
      // Trigger the search if Enter is pressed
      handleSearch();
  };
  return (
    <div className="flex">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKey}
        value={inputValue}
        className="bg-gray-50 border-gray-400 text-md w-full p-2.5 outline-none indent-2 rounded-bl rounded-tl"
        type="search"
        placeholder="Search..."
      />
      <button
        className="rounded-tr rounded-br bg-blue-800 hover:bg-blue-900 transition-all  text-white p-2.5 font-semibold border cursor-pointer shadow"
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </div>
  );
};
