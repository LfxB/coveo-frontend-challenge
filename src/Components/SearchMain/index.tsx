import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { QueryState } from '../../Store/Query/types';
import { AppState } from '../../Store';
import { queryResults } from '../../Helpers/coveo.api';
import SearchResults from './SearchResults';

interface SearchMainProps {
  normalQuery: QueryState;
  firstResult: number;
  numberOfResults: number;
}

interface ApiResult {
  error?: boolean;
  results: any[];
  totalCount: number;
}

const SearchMain: React.FC<SearchMainProps> = ({
  normalQuery,
  firstResult,
  numberOfResults
}) => {
  const [data, setData] = useState<ApiResult>({ results: [], totalCount: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const result = await queryResults(
        {
          q: normalQuery.query,
          sortCriteria: 'fielddescending',
          sortField: '@tpmillesime'
        },
        {
          firstResult,
          numberOfResults
        }
      );

      console.log(result);

      setData(result);
    };

    fetchData();
  }, [normalQuery.query, firstResult, numberOfResults]);

  return (
    <div className="search-main">
      <SearchResults results={data.results} totalCount={data.totalCount} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  normalQuery: state.normalQuery,
  firstResult: state.pagination.firstResult,
  numberOfResults: state.pagination.numberOfResults
});

export default connect(mapStateToProps)(SearchMain);
