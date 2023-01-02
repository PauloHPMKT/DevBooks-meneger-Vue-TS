import { ApiService } from "./api";

export default {
	// getBooks: () => {
	// 	return ApiService.get(`/books`);
	// },

	uploadImage: (data: object) => {
		return ApiService.post(`/books/upload`, data);
	},
};
