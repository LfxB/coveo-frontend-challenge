import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { updateFirstResult } from '../../../Store/Pagination/actions';
import { AppState } from '../../../Store';

import './index.css';

interface PaginationProps {
  firstResult: number;
  numberOfResultsPerPage: number;
  totalCount: number;
  updateFirstResult: typeof updateFirstResult;
}

interface Page {
  selected: number;
}

const Pagination: React.FC<PaginationProps> = ({
  firstResult,
  numberOfResultsPerPage,
  totalCount,
  updateFirstResult
}) => {
  const totalPages =
    numberOfResultsPerPage > totalCount
      ? 1
      : Math.ceil(totalCount / numberOfResultsPerPage);
  const currentPage = Math.floor((firstResult * totalPages) / totalCount);

  const handlePageChange = (page: Page) => {
    const nextResultIndex = Math.floor(numberOfResultsPerPage * page.selected);
    updateFirstResult(nextResultIndex);
  };

  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={Math.min(5, totalPages)}
      marginPagesDisplayed={0}
      forcePage={currentPage}
      onPageChange={handlePageChange}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName="pagination-break"
      containerClassName="pagination"
      pageClassName="pagination-page"
      activeClassName="pagination-active"
      previousClassName="pagination-prev"
      nextClassName="pagination-next"
      disabledClassName="pagination-disabled"
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  firstResult: state.pagination.firstResult,
  numberOfResultsPerPage: state.pagination.numberOfResults
});

export default connect(
  mapStateToProps,
  { updateFirstResult }
)(Pagination);
