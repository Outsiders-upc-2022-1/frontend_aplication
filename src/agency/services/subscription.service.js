import http from '../../core/http-common'

class SubscriptionService{
    endPoint = 'https://go2climbapi20220422125110.azurewebsites.net/api/v1/subscriptions';

    getAll(){
        return http.get(this.endPoint);
    }
    getById(id){
        return http.get(`${this.endPoint}/${id}`);
    }
    update(id, updateSubscriptionDto) {
        return http.put(`${this.endPoint}/${id}`, updateSubscriptionDto);
    }
}

export default new SubscriptionService()
