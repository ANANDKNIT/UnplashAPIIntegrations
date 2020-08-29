/**
 * Author: Anand Kumar
 * Date: 30-Aug-2020
 * File Description: Unplash APIs
 */
import Axios from "axios";
let client_id = process.env.REACT_APP_CLIENT_ID;

// fetch images
export const fetchImages = (currentPage, perPage) => {
  currentPage = currentPage || 1;
  perPage = perPage || 10;
  return Axios.get("https://api.unsplash.com/photos", {
    params: {
      page: currentPage,
      per_page: perPage,
      client_id,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return {error: err};
    });
};

// search Images
export const searchImages = (currentPage, perPage, searchQuery) => {
  currentPage = currentPage || 1;
  perPage = perPage || 10;
  return Axios.get("https://api.unsplash.com/search/photos", {
    params: {
      page: currentPage,
      per_page: perPage,
      client_id,
      query: searchQuery,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return {error: err};
    });
};

export const getCollection = () => {
  Axios.get("https://api.unsplash.com/collections", {
    params: {
      client_id,
    },
  })
    .then((res) => {
      console.log(res, "collection");
    })
    .catch((err) => {
      return {error: err};
    });
};
