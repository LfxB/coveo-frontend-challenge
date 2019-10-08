import { Query, Group } from '../Models/query.type';

export const queryApi = async (query: Query) => {
  let input = `https://cloudplatform.coveo.com/rest/search`;

  // TODO aq params

  let response = await fetch(input, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ ...query, groupBy: getGroupByParams() })
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
