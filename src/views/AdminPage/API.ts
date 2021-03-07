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

export interface UpdatedProductTypes {
	title?: string,
	price?: number,
	description?: string,
	image?: string,
	category?: string
}

//export type UpdatedProductTypes = Record<string, string | number>;

export const updateProduct = async (data: ProductData, updateObj: UpdatedProductTypes): Promise<any> => {

    const respData = await adminInstance.patch(`/products/${data.id}`, updateObj);
    console.log('respData', respData);
    //return respData;
};

export const addNewProduct = async (): Promise<any> => {
    const resp = await adminInstance.post('/products');
    return resp;
};

export const deleteProduct = async (id: number): Promise<any> => {
    const resp = await adminInstance.delete(`/products/${id}`);
    return resp;
};