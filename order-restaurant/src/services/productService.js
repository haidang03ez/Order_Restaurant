import api from "../api/axiosClients";

export const fetchProductList = async (params) => {
    return api.get("/products", { params });
}

export const fetchProductDetails = async (productId) => {
    return api.get(`/products/${productId}`);
}

export const fetchSearchProduct = async (params) => {
    return api.get("/products/search", { params });
}