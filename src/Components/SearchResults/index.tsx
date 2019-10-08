import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { QueryState } from '../../Store/Query/types';
import { AppState } from '../../Store';
import ResultItem from './ResultItem';
import { queryApi } from '../../Helpers/coveo.api';

interface SearchResultsProps {
  normalQuery: QueryState;
}

interface ApiResult {
    error?: boolean;
    results: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ normalQuery }) => {
  const [data, setData] = useState<ApiResult>({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await queryApi({
        q: normalQuery.query
      });

      console.log(result);
      setData(result);
    };

    fetchData();
  }, [normalQuery.query]);

  return <div className="results-container">
      {data.results.map((item, key) => {
          return <ResultItem
          key={key}
          title={item.title}
          uri={item.uri}
          prixnum={item.raw.tpprixnum}
          pays={item.raw.tppays}
          millesime={item.raw.tpmillesime}
          thumbnailuri={item.raw.tpthumbnailuri}
          />
      })}
  </div>;
};

const mapStateToProps = (state: AppState) => ({
  normalQuery: state.normalQuery
});

export default connect(mapStateToProps)(SearchResults);
