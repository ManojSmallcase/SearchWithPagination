import { searchForWord } from "../algo/searchWord";
import { showSearchResults } from "./searchResults";


/**
 * App state variables
 * TODO: Add more state if required
 */
var searchData = [];
var offset = 0;
var count = 5;
var searchText = '';

export const updateSearchText = (value) => {
  searchText = value;
};

export const clearSearchData = () => {
  searchData = [];
};

export const clearOffset = () => {
  offset = 0;
};

export const doPaginationSearch = async (isNewSearch = false) => {
  let searchFor = searchText;

  /* 
  * TODO: Add pagination support 
  * "searchData" -> Array of search results, eg: [one, two, three, ...]
  * "offset" -> Integer to identify the starting point to return search values from a result set.
  * "count" -> Integer to define the total number of search values to fetch.
  * "showLoadMore" -> Boolean to show (true) or hide (false) the load more button.
  */

  /*
   * Note - "searchForWord" is the function which provides search results. Arguments below,
   * searchText - String to search
   * offset - Start index
   * count - No.of search values to retreive
   */

   if (isNewSearch) {
    clearOffset();
   }
 
  // CODE HERE ---
  const newData = await searchForWord(searchText, offset, count);
  const showLoadMore = true;
  searchData = newData;

  /**
   * showSearchResults - update the UI with new search result
   * searchData - Array of search result. 
   * showLoadMore - Boolean to show (true) or hide (false) the load more button.
   */
  showSearchResults(searchData, showLoadMore, searchFor);
};
