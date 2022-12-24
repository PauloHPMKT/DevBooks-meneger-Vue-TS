import { ApiService } from "./api";

export default {
	getBooks: () => {
		return ApiService.get(`/books`);
	},
};
