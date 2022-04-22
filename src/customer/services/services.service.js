import http from '../../core/http-common'

class ServicesService {
    endPoint = 'https://go2climbapi20220422125110.azurewebsites.net/api/v1/services';

    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
}

export default new ServicesService();
