import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../Store';
import { toggleFilterMenu } from '../../../Store/ShowFilterMenu/actions';
import { GroupByResult } from '../../../Models/query.type';
import { getGroupPrettyTitle } from '../../../Helpers/coveo.api';
import FilterGroup from './FilterGroup';

import './index.css';

interface FilterbarProps {
  groupByResults: GroupByResult[] | undefined;
  showFilterMenu: boolean;
}

const Filterbar: React.FC<FilterbarProps> = ({
  groupByResults,
  showFilterMenu
}) => {
  const classMobileFilter = showFilterMenu ? ' filter-mobile' : '';

  return (
    <div className={'filter-container' + classMobileFilter}>
      {groupByResults &&
        groupByResults.map((res, key) => {
          if (res.field !== 'tpprixnum') {
            return (
              <FilterGroup
                key={`${key}__${res.field}`}
                title={getGroupPrettyTitle(res.field)}
                field={res.field}
                options={res.values}
              />
            );
          }

          return null;
        })}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  showFilterMenu: state.showFilterMenu.enabled
});

export default connect(
  mapStateToProps,
  { toggleFilterMenu }
)(Filterbar);
