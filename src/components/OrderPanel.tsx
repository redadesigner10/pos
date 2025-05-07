import React from 'react';
import { useOrder } from '../contexts/OrderContext';
import { MinusCircle, PlusCircle, Trash2, CreditCard, Printer } from 'lucide-react';

const OrderPanel: React.FC = () => {
  const { 
    orderItems, 
    removeFromOrder, 
    updateQuantity, 
    subtotal,
    tax,
    total
  } = useOrder();

  const handlePrintReceipt = () => {
    // Create a new window for the receipt
    const receiptWindow = window.open('', '_blank', 'width=400,height=600');
    
    if (!receiptWindow) {
      alert('Please allow popups to print receipt');
      return;
    }
    
    // Generate receipt HTML
    const receiptHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Receipt</title>
        <style>
          body {
            font-family: 'Courier New', monospace;
            margin: 0;
            padding: 20px;
            max-width: 300px;
            margin: 0 auto;
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 1px dashed #000;
            padding-bottom: 10px;
          }
          .item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
          }
          .totals {
            margin-top: 20px;
            border-top: 1px dashed #000;
            padding-top: 10px;
          }
          .total-line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
          }
          .grand-total {
            font-weight: bold;
            font-size: 1.2em;
            margin-top: 10px;
            border-top: 1px dashed #000;
            padding-top: 10px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 0.8em;
          }
          @media print {
            body {
              width: 80mm;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>Restaurant POS</h2>
          <p>Order Receipt</p>
          <p>${new Date().toLocaleString()}</p>
        </div>
        
        <div class="items">
          ${orderItems.map(item => `
            <div class="item">
              <span>${item.quantity}x ${item.name}</span>
              <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          `).join('')}
        </div>
        
        <div class="totals">
          <div class="total-line">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div class="total-line">
            <span>Tax (10%):</span>
            <span>$${tax.toFixed(2)}</span>
          </div>
          <div class="grand-total">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
          </div>
        </div>
        
        <div class="footer">
          <p>Thank you for your business!</p>
        </div>
        
        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `;
    
    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close();
  };

  return (
    <div className="bg-white shadow-lg w-80 h-screen flex flex-col">
      <div className="p-4 bg-gray-800 text-white">
        <h2 className="text-xl font-bold">Current Order</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {orderItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Your order is empty
          </div>
        ) : (
          <ul className="space-y-4">
            {orderItems.map(item => (
              <li key={item.id} className="border-b pb-3">
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-red-700"
                    >
                      <MinusCircle size={18} />
                    </button>
                    
                    <span className="font-medium">{item.quantity}</span>
                    
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-green-700"
                    >
                      <PlusCircle size={18} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromOrder(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="p-4 border-t">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Tax (10%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <button 
            className="w-full py-2 bg-green-600 text-white rounded flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors"
            disabled={orderItems.length === 0}
            onClick={() => alert('Payment processed successfully!')}
          >
            <CreditCard size={18} />
            <span>Process Payment</span>
          </button>
          
          <button 
            className="w-full py-2 bg-blue-600 text-white rounded flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
            disabled={orderItems.length === 0}
            onClick={handlePrintReceipt}
          >
            <Printer size={18} />
            <span>Print Receipt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;