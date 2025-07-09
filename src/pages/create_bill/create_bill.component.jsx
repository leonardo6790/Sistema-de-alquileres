import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../create_bill/create_bill.styles.css";
import SellerNavbar from "../../components/navbar_seller/navbar_seller.component"

const Invoice = () => {
  const invoiceRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const [client, setClient] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    seller: "",
    startDate: "",
    endDate: "",
  });

  const [products, setProducts] = useState([
    { quantity: "", description: "", price: "", paymentDate: "" },
    { quantity: "", description: "", price: "", paymentDate: "" },
    { quantity: "", description: "", price: "", paymentDate: "" },
    { quantity: "", description: "", price: "", paymentDate: "" },
  ]);

  const handleDownloadPDF = () => {
    setIsGeneratingPDF(true);
    setTimeout(() => {
      const input = invoiceRef.current;
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("factura.pdf");
        setIsGeneratingPDF(false);
      });
    }, 200);
  };

  const handleProductChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  return (
    <>
    <SellerNavbar></SellerNavbar>
    <div className="invoice-wrapper">
      <div ref={invoiceRef} className="invoice-card">
        <p className="invoice-title">FACTURA</p>

        <div className="invoice-main-info">
          <div className="invoice-left">
            <label>Nombre:</label>
            <input type="text" value={client.name} onChange={(e) => setClient({ ...client, name: e.target.value })} />

            <label>Correo:</label>
            <input type="email" value={client.email} onChange={(e) => setClient({ ...client, email: e.target.value })} />

            <label>Dirección:</label>
            <input type="text" value={client.address} onChange={(e) => setClient({ ...client, address: e.target.value })} />

            <label>Celular:</label>
            <input type="text" value={client.phone} onChange={(e) => setClient({ ...client, phone: e.target.value })} />
          </div>
          <div className="invoice-right">
            <label>Vendedor:</label>
            <input type="text" value={client.seller} onChange={(e) => setClient({ ...client, seller: e.target.value })} />

            <label>Periodo de alquiler - Inicio:</label>
            <input type="date" value={client.startDate} onChange={(e) => setClient({ ...client, startDate: e.target.value })} />

            <label>Periodo de alquiler - Fin:</label>
            <input type="date" value={client.endDate} onChange={(e) => setClient({ ...client, endDate: e.target.value })} />
          </div>
        </div>

        <div className="invoice-products-section">
          <div className="product-row header">
            <div>Cantidad</div>
            <div>Artículos y Detalles</div>
            <div>Precio</div>
            <div>Fecha de abono</div>
          </div>
          {products.map((product, index) => (
            <div className="product-row" key={index}>
              <input type="text" value={product.quantity} onChange={(e) => handleProductChange(index, "quantity", e.target.value)} />
              <input type="text" value={product.description} onChange={(e) => handleProductChange(index, "description", e.target.value)} />
              <input type="number" value={product.price} onChange={(e) => handleProductChange(index, "price", e.target.value)} />
              <input type="date" value={product.paymentDate} onChange={(e) => handleProductChange(index, "paymentDate", e.target.value)} />
            </div>
          ))}
        </div>

        {!isGeneratingPDF && (
          <div className="invoice-download-btn-wrapper">
            <button className="invoice-download-btn" onClick={handleDownloadPDF}>
              Enviar y Descargar PDF
            </button>
          </div>
        )}
      </div>
    </div>
        </>
  );
};

export default Invoice;
