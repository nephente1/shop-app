import { adminInstance } from '../../appState/axios';
import { ProductData } from '../ProductDetails/ProductDetails';



export const getAllProducts = async (): Promise<any> => {
    try {
        const resp = await adminInstance.get('/products');
        return resp;
    }

    catch (error) {
        console.log(error);
    }
};

export type RequireFields<T, K extends keyof T> = Required<Pick<T, K>>; //type for property id, that is required to handle request

export const updateProduct = async (updateObj: Partial<ProductData> & RequireFields<ProductData, 'id'>): Promise<any> => {
    const respData = await adminInstance.patch(`/products/${updateObj.id}`, updateObj);
    console.log('respData', respData);
};

export const createNewProduct = async (postedObjectWithElements: any): Promise<any> => {
    try {
        //https://reqres.in/api/users
        const resp = await adminInstance.post('/products', postedObjectWithElements);
        //const resp = await adminInstance.post('/api/users', postedObjectWithElements);
        console.log('post resp', resp);
    } catch (err) {
        console.log(err);
    }

   // return resp;
};

export const deleteProduct = async (id: number): Promise<any> => {
    const resp = await adminInstance.delete(`/products/${id}`);
    console.log('del resp', resp);
    //return resp;
};
