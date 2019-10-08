export interface Query {
  q?: string;
  aq?: AdvancedQuery;
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
