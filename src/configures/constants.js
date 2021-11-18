const constants = {
    API_URL: 'http://localhost:6769/',
    REGEX_EMAIL: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
    REGEX_CURRENCY: /(\d)(?=(\d{3})+(?!\d))/g,
    SIZE_PER_PAGE: 10,
    SIZE_PER_PAGE_LIST: [5, 10, 25, 50, 100],
  };
  export const GET_CUSTOMERS = "http://localhost:6769/rest/customer/getAll";
  export default constants;
