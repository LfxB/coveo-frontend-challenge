import React, { useState } from 'react';
import { connect } from 'react-redux';
import { QueryState } from '../../../Store/Query/types';
import { updateQuery } from '../../../Store/Query/actions';
import { updateFirstResult } from '../../../Store/Pagination/actions';
import { AppState } from '../../../Store';

import './index.css';

interface SearchbarProps {
  normalQuery: QueryState;
  updateQuery: typeof updateQuery;
  updateFirstResult: typeof updateFirstResult;
}

export const Searchbar: React.FC<SearchbarProps> = ({
  normalQuery,
  updateQuery,
  updateFirstResult
}) => {
  const [query, setQuery] = useState(normalQuery.query);

  const handleSubmit = () => {
    // Update normal query (q) in state
    updateQuery(query);

    // Update firstResult to 0 (1st page) in state
    updateFirstResult(0);
  };

  return (
    <div className="search-form">
      <input
        className="search-form-text"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyUp={e => {
          // keyCode 13 => ENTER key
          if (e.keyCode === 13) {
            handleSubmit();
          }
        }}
      />
      <div className="search-form-button" onClick={handleSubmit}>
        <div className="search-icon icon-background"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  normalQuery: state.normalQuery
});

export default connect(
  mapStateToProps,
  { updateQuery, updateFirstResult }
)(Searchbar);
