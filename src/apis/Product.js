import Api from './Api';
const END_POINT = 'product';
export default {
    all(){
        return Api.get(END_POINT);
    },
    show(id){
        return Api.get(`${END_POINT}/${id}`);
    }
}