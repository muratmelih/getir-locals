import jsonApi from "../../api/json-api";


export const getAllItems = async () => {
    try {
        return jsonApi.get(`/items`)
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