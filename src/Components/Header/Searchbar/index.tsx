import React, { useState } from 'react';
import { connect } from 'react-redux';
import { QueryState } from '../../../Store/Query/types';
import { updateQuery } from '../../../Store/Query/actions';
import { AppState } from '../../../Store';

interface SearchbarProps {
  normalQuery: QueryState;
  updateQuery: typeof updateQuery;
}

const Searchbar: React.FC<SearchbarProps> = ({ normalQuery, updateQuery }) => {
  const [query, setQuery] = useState(normalQuery.query);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateQuery(query);
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
  { updateQuery }
)(Searchbar);
