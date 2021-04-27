import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Raphael' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Doe' },
  ];
  return response.json(users);
};
