import React from 'react';
import { connect } from 'react-redux';
import {
  updateAdvancedQuery,
  removeAdvancedQuery
} from '../../../../Store/AdvancedQuery/actions';
import { updateFirstResult } from '../../../../Store/Pagination/actions';
import { GroupByResultValue } from '../../../../Models/query.type';

import './index.css';
import { getAdvancedQueryStatus } from '../../../../Helpers/query-string.helper';

interface FilterGroupProps {
  title: string;
  field: string;
  options: GroupByResultValue[];
  updateAdvancedQuery: typeof updateAdvancedQuery;
  removeAdvancedQuery: typeof removeAdvancedQuery;
  updateFirstResult: typeof updateFirstResult;
}

const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  field,
  options,
  updateAdvancedQuery,
  removeAdvancedQuery,
  updateFirstResult
}) => {
  if (options.length === 0) {
    return null;
  }

  const onCheckboxClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string,
    optionName: string
  ) => {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      updateAdvancedQuery(field, optionName, false);
    } else {
      removeAdvancedQuery(field, optionName);
    }

    // Set page to 0
    updateFirstResult(0);
  };

  return (
    <div className="filter-group">
      <div className="filter-group-header">{title}</div>
      <ul className="filter-group-options-list">
        {options.map((option, key) => {
          const inputName = `${field}-${option.lookupValue}`;

          return (
            <li key={key}>
              <input
                type="checkbox"
                name={inputName}
                id={inputName}
                checked={
                  getAdvancedQueryStatus(field, option.lookupValue).isChecked
                }
                onChange={event =>
                  onCheckboxClick(event, field, option.lookupValue)
                }
              />
              <label
                className="filter-group-label checkbox"
                htmlFor={inputName}
              >
                <span
                  className="filter-group-option-name"
                  title={option.lookupValue}
                >
                  {option.lookupValue}
                </span>
                <span className="filter-group-option-count">
                  {option.numberOfResults}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(
  null,
  { updateAdvancedQuery, removeAdvancedQuery, updateFirstResult }
)(FilterGroup);
