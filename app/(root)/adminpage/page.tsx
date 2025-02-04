"use client";

import { useUser } from "@clerk/nextjs";

const AdminPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isSignedIn) {
    return <div>You are not signed in</div>;
  }
  return (
    <>
      <div>AdminPage</div>
      <div className="text-2xl flex flex-col items-center justify-center">
        <div>
          {user?.firstName} {user?.lastName}
        </div>
        <div>{user?.emailAddresses[0]?.emailAddress}</div>
      </div>
    </>
  );
};

export default AdminPage;
