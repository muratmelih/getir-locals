import api from "../api/api";


export const getAllCompanies = async () => {
    try {
        return api.get(`/companies`)
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