"use client"
import React, { useState } from 'react';

export default function SharedTable({ tableHead, tableRowData, pageSize = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(tableRowData.length / pageSize);

  // Slice data
  const startIndex = (currentPage - 1) * pageSize;
  const currentTableData = tableRowData.slice(startIndex, startIndex + pageSize);

  // Handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const handleNext = () => {

    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };


  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  // --- PAGINATION LOGIC START ---
  const getPaginationRange = () => {
    // Number of always-visible pages at the start/end when truncated
    const siblingCount = 1; 
    
    // Total numbers to show in the bar (siblings + current + first + last + dots)
    // Adjusting this determines when the dots appear.
    const totalPageNumbers = siblingCount + 5;

    // Case 1: If the number of pages is less than the page numbers we want to show, return the range [1..totalPages]
    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Calculate left and right sibling index and make sure they are within range 1 and totalPages
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    // We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // Case 2: No left dots to show, but rights dots to be shown
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, '...', totalPages];
    }

    // Case 3: No right dots to show, but left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1);
      return [firstPageIndex, '...', ...rightRange];
    }

    // Case 4: Both left and right dots to be shown
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }
  };
  // --- PAGINATION LOGIC END ---

  const paginationRange = getPaginationRange();

  return (
    <div className="w-full max-w-7xl flex flex-col gap-4">
      {/* Table Container */}
      <div className="w-full border border-gray-400 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-green-100">
            <tr>
              {tableHead.map((item, index) => (
                <th key={index} className="p-3 text-left font-semibold text-gray-700 border-b border-gray-400">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentTableData.length > 0 ? (
              currentTableData.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="p-3 text-gray-600 border-b border-gray-200 last:border-b-0">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={tableHead.length} className="p-4 text-center text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Container */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`p-2 border rounded-lg w-10 flex items-center justify-center transition-colors
              ${currentPage === 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-400 hover:bg-gray-100 text-gray-600'}`}
          >
            &lt;
          </button>

          {/* Dynamic Page Numbers with Dots */}
          {paginationRange.map((page, index) => {
            
            // Render "..." (Dots)
            if (page === '...') {
              return (
                <span key={`dots-${index}`} className="px-2 text-gray-400">
                  &#8230;
                </span>
              );
            }

            // Render Number Buttons
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`p-2 rounded-lg min-w-[2.5rem] border transition-colors
                  ${currentPage === page 
                    ? 'bg-green-200 border-green-300 text-green-800 font-bold shadow-sm' 
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`p-2 border rounded-lg w-10 flex items-center justify-center transition-colors
              ${currentPage === totalPages ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-400 hover:bg-gray-100 text-gray-600'}`}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}