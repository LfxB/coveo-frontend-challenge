import React from 'react';
import { GroupByResult } from '../../../Models/query.type';
import { getGroupPrettyTitle } from '../../../Helpers/coveo.api';
import FilterGroup from './FilterGroup';

interface FilterbarProps {
  groupByResults: GroupByResult[] | undefined;
}

const Filterbar: React.FC<FilterbarProps> = ({ groupByResults }) => {
  return (
    <div className="filter-container">
      {groupByResults &&
        groupByResults.map((res, key) => {
          if (res.field !== 'tpprixnum') {
            return (
              <FilterGroup
                key={key}
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

export default Filterbar;
