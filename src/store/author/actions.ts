import authorService from "@/services/authorService";

export default {
	async getAuthors({ commit }: any, data: object) {
		await authorService.getAuthors().then((res) => {
			console.log(res);

			commit("GET_AUTHORS", res);
		});
	},
};
