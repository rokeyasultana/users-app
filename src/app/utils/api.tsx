const BASE_URL = 'http://jsonplaceholder.typicode.com';

export const getUserList = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
};

export const getPostList = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  const data = await response.json();
  return data;
};

export const getUserPosts = async (userId: number) => {
  const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
  const data = await response.json();
  return data;
};
