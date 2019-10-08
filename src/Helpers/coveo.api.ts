import { Query } from '../Models/query.type';

export const queryApi = async (query: Query) => {
  let input = `https://cloudplatform.coveo.com/rest/search?access_token=${process.env.REACT_APP_TOKEN}`;

  if (query.q) {
    input += '&q=' + query.q;
  }

  // TODO aq params

  let response = await fetch(input, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      'Content-Type': 'application/json'
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
