import { BASE_URL } from "@/core/constants/api-url-constant";

export const ApiClient = {
    GetApi: async <T>(endpoint: string, queryParams?: Record<string, any>): Promise<T> => {
        const url = buildUrl(endpoint, queryParams);
        const response = await fetch(url, {
            method: 'GET',
            headers: getHeaders(),
        });
        return handleResponse<T>(response);
    },

    PostApi: async <T>(endpoint: string, data: any): Promise<T> => {
        const response = await fetch(buildUrl(endpoint), {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
        return handleResponse<T>(response);
    },
}

const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return headers;
};

const buildUrl = (endpoint: string, queryParams?: Record<string, any>): string => {
    let url = `${BASE_URL}${endpoint}`;
    if (queryParams) {
        const queryString = Object.keys(queryParams)
            .map((key) => `${key}=${queryParams[key]}`)
            .join('&');
        url += `?${queryString}`;
    }
    // console.log("Making request to :", url);
    return url;
};

const handleResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }
    return response.text() as T;
};
