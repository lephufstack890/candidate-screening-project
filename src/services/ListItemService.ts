import * as httpRequest from '../utils/httpRequest';

export const list = async () => {
    try {
        const res = await httpRequest.get('list');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
