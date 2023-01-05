import { ApiService } from "./api";

export default {
	getUploadedImages: (id: string) => {
		return ApiService.get(`/books/upload/${id}`);
	},

	uploadImage: (data: object, headers: any) => {
		console.log(data);

		return ApiService.post(`/books/upload`, data, headers);
	},
};
