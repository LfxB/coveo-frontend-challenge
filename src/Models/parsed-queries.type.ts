import { ParsedQuery } from 'query-string';

export interface ParsedQueries extends ParsedQuery {
  q?: string;
  first?: string;
  results?: string;
  aq?: string;
}
