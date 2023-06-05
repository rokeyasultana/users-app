'use client'
import UserPosts from './components/UserPosts';

const Home = () => {
  return (
    <div className="p-5">
      <div className="grid h-screen place-items-center">
        <UserPosts />
      </div>
    </div>
  );
};

export default Home;
