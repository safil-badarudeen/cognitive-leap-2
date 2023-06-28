const EnglishAlphabetSchema = require("../model/englishAlphabet");
// Import other schema models as needed

const getCategories = async (req, res) => {
    try {
      const categories = [];
  
      // Get categories from EnglishAlphabetSchema
      const schema1Categories = await EnglishAlphabetSchema.distinct("category");
      categories.push(...schema1Categories);
  
    //   // Get categories from Schema2
    //   const schema2Categories = await Schema2.distinct("category");
    //   categories.push(...schema2Categories);
  
      res.status(200).json({ categories });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  module.exports = {getCategories}