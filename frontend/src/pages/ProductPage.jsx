import { useEffect, useState } from "react";
import { useProductStore } from "../store/productStore";
import { useAuthStore } from "../store/authStore";
import { motion } from "framer-motion";
import { Edit, Trash } from "lucide-react";

const ProductPage = () => {
  const {
    products,
    isSuccess,
    addProduct,
    editProduct,
    deleteProduct,
    fetchProducts,
  } = useProductStore();
  const { user, logout } = useAuthStore();
  const [formData, setFormData] = useState({
    name: "",
    price: null,
    addedBy: user.name,
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    if (editingIndex !== null) {
      // Update existing product
      await editProduct(
        formData._id,
        formData.name,
        formData.price,
        formData.addedBy
      );
    } else {
      // Add new product
      await addProduct(formData.name, formData.price, formData.addedBy);
    }
    closeModal();
    fetchProducts(); // Fetch products after adding/updating
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setFormData({ name: "", price: 0, addedBy: user.name });
    setEditingIndex(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);
  return (
    <div className="overflow-x-auto mt-40 mb-5">
      <div className="flex justify-end mb-4">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>

      <table className="w-full bg-gray-800 text-white table-auto">
        <thead>
          <tr>
            <th className="py-2 px-4">Product Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Added By</th>
            <th className="py-2 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id} className="border-t border-gray-700">
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">${product.price}</td>
              <td className="py-2 px-4">{product.addedBy}</td>
              <td className="py-2 px-4 text-center">
                <button
                  onClick={() => {
                    setFormData(product);
                    setEditingIndex(product._id);
                    openModal();
                  }}
                  className="mr-2 px-4 py-1 mb-1 bg-green-500 rounded hover:bg-green-600"
                >
                  <Edit size={15} />
                </button>
                <button
                  onClick={async () => {
                    await deleteProduct(product._id);
                    fetchProducts(); // Fetch products after deleting
                  }}
                  className=" mr-2 px-4 py-1 mb-1 bg-red-500 rounded hover:bg-red-600"
                >
                  <Trash size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Product Form */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Product Form
            </h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              className="p-2 rounded w-full mb-4 bg-gray-800 border border-gray-700 text-white"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="p-2 rounded w-full mb-4 bg-gray-800 border border-gray-700 text-white"
            />
            <button
              onClick={handleSave}
              className="w-full py-2 bg-green-500 rounded hover:bg-green-600 text-white"
            >
              {editingIndex !== null ? "Update" : "Add Product"}
            </button>
            <button
              onClick={closeModal}
              className="mt-4 w-full py-2 bg-red-500 rounded hover:bg-red-600 text-white"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductPage;
