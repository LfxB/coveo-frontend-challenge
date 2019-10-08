export interface Query {
  q?: string;
  aq?: AdvancedQuery;
  groupBy?: Group[];
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

let obj: Query = {
  groupBy: [
    {
      field: 'string',
      maximumNumberOfValues: 5,
      sortCriteria: 'string',
      injectionDepth: 5,
      completeFacetWithStandardValues: true
    }
  ]
};
