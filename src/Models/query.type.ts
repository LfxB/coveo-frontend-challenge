export interface Query {
  q?: string;
  aq?: AdvancedQuery;
  groupBy?: Group[];
  firstResult?: number;
  numberOfResults?: number;
  sortCriteria: string;
  sortField: string;
}

export interface AdvancedQuery {
  tppays?: string;
  tpregion?: string;
  tpmillesime?: string;
  tpcepagenomsplitgroup?: string;
  tpdisponibilite?: string;
  tpcategorie?: string;
  tppastilledegout?: string;
  tpprixnum?: string;
  tpcoteexpertsplitgroup?: string;
  tpinventairenomsuccursalesplitgroup?: string;
}

export interface Group {
  field: string;
  maximumNumberOfValues: number;
  sortCriteria: string;
  completeFacetWithStandardValues: boolean;
  injectionDepth?: number;
  generateAutomaticRanges?: boolean;
  queryOverride?: string;
}
