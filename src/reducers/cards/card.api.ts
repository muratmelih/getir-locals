import serverApi from "../../api/server-api";
import { CardType } from "../../types/card";
import { Product } from "../../types/product";


export const getAll = async () => {
    try {
        return serverApi.get(`/card`)
            .then(response => {

                if (response) {
                    return response;
                } else {
                    return null;
                }
            })
            .catch((err:any) => {
                return err;
            });
    } catch (err:any) {
        throw new Error(err);
    }
}

export const update = async (data:CardType) => {
    try {
        return serverApi.post(`/card/update`,{...data})
            .then(response => {

                if (response) {
                    return response;
                } else {
                    return null;
                }
            })
            .catch((err:any) => {
                return err;
            });
    } catch (err:any) {
        throw new Error(err);
    }
}


export const add = async (data:CardType) => {
    try {
        return serverApi.post(`/card/add`,{...data})
            .then(response => {

                if (response) {
                    return response;
                } else {
                    return null;
                }
            })
            .catch((err:any) => {
                return err;
            });
    } catch (err:any) {
        throw new Error(err);
    }
}



export const deleteItem = async (data:CardType) => {
    try {
        return serverApi.delete(`/card/?slug=${data.slug}`)
            .then(response => {

                if (response) {
                    return response;
                } else {
                    return null;
                }
            })
            .catch((err:any) => {
                return err;
            });
    } catch (err:any) {
        throw new Error(err);
    }
}