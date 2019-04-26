import axios from 'axios'; 

function httpHandler() {
  const config = {
    headers: {},
  };
  return axios.create(config);
}

function fetchOperation(apiPath, queryParams = {}) {
  return new Promise((resolve) => {
    httpHandler().get(API_ENDPOINT + apiPath, queryParams)
      .then((res) => {
        resolve(res.data || []);
      })
      .catch(() => {
        resolve([]);
      });
  });
}

export const fetchSearchResultAPI = async (searchText = '', offset, count) => {
  return await fetchOperation('/search', {
    params: {
      q: searchText,
      offset,
      count,
    }
  });
};
