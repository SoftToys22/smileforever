import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Bhavik',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Meet',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Teddy',
      slug: 'teddy',
      category: 'Soft Toys',
      Image: '/Image/image-19.png',
      price: 189,
      countInStock: 10,
      brand: 'LM toys',
      rating: 4.5,
      numReviews: 10,
      description: 'skin-friendly soft toys',
    },
    {
      // _id: '2',
      name: 'Whale',
      slug: 'whale',
      category: 'Soft Toys',
      Image: '/image/image-11.png',
      price: 149,
      countInStock: 0,
      brand: 'LM toys',
      rating: 4.5,
      numReviews: 10,
      description: 'skin-friendly soft toys',
    },
    {
      // _id: '3',
      name: 'Dog',
      slug: 'dog',
      category: 'Soft Toys',
      Image: '/image/image-6.png',
      price: 299,
      countInStock: 10,
      brand: 'LM toys',
      rating: 4.5,
      numReviews: 10,
      description: 'skin-friendly soft toys',
    },
    {
      // _id: '4',
      name: 'Reversible Actopus',
      slug: 'reversible actopus',
      category: 'Soft Toys',
      Image: '/image/image-14.png',
      price: 249,
      countInStock: 10,
      brand: 'LM toys',
      rating: 4.5,
      numReviews: 10,
      description: 'skin-friendly soft toys',
    },
  ],
};
export default data;
