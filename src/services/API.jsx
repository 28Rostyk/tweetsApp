import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://647a162da455e257fa644b4c.mockapi.io/',
});

export const getAllTweets = async (page = 1, limit) => {
  console.log(limit);
  const { data } = await instance.get('/users', {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const updateTweets = async (id, newData) => {
  const { data } = await instance.put(`/users/${id}`, newData);
  return data;
};
