import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
