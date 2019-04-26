import { updateSearchResults } from "./uiHandler";
import { fetchSearchResultAPI } from './apiService';
import '../styles/index.scss';


/* === App state - START === */

/** TODO: Add more state if required */
const count = 5;
let searchData = [];
let offset = 0;
let searchText = '';

/* === App state - END === */



/* === Pagination - START === */

/**
 * TODO: Add Pagination support 
 * searchData - Array of search results, eg: [one, two, three, ...]
 * offset     - Integer to identify the starting point to return search values from a result set.
 * count      - Integer to define the total number of search values to fetch.
 */

async function loadData (isFreshSearch = false) {
  let localSearchText = searchText;

  // CODE HERE ---
  // "fetchSearchResultAPI" is a API call for search
  const newData = await fetchSearchResultAPI(localSearchText, offset, count);
  const showLoadMore = true;
  searchData = newData;

  /**
   * updateSearchResults - update the UI with new search result
   * searchData - Array of search result. 
   * showLoadMore - Boolean to show (true) or hide (false) the load more button.
   * localSearchText - Optional, search text
   */
  updateSearchResults(searchData, showLoadMore, localSearchText);
};

/* === Pagination - END === */


/** === HTML CONTROLS - START === **/

window.textSearch = function(searchText = '') {
  // Resets the search text and pagination controls
  updateSearchText(searchText);
  updateOffset(0);

  /* 
   * TODO: Optimize the search operation
   * On every text input (onKeyUp), the search functionality is called
   * The search functionality has very high latency
   * Reduce the No.of search invocations, and also maintain the search consistency 
   */
 
  // CODE HERE ---
  const isFreshSearch = true;
  loadData(isFreshSearch);
}

window.loadMore = function () {
  const isFreshSearch = false;
  loadData(isFreshSearch);
}

/** === HTML CONTROLS - END === **/


/* === Utils Functions - START === */

function updateSearchText (value) {
  searchText = value;
};

function clearSearchData () {
  searchData = [];
};

function updateOffset (value) {
  offset = value;
};

/* === Utils Functions - END === */
