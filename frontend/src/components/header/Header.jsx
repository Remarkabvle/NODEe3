import React from "react";
import { useGetProfileQuery } from "../../context/api/userApi";

const Header = () => {
  const { data } = useGetProfileQuery();

  return (
    <header className="bg-blue-800 p-4 flex justify-between items-center">
      <form className="flex flex-1">
        <input
          type="text"
          className="w-full max-w-sm p-2 rounded-lg outline-none"
          placeholder="Search..."
        />
      </form>
      <div className="text-white text-lg font-semibold flex space-x-4">
        <span>{data?.payload?.fname}</span>
        <span>{data?.payload?.lname}</span>
      </div>
    </header>
  );
};

export default Header;
