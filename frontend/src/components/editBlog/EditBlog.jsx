import React from "react";
import { useUpdateBlogsMutation } from "../../context/api/blogApi";

const EditBlog = ({ setEdit }) => {
  const [updateBlog] = useUpdateBlogsMutation();

  const handleSubmit = async (values) => {
    try {
      await updateBlog({ id: blog._id, ...values }).unwrap();
      setEdit(false);
    } catch (error) {
      console.error("Error editing blog:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <form className="space-y-4 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          name="title"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          placeholder="Enter title"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          name="desc"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          placeholder="Enter description"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md shadow-sm"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditBlog;
