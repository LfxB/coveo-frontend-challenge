import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { QueryState } from '../../Store/Query/types';
import { AppState } from '../../Store';
import { queryApi } from '../../Helpers/coveo.api';
import SearchResults from './SearchResults';

interface SearchMainProps {
  normalQuery: QueryState;
}

interface ApiResult {
  error?: boolean;
  results: any[];
}

const SearchMain: React.FC<SearchMainProps> = ({ normalQuery }) => {
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

  return (
    <div className="search-main">
      <SearchResults results={data.results} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  normalQuery: state.normalQuery
});

export default connect(mapStateToProps)(SearchMain);
