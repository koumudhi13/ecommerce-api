import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 200 },
    description: { type: String, required: true, minlength: 50 },
    price: { type: Number, required: true, min: 0 },
    discountPrice: { type: Number, min: 0 },
    stock: { type: Number, default: 0 },
    sku: { type: String, unique: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    images: [{ type: String }],
    specifications: { type: Map, of: String },
    tags: [{ type: String }],
    rating: { type: Number, default: 0, min: 0, max: 5 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);