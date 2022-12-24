import bookService from "@/services/bookService";

export default {
	async getBooks({ commit }: any, data?: object) {
		await bookService.getBooks().then((res) => {
			console.log(res.data);

			commit("GET_BOOKS", res.data);
		});
	},
};
