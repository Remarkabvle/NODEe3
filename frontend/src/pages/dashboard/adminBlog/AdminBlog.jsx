import React, { useEffect, useState } from "react";
import { useDeleteBlogsMutation, useGetBlogsQuery } from "../../../context/api/blogApi";
import EditBlog from "../../../components/editBlog/EditBlog";

const AdminBlog = () => {
  const { data } = useGetBlogsQuery();
  const [deleteBlog] = useDeleteBlogsMutation();
  const [currentBlog, setCurrentBlog] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteBlog(id);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [edit]);

  const handleEdit = (el) => {
    setCurrentBlog(el);
    setEdit(true);
  };

  return (
    <div className="p-6">
      {edit && <EditBlog setEdit={setEdit} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.payload?.map((el) => (
          <div key={el._id} className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-xl font-semibold">{el.title}</h3>
            <p className="text-gray-600">{el.desc}</p>
            <div className="flex justify-between mt-4">
              <button className="text-blue-600" onClick={() => handleEdit(el)}>
                Edit
              </button>
              <button className="text-red-600" onClick={() => handleDelete(el._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlog;
