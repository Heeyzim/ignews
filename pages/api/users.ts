import { NextApiRequest, NextApiResponse } from 'next';
export default (request: NextApiRequest, response: NextApiResponse) => {
    const users =[
        { id: 1, name: 'Luigi'},
        { id: 2, name: 'Yohana'},
        { id: 3, name: 'Giovanne'}
    ];

    return response.json(users);
}