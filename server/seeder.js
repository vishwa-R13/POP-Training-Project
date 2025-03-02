import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from './data/products.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const importData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    
    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'password123',
      isAdmin: true
    });
    
    // Create regular user
    await User.create({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    });
    
    // Add products
    await Product.insertMany(products);
    
    console.log('Data imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Delete data
const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    
    console.log('Data destroyed successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run script based on command line argument
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}