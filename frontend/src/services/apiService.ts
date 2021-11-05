import { BASE_URL } from './../utils/requests';
import axios from "axios";

export function getAMountBySeller() {
    return axios
      .get(BASE_URL + "/sales/amount-by-seller")
      .then((AxiosResponse) => {
        return AxiosResponse.data;
      });
  }


  export function getSuccessBySeller() {
    return axios
      .get(BASE_URL + "/sales/success-by-seller")
      .then((AxiosResponse) => {
        return AxiosResponse.data;
      });
  }

  export function getAllSalesWithPagination(pageNumber: number, sizeNumber: number) {
    return axios
      .get(BASE_URL + "/sales?page=" + pageNumber + "&size=" + sizeNumber)
      .then((AxiosResponse) => {
        return AxiosResponse.data;
      });
  }