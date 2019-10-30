import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { QueryState } from '../../Store/Query/types';
import { AppState } from '../../Store';
import { queryResults } from '../../Helpers/coveo.api';
import { GroupByResult } from '../../Models/query.type';
import SearchResults from './SearchResults';
import Pagination from './Pagination';
import Filterbar from './Filterbar';

import './index.css';
import Loading from '../Loading';

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

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
      setLoading(false);
      setData(result);
    };

    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [normalQuery.query, firstResult, numberOfResults, advancedQueries]);

  return (
    <React.Fragment>
      {loading && <Loading fullScreen={true} />}
      <div className="search-main">
        <SearchResults results={data.results} />
        <Pagination totalCount={data.totalCount} />
        <Filterbar groupByResults={data.groupByResults} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: AppState) => ({
  normalQuery: state.normalQuery,
  firstResult: state.pagination.firstResult,
  numberOfResults: state.pagination.numberOfResults,
  advancedQueries: state.advancedQueries.queries
});

export default connect(mapStateToProps)(SearchMain);
