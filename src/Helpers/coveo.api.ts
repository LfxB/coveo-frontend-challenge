import { Query, Group } from '../Models/query.type';
import { PaginationState } from '../Store/Pagination/types';

export const queryResults = async (
  query: Query,
  pagination: PaginationState
) => {
  const input = 'https://cloudplatform.coveo.com/rest/search';

  let response = await fetch(input, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      ...query,
      aq: query.aq,
      groupBy: getGroupByParams(),
      firstResult: pagination.firstResult,
      numberOfResults: pagination.numberOfResults
    })
  });

  if (!response.ok) {
    return {
      error: true
    };
  }

  return response.text().then(text => {
    return text ? JSON.parse(text) : { error: true };
  });
};

export const getGroupByParams = () => {
  const groupBy: Group[] = [
    {
      field: '@tpenspecial',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpdisponibilite',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpcategorie',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tppays',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpregion',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpmillesime',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpcoteexpertsplitgroup',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpcepagenomsplitgroup',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpinventairenomsuccursalesplitgroup',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpclassification',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tppastilledegout',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpfamilledevinsplitgroup',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpaccordsnommenu',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpparticularitesplitgroup',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpobservationsgustativesacidite',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpobservationsgustativescorps',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpobservationsgustativessucre',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpobservationsgustativestannins',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpobservationsgustativestexture',
      maximumNumberOfValues: 6,
      sortCriteria: 'occurrences',
      injectionDepth: 1000,
      completeFacetWithStandardValues: true
    },
    {
      field: '@tpprixnum',
      completeFacetWithStandardValues: true,
      generateAutomaticRanges: true,
      maximumNumberOfValues: 1,
      queryOverride: '@sysuri',
      sortCriteria: 'nosort'
    }
  ];
  return groupBy;
};

export const getGroupPrettyTitle = (groupField: string) => {
  const titles: { [key: string]: string } = {
    tpprixnum: 'Prix',
    tpenspecial: 'En spécial',
    tpdisponibilite: 'Disponibilité',
    tpcategorie: 'Catégorie',
    tppays: 'Pays',
    tpregion: 'Region',
    tpmillesime: 'Millésime',
    tpcoteexpertsplitgroup: "Cote d'expert",
    tpcepagenomsplitgroup: 'Cépage',
    tpinventairenomsuccursalesplitgroup: 'Succursale',
    tpclassification: 'Classification',
    tppastilledegout: 'Pastille de goût',
    tpfamilledevinsplitgroup: 'Famille de vin',
    tpaccordsnommenu: 'Accords suggérés',
    tpparticularitesplitgroup: 'Particularité',
    tpobservationsgustativesacidite: 'Acidité (Gustative)',
    tpobservationsgustativescorps: 'Corps (Gustatif)',
    tpobservationsgustativessucre: 'Sucre (Gustatif)',
    tpobservationsgustativestannins: 'Tannins (Gustatif)',
    tpobservationsgustativestexture: 'Texture (Gustative)'
  };

  return titles[groupField];
};
