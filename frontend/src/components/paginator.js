import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../style/pagination.css";
import Card from "./card";

export default function PaginatedCard({ heroes }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(heroes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(heroes.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, heroes]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % heroes.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {currentItems.map((hero) => {
        return <Card key={hero._id} hero={hero} />;
      })}
      <ReactPaginate
        breakLabel="..."
        nextLabel="»"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="«"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}
