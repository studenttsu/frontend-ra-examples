const API_PATH = 'http://localhost:3003';

export class HttpService {
    private baseApi: string = 'http://localhost:3003';

    constructor(controllerName: string = '') {
        this.baseApi = `${API_PATH}/api`;

        if (controllerName) {
            this.baseApi += `/${controllerName}`;
        }
    }

    get<T>(path: string): Promise<T[]> {
        return fetch(`${this.baseApi}/${path}`)
            .then(response => response.json());
    }

    post<T>(path: string, data: any): Promise<T> {
        return fetch(`${this.baseApi}/${path}`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json());
    }

    put() {}
    delete() {}
}