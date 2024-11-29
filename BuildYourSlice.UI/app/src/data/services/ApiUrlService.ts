const baseUrl = "https://localhost:7078/api"

export interface IApiUrl {
    url: string;
}

export class ApiUrlService {
    public static GetProductsEndpoint() : IApiUrl {
        return { url: baseUrl + "/Products" };
    }
}