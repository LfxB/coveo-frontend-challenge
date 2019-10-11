import React from 'react';
import ResultItem from './ResultItem';

import './index.css';

interface SearchResultsProps {
  results: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
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
            categorie={item.raw.tpcategorie}
            thumbnailuri={item.raw.tpthumbnailuri}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
