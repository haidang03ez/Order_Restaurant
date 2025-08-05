const initialState = {
  loading: false,
  products: [],
  product: {},
  error: null,
  currentPage: 1,
  pageSize: 16,
  total: 0,
  searchKeyword: "",
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "PRODUCT_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        total: action.payload.total,
        error: null,
      };

    case "PRODUCT_LIST_FAILURE":
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };

    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "SET_KEYWORD":
      return {
        ...state,
        searchKeyword: action.payload,
      };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_DETAILS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "PRODUCT_DETAILS_SUCCESS":
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    case "PRODUCT_DETAILS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
