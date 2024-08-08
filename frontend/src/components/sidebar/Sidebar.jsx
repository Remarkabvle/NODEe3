import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="h-screen bg-gray-900 text-white p-6 flex flex-col justify-between">
      <nav className="space-y-4">
        <NavLink
          to="createBlog"
          className="block py-2 px-4 rounded-md hover:bg-gray-800"
        >
          Blog Create
        </NavLink>
        <NavLink
          to="adminBlog"
          className="block py-2 px-4 rounded-md hover:bg-gray-800"
        >
          Blog Manage
        </NavLink>
      </nav>
      <button className="py-2 px-4 bg-red-600 rounded-md hover:bg-red-500">
        Log out
      </button>
    </aside>
  );
};

export default Sidebar;
