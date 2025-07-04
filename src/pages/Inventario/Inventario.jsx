import { useState } from "react";
import "../Inventario/Inventario.css";
import SellerNavbar from "../../components/navbar_seller/navbar_seller.component";

const exampleProducts = [
  { id: 1, name: "Camisa Blanca", price: 25000, size: "M", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880"},
  { id: 2, name: "Pantalón Azul", price: 45000, size: "L", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 3, name: "Chaqueta Negra", price: 90000, size: "XL", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 4, name: "Zapatos Café", price: 120000, size: "42", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 5, name: "Gorra Roja", price: 15000, size: "U", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 6, name: "Medias Rayadas", price: 5000, size: "U", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 7, name: "Camisa Blanca", price: 25000, size: "M", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 8, name: "Pantalón Azul", price: 45000, size: "L", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 9, name: "Chaqueta Negra", price: 90000, size: "XL", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 10, name: "Zapatos Café", price: 120000, size: "42", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 11, name: "Gorra Roja", price: 15000, size: "U", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 12, name: "Medias Rayadas", price: 5000, size: "U", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 13, name: "Camisa Blanca", price: 25000, size: "M", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 14, name: "Pantalón Azul", price: 45000, size: "L", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 15, name: "Chaqueta Negra", price: 90000, size: "XL", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 16, name: "Zapatos Café", price: 120000, size: "42", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 17, name: "Gorra Roja", price: 15000, size: "U", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
  { id: 18, name: "Medias Rayadas", price: 5000, size: "U", image: "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880" },
];

const Overlay = ({ children, onClose }) => (
  <div className="overlay" onClick={onClose}>
    <div className="modal" onClick={e => e.stopPropagation()}>
      {children}
    </div>
  </div>
);

export default function Inventory() {
  const [products, setProducts] = useState(exampleProducts);
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({ name: "", price: "", size: "", image: "" });

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      size: product.size,
      image: product.image
    });
    setShowEdit(true);
  };

  const handleSaveEdit = () => {
    const updatedProducts = products.map(p =>
      p.id === currentProduct.id ? { ...currentProduct, ...formData, price: parseFloat(formData.price) } : p
    );
    setProducts(updatedProducts);
    setShowEdit(false);
  };

  const handleCreate = () => {
    const newProduct = {
      id: Date.now(),
      name: formData.name,
      price: parseFloat(formData.price),
      size: formData.size,
      image: formData.image || "https://s3.amazonaws.com/click2dress-images/products/282/large/London.jpg?1533938880"
    };
    setProducts([...products, newProduct]);
    setShowCreate(false);
    setFormData({ name: "", price: "", size: "", image: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <SellerNavbar />
      <div className="inventory-wrapper">
        <main className="inventory-container">
          <div className="inventory-grid">
            {products.map(product => (
              <div key={product.id} className="card">
                <img src={product.image} alt={product.name} className="card-image" />
                <h2 className="card-title">{product.name}</h2>
                <p>Precio: ${product.price}</p>
                <p>Talla: {product.size}</p>
                <button className="btn-edit" onClick={() => handleEdit(product)}>Editar</button>
              </div>
            ))}
          </div>
          <button onClick={() => {
            setFormData({ name: "", price: "", size: "", image: "" });
            setShowCreate(true);
          }} className="btn-create">
            Crear Producto
          </button>
        </main>

        {showEdit && (
          <Overlay onClose={() => setShowEdit(false)}>
            <h2 className="modal-title">Editar Producto</h2>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" className="input" />
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Precio" className="input" />
            <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="Talla" className="input" />
            <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="URL Imagen" className="input" />
            <div className="modal-buttons">
              <button onClick={handleSaveEdit} className="btn-save">Guardar</button>
              <button onClick={() => setShowEdit(false)} className="btn-cancel">Cancelar</button>
            </div>
          </Overlay>
        )}

        {showCreate && (
          <Overlay onClose={() => setShowCreate(false)}>
            <h2 className="modal-title">Crear Producto</h2>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" className="input" />
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Precio" className="input" />
            <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="Talla" className="input" />
            <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="URL Imagen" className="input" />
            <div className="modal-buttons">
              <button onClick={handleCreate} className="btn-save">Crear</button>
              <button onClick={() => setShowCreate(false)} className="btn-cancel">Cancelar</button>
            </div>
          </Overlay>
        )}

        <aside className="sidebar">
          <h3>Filtrar por</h3>
          <ul>
            <li>Talla</li>
            <li>Precio</li>
            <li>Nombre</li>
          </ul>
        </aside>
      </div>
    </>
  );
}
