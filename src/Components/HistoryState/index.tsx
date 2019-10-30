import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../Store';
import { updateQuery } from '../../Store/Query/actions';
import { updateFirstResult } from '../../Store/Pagination/actions';
import { updateNumberOfResults } from '../../Store/Pagination/actions';
import { SetAllAdvancedQueries } from '../../Store/AdvancedQuery/actions';
import { getParsedQuery } from '../../Helpers/query-string.helper';

interface HistoryStateProps extends RouteComponentProps<any> {
  q: string;
  first: number;
  results: number;
  aq: string[];
  updateQuery: typeof updateQuery;
  updateFirstResult: typeof updateFirstResult;
  updateNumberOfResults: typeof updateNumberOfResults;
  SetAllAdvancedQueries: typeof SetAllAdvancedQueries;
}

const HistoryState: React.FC<HistoryStateProps> = ({
  q,
  first,
  results,
  aq,
  updateQuery,
  updateFirstResult,
  updateNumberOfResults,
  SetAllAdvancedQueries,
  history
}) => {
  const [uri, setUri] = useState<string>('');
  const [allowEffects, setAllowEffects] = useState({
    allowUrlToRedux: true,
    allowReduxToUrl: false
  });

  // Set URL params to appropriate redux state
  useEffect(() => {
    if (!allowEffects.allowUrlToRedux) {
      setAllowEffects({ ...allowEffects, allowUrlToRedux: true });
      return;
    }

    let parsed = getParsedQuery(history.location.search);

    if (!parsed.q) {
      updateQuery('');
    }
    if (parsed.q !== undefined && parsed.q !== q) {
      updateQuery(parsed.q);
    }

    if (parsed.first !== undefined && parsed.first !== first.toString()) {
      updateFirstResult(parseInt(parsed.first) | 0);
    }

    if (parsed.results !== undefined && parsed.results !== results.toString()) {
      updateNumberOfResults(parseInt(parsed.results) | 0);
    }

    if (parsed.aq !== undefined && parsed.aq !== aq.join('---')) {
      SetAllAdvancedQueries(parsed.aq.split('---'));
    }
    setAllowEffects({ ...allowEffects, allowReduxToUrl: false });
    // Disable exhaustive-deps rule for the dependency array
    // because many of the suggested dependencies are not required.
    // eslint-disable-next-line
  }, [history.location.search]);

  // Push redux state to URL
  useEffect(() => {
    if (!allowEffects.allowReduxToUrl) {
      setAllowEffects({ ...allowEffects, allowReduxToUrl: true });
      return;
    }

    let params: string[] = [];
    if (first) params.push(`first=${first}`);
    if (results) params.push(`results=${results}`);
    if (q) params.push(`q=${q}`);
    if (aq && aq.length > 0) params.push(`aq=${aq.join('---')}`);

    let fullURI = encodeURI(params.join('&'));

    if (uri !== fullURI) {
      const location = { search: fullURI };

      if (history.action === 'POP') {
        history.replace(location);
      } else {
        history.push(location);
      }

      setUri(fullURI);
      setAllowEffects({ ...allowEffects, allowUrlToRedux: false });
    }
    // Disable exhaustive-deps rule for the dependency array
    // because many of the suggested dependencies are not required.
    // eslint-disable-next-line
  }, [first, results, q, aq]);

  return null;
};

const mapStateToProps = (state: AppState) => ({
  q: state.normalQuery.query,
  first: state.pagination.firstResult,
  results: state.pagination.numberOfResults,
  aq: state.advancedQueries.queries
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      updateQuery,
      updateFirstResult,
      updateNumberOfResults,
      SetAllAdvancedQueries
    }
  )(HistoryState)
);
