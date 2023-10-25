import ProductManager from './productManager.js';

const manager = new ProductManager('./products.json');

manager.addProduct({
    title: 'product',
    description: 'pepe',
    price: 200,
    thumbnail: 'image',
    code: 'AAA111',
    stock: 10,
});

const products = manager.getProducts();
console.log(products);

const productById = manager.getProductById(1);
console.log(productById);

manager.updateProduct(1, { description: 'Nueva Descripcion' });
console.log(manager.getProducts());

console.log(manager.getProducts());
