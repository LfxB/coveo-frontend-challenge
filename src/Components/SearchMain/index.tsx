import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { QueryState } from '../../Store/Query/types';
import { AppState } from '../../Store';
import { queryResults } from '../../Helpers/coveo.api';
import { GroupByResult } from '../../Models/query.type';
import SearchResults from './SearchResults';
import Filterbar from './Filterbar';

import './index.css';

interface SearchMainProps {
  normalQuery: QueryState;
  firstResult: number;
  numberOfResults: number;
  advancedQueries: string[];
}

interface ApiResult {
  error?: boolean;
  results: any[];
  totalCount: number;
  groupByResults: GroupByResult[] | undefined;
}

const SearchMain: React.FC<SearchMainProps> = ({
  normalQuery,
  firstResult,
  numberOfResults,
  advancedQueries
}) => {
  const [data, setData] = useState<ApiResult>({
    results: [],
    totalCount: 0,
    groupByResults: undefined
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await queryResults(
        {
          q: normalQuery.query,
          aq: advancedQueries.join(' '),
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
  }, [normalQuery.query, firstResult, numberOfResults, advancedQueries]);

  return (
    <div className="search-main">
      <SearchResults results={data.results} totalCount={data.totalCount} />
      <Filterbar groupByResults={data.groupByResults} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  normalQuery: state.normalQuery,
  firstResult: state.pagination.firstResult,
  numberOfResults: state.pagination.numberOfResults,
  advancedQueries: state.advancedQueries.queries
});

export default connect(mapStateToProps)(SearchMain);
