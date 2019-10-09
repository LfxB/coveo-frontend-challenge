import React from 'react';
import ResultItem from './ResultItem';
import Pagination from './Pagination';

interface SearchResultsProps {
  results: any[];
  totalCount: number;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  totalCount
}) => {
  return (
    <div className="results-container">
      {results.map((item, key) => {
        return (
          <ResultItem
            key={key}
            title={item.title}
            uri={item.uri}
            prixnum={item.raw.tpprixnum}
            pays={item.raw.tppays}
            millesime={item.raw.tpmillesime}
            thumbnailuri={item.raw.tpthumbnailuri}
          />
        );
      })}
      <Pagination totalCount={totalCount} />
    </div>
  );
};

export default SearchResults;
