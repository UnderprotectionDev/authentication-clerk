import { currentUser } from "@clerk/nextjs/server";

const Dashboard = async () => {
  const user = await currentUser();

  return (
    <>
      <div className="text-2xl flex flex-col items-center justify-center min-h-screen w-screen">
        <div>
          {user?.firstName} {user?.lastName}
        </div>
        <div>{user?.emailAddresses[0]?.emailAddress}</div>
      </div>
    </>
  );
};

export default Dashboard;
