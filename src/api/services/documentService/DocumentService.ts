import { ApiClient } from "@/api/client/apiClient";
import { ApiUrl } from "@/core/constants/api-url-constant";
import { BaseAPIResponseModel } from "@/core/dtos/api-modal/BaseAPIResponseModel";
import { Document } from "@/core/dtos/api-modal/Document";

export default class DocumentService {
    public async getDocuments() {
        try {
            const res = await ApiClient.GetApi<BaseAPIResponseModel<Document[]>>(`${ApiUrl.getDocuments}`);
            return res;
        } catch (error) {
            return console.log('error in getDocuments', error);
        }
    }

    public async saveDocument(req: Document) {
        try {
            const res = await ApiClient.PostApi<BaseAPIResponseModel<string>>(`${ApiUrl.saveDocument}`, req);
            return res;
        } catch (error) {
            return console.log('error in saveDocument', error);
        }
    }

    public async getDocumentById(id: string) {
        try {
            const res = await ApiClient.GetApi<BaseAPIResponseModel<Document[]>>(`${ApiUrl.getDocumentById}${id}`);
            return res;
        } catch (error) {
            return console.log('error in getDocuments', error);
        }
    }
}