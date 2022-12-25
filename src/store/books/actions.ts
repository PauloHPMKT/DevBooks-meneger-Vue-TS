import bookService from "@/services/bookService";

export default {
	async getBooks({ commit }: any, data: object) {
		await bookService.getBooks().then((res) => {
			console.log(res.data.books);

			commit("GET_BOOKS", res.data.books);
		});
	},
};
