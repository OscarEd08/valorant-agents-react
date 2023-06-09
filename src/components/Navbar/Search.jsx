function Search(props) {
  const { searchAgent, setSearchAgent } = props;

  const handleSearch = (event) => {
    setSearchAgent(event.target.value);
  };

  return (
    <label className="absolute -right-48 sm:right-0 sm:flex-1 mx-20 sm:relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 fill-slate-300"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Buscar agente por nombre"
        value={searchAgent}
        onChange={handleSearch}
        className=" w-72 sm:w-full text-slate-700 font-semibold placeholder:font-normal placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-stone-500 focus:ring-stone-500 focus:ring-1 sm:text-sm"
      />
    </label>
  );
}

export default Search;
