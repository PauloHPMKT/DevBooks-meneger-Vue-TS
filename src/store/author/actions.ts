import authorService from "@/services/authorService";

export default {
	async getAuthors({ commit }: any, data: object) {
		await authorService.getAuthors().then((res) => {
			console.log(res.data);

			commit("GET_AUTHORS", res.data);
		});
	},
};
