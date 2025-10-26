import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

// ✅ Create a new category
router.post("/", async (req, res) => {
  try {
    const { name, description, parentCategoryId, isActive } = req.body;

    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const category = new Category({
      name,
      description,
      parentCategoryId,
      isActive,
      slug,
    });

    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get category by ID
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Update category
router.put("/:id", async (req, res) => {
  try {
    const { name, description, parentCategoryId, isActive } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        parentCategoryId,
        isActive,
        slug: name.toLowerCase().replace(/\s+/g, "-"),
      },
      { new: true }
    );

    if (!updatedCategory)
      return res.status(404).json({ message: "Category not found" });

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Delete category
router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory)
      return res.status(404).json({ message: "Category not found" });
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;