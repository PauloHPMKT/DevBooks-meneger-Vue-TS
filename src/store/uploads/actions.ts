import uploadService from "@/services/uploadService";

export default {
	async createUploadCover({ commit }: any, data: object) {
		await uploadService
			.uploadImage(data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				//verificar se consigo mandar o id para o book.poster
			});
	},
};
