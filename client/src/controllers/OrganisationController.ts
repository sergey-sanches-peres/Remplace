import Axios from 'axios';
import apiPath from '../api-path';
import { IUsersResponse } from '../models/responses/IUserResponse';
import Cookies from 'universal-cookie';
import { IOrganisation } from '../models/IOrganisationModel';
import { IOrganisationResponse } from '../models/responses/IOrgResponse';
Axios.defaults.withCredentials = true;

class OrganisationController{
    cookies = new Cookies();

    async getByOwnerId(ownerId: number){
        const {data} = await Axios.get<IOrganisationResponse>(`${apiPath}/orgs/getbyownerid`, {params: {ownerId}});
        return data;
    }
    async create(data: IOrganisation){ 
        const response = await Axios.post<IOrganisationResponse[]>(`${apiPath}/orgs/create`, data);
    }
    async update(info: object){
        await Axios.post(`${apiPath}/orgs/update`, info);
    }
    async getById(id: number | string){
        const response = await Axios.get(`${apiPath}/orgs/getbyid`, {params:{id}});
        return response;
    }
}

export default new OrganisationController();