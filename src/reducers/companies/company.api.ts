import jsonApi from "../../api/json-api";


export const getAll = async () => {
    try {
        return jsonApi.get(`/companies`)
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