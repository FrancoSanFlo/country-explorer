const Pagination = ({ currentPage, allCountries, setCurrentPage }) => {
  const PER_PAGE = 20;

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => {
          setCurrentPage((page) => Math.max(page - 1, 1));
          window.scrollTo(0, 0);
        }}
        disabled={currentPage === 1}
        className={`text-white text-md sm:text-base md:text-lg  py-1 px-5 border border-transparent ${
          currentPage === 1
            ? "bg-indigo-400"
            : "bg-indigo-600 hover:bg-indigo-700"
        } rounded-md mt-4`}
      >
        &#8592;
      </button>
      <button
        onClick={() => {
          setCurrentPage((page) =>
            page * PER_PAGE < allCountries.length ? page + 1 : page
          );
          window.scrollTo(0, 0);
        }}
        disabled={currentPage * PER_PAGE >= allCountries.length}
        className={`text-white text-md sm:text-base md:text-lg py-1 px-5 border border-transparent ${
          currentPage * PER_PAGE >= allCountries.length
            ? "bg-indigo-400"
            : "bg-indigo-600 hover:bg-indigo-700"
        } rounded-md mt-4`}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Pagination;
