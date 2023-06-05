import { useEffect, useState } from 'react';
import { getUserList, getUserPosts } from '../utils/api';

interface User {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

const UserPosts = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      const userList: User[] = await getUserList();
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  const handleUserClick = async (userId: number, userName: string) => {
    setSelectedUser(userId);
    setUserName(userName);
    const posts: Post[] = await getUserPosts(userId);
    setUserPosts(posts);
  };

  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <div className="mt-10 mb-10 flex">
        {users.map((user) => (
          <span
            key={user.id}
            className={`p-2 cursor-pointer ${
              selectedUser === user.id ? 'bg-gray-200 text-black' : ''
            }`}
            onClick={() => handleUserClick(user.id, user.name)}
          >
            {user.name}
          </span>
        ))}
      </div>

      {selectedUser && (
        <div>
          <h2 className="text-xl font-semibold mt-4">{userName}&#39;s Posts</h2>
          <table className="table-auto mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Body</th>
              </tr>
            </thead>
            <tbody>
              {userPosts.map((post) => (
                <tr key={post.id}>
                  <td className="border px-4 py-2">{post.id}</td>
                  <td className="border px-4 py-2">{post.title}</td>
                  <td className="border px-4 py-2">{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserPosts;