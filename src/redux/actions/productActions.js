import {
  fetchProductList,
  fetchSearchProduct,
  fetchProductDetails,
} from "../../services/productService";

export const getAllProduct =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: "PRODUCT_LIST_REQUEST" });

      const res = await fetchProductList(params);

      dispatch({
        type: "PRODUCT_LIST_SUCCESS",
        payload: {
          products: res.data.products,
          total: res.data.total,
        },
      });
      return res.data.products;
    } catch (error) {
      dispatch({
        type: "PRODUCT_LIST_FAILURE",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      throw error;
    }
  };

export const setPage = (page) => (dispatch) => {
  dispatch({ type: "SET_PAGE", payload: page });
};

export const setSearchKeyword = (keyword) => (dispatch) => {
  dispatch({ type: "SET_KEYWORD", payload: keyword });
};

export const searchProduct =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: "PRODUCT_LIST_REQUEST" });

      const res = await fetchSearchProduct(params);

      dispatch({
        type: "PRODUCT_LIST_SUCCESS",
        payload: {
          products: res.data.products,
          total: res.data.total,
        },
      });
    } catch (error) {
      dispatch({
        type: "PRODUCT_LIST_FAILURE",
        payload: error.response?.data?.message || error.message,
      });
    }
  };

export const getProductDetails = (productId) => async (dispatch) => {
  try {
    dispatch({type: "PRODUCT_DETAILS_REQUEST"})

    const res = await fetchProductDetails(productId)

    dispatch({
      type: "PRODUCT_DETAILS_SUCCESS",
      payload: res.data
    })

  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAILURE",
      payload: error.response?.data?.message || error.message,
    })
  }
}
