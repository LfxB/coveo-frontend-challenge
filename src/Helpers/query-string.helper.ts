import queryString from 'query-string';
import { ParsedQueries } from '../Models/parsed-queries.type';

export const getParsedQuery = (
  payload: string = window.location.search
): ParsedQueries => {
  return queryString.parse(payload);
};

// Split by delimiter '---'
export const getAdvancedQueriesFromURL = () => {
  let parsed = getParsedQuery().aq;
  if (!parsed) return [];
  return parsed.split('---');
};

export const getAdvancedQueryStatus = (title: string, option: string) => {
  let isExcluded = false;
  const queries = getAdvancedQueriesFromURL();
  const item = queries.find(i => i.includes(`${title}=="${option}"`));

  if (!item) return { isChecked: false, isExcluded };

  isExcluded = item.includes('NOT');

  return {
    isChecked: !isExcluded,
    isExcluded
  };
};
