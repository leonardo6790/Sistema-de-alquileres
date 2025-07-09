import "../create_bill/create_bill.styles.css";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import SellerNavbar from "../../components/navbar_seller/navbar_seller.component"
import { Link } from "react-router-dom";
    

const Invoice = () => {
  const invoiceRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const [client, setClient] = useState({
    name: "",
    id: "",
  });

  const [items, setItems] = useState([{ name: "", price: "" }]);

  const handleAddItem = () => {
    setItems([...items, { name: "", price: "" }]);
  };

  const handleChangeItem = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

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

  const total = items.reduce((sum, i) => sum + Number(i.price || 0), 0);

  return (

    <>
    <SellerNavbar/>
    
    <div className="invoice-wrapper">
      <div ref={invoiceRef} className="invoice-card">
        <p className="invoice-title">FACTURA</p>

        <div className="invoice-form-group">
          {isGeneratingPDF ? (
            <>
              <p><strong>Cliente:</strong> {client.name}</p>
              <p><strong>Cédula:</strong> {client.id}</p>
            </>
          ) : (
            <>
              <label>Nombre del Cliente:</label>
              <input
                type="text"
                value={client.name}
                onChange={(e) =>
                  setClient({ ...client, name: e.target.value })
                }
              />
              <label>Cédula:</label>
              <input
                type="text"
                value={client.id}
                onChange={(e) =>
                  setClient({ ...client, id: e.target.value })
                }
              />
            </>
          )}
        </div>

        <div className="invoice-products">
          <div className="invoice-products-header">Productos</div>
          {items.map((item, index) => (
            <div className="invoice-product-row" key={index}>
              {isGeneratingPDF ? (
                <>
                  <p>{item.name}</p>
                  <p>${Number(item.price).toFixed(2)}</p>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={item.name}
                    onChange={(e) =>
                      handleChangeItem(index, "name", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Precio"
                    value={item.price}
                    onChange={(e) =>
                      handleChangeItem(index, "price", e.target.value)
                    }
                  />
                </>
              )}
            </div>
          ))}
          {!isGeneratingPDF && (
            <button className="invoice-add-btn" onClick={handleAddItem}>
              + Agregar Producto
            </button>
          )}
        </div>

        <div className="invoice-total">
          <strong>Total:</strong> ${total.toFixed(2)}
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
