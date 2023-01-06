import { ApiService } from "./api";

export default {
	getBooks: () => {
		return ApiService.get(`/books`);
	},

	createBook: (data: object) => {
		return ApiService.post(`/books/create`, data);
	},

	removeBook: (id: string) => {
		return ApiService.delete(`/books/${id}`);
	},
};
