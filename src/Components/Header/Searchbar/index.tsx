import React, { useState } from 'react';
import { connect } from 'react-redux';
import { QueryState } from '../../../Store/Query/types';
import { updateQuery } from '../../../Store/Query/actions';
import { updateFirstResult } from '../../../Store/Pagination/actions';
import { AppState } from '../../../Store';

interface SearchbarProps {
  normalQuery: QueryState;
  updateQuery: typeof updateQuery;
  updateFirstResult: typeof updateFirstResult;
}

const Searchbar: React.FC<SearchbarProps> = ({
  normalQuery,
  updateQuery,
  updateFirstResult
}) => {
  const [query, setQuery] = useState(normalQuery.query);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Update normal query (q) in state
    updateQuery(query);

    // Update firstResult to 0 (1st page) in state
    updateFirstResult(0);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form-text"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <input className="search-form-button" type="submit" value="Search" />
    </form>
  );
};

const mapStateToProps = (state: AppState) => ({
  normalQuery: state.normalQuery
});

export default connect(
  mapStateToProps,
  { updateQuery, updateFirstResult }
)(Searchbar);
