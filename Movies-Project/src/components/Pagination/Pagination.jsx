import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ getPage, pageCount = 0 }) {
  const handlePageClick = (data) => {
    const selected = data.selected + 1;
    getPage(selected);
  };

  if (!pageCount || pageCount <= 1) return null;

  return (
    <div className="flex justify-center my-4 cursor-pointer">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        previousLabel="السابق"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        containerClassName="flex gap-1 list-none cursor-pointer justify-center"
        pageClassName="border px-3 py-1 rounded"
        activeClassName="bg-black text-white"
      />
    </div>
  );
}
