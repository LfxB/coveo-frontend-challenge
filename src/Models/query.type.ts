export interface Query {
  q?: string;
  aq?: string;
  groupBy?: Group[];
  firstResult?: number;
  numberOfResults?: number;
  sortCriteria: string;
  sortField: string;
}

export interface AdvancedQuery {
  tpprixnum: AdvancedQueryItem;
  tpenspecial: AdvancedQueryItem;
  tpdisponibilite: AdvancedQueryItem;
  tpcategorie: AdvancedQueryItem;
  tppays: AdvancedQueryItem;
  tpregion: AdvancedQueryItem;
  tpmillesime: AdvancedQueryItem;
  tpcoteexpertsplitgroup: AdvancedQueryItem;
  tpcepagenomsplitgroup: AdvancedQueryItem;
  tpinventairenomsuccursalesplitgroup: AdvancedQueryItem;
  tpclassification: AdvancedQueryItem;
  tppastilledegout: AdvancedQueryItem;
  tpfamilledevinsplitgroup: AdvancedQueryItem;
  tpaccordsnommenu: AdvancedQueryItem;
  tpparticularitesplitgroup: AdvancedQueryItem;
  tpobservationsgustativesacidite: AdvancedQueryItem;
  tpobservationsgustativescorps: AdvancedQueryItem;
  tpobservationsgustativessucre: AdvancedQueryItem;
  tppastiltpobservationsgustativestanninsledegout: AdvancedQueryItem;
  tpobservationsgustativestexture: AdvancedQueryItem;
}

export interface AdvancedQueryItem {
  prettyName: string; // ex: Disponibilite
  insertInQuery: boolean; // true = add to query and url, else ignore
  values: AdvancedQueryItemValue[]; // See AdvancedQueryItemValue
}

export interface AdvancedQueryItemValue {
  name: string; // ex: En Ligne => (@tpdisponibilite=="En Ligne")
  exclude: boolean; // true => (NOT @tpdisponibilite=="En Ligne")
}

// For groupBy parameter in query request for items
export interface Group {
  field: string;
  maximumNumberOfValues: number;
  sortCriteria: string;
  completeFacetWithStandardValues: boolean;
  injectionDepth?: number;
  generateAutomaticRanges?: boolean;
  queryOverride?: string;
}

// For groupByResults in query response
export interface GroupByResult {
  field: string;
  values: GroupByResultValue[];
}

export interface GroupByResultValue {
  lookupValue: string;
  numberOfResults: number;
}
