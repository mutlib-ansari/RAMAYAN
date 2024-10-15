// // import React, { useState } from "react";

// // const BuyProductModal = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   // Function to handle opening and closing the modal
// //   const toggleModal = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen">
// //       {/* Button to trigger modal */}
// //       <button
// //         className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
// //         onClick={toggleModal}
// //       >
// //         Buy Product
// //       </button>

// //       {/* Modal */}
// //       {isOpen && (
// //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// //           <div className="bg-white rounded-lg shadow-lg w-1/3">
// //             <div className="px-6 py-4">
// //               <h2 className="text-xl font-bold mb-4">Buy Product</h2>

// //               <form>
// //                 <div className="mb-4">
// //                   <label className="block text-gray-700 text-sm font-bold mb-2">
// //                     Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     placeholder="Enter your name"
// //                     className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
// //                   />
// //                 </div>
// //                 <div className="mb-4">
// //                   <label className="block text-gray-700 text-sm font-bold mb-2">
// //                     Address
// //                   </label>
// //                   <input
// //                     type="text"
// //                     placeholder="Enter your address"
// //                     className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
// //                   />
// //                 </div>

// //                 <div className="mb-4">
// //                   <label className="block text-gray-700 text-sm font-bold mb-2">
// //                     Quantity
// //                   </label>
// //                   <input
// //                     type="number"
// //                     min="1"
// //                     placeholder="Enter quantity"
// //                     className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
// //                   />
// //                 </div>

// //                 <div className="flex justify-end">
// //                   <button
// //                     type="button"
// //                     className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 mr-2"
// //                     onClick={toggleModal}
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded "
// //                   >
// //                     Confirm Purchase
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default BuyProductModal;

// import React from 'react';
// import { Input, Button, Form, Checkbox } from 'antd';
// import { CreditCardOutlined } from '@ant-design/icons';
// // import 'antd/dist/antd.css';

// const CheckoutForm = () => {
//   return (
//     <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
//       <Form
//         name="checkout"
//         layout="vertical"
//         initialValues={{ remember: true }}
//       >
//         {/* Contact Information */}
//         <h2 className="text-2xl font-bold mb-4">Contact</h2>
//         <Form.Item
//           label="Email or mobile phone number"
//           name="email"
//           rules={[{ required: true, message: 'Please input your email!' }]}
//         >
//           <Input placeholder="Email or phone" />
//         </Form.Item>
//         <Checkbox className="mb-4">Email me with news and offers</Checkbox>

//         {/* Delivery Information */}
//         <h2 className="text-2xl font-bold mb-4">Delivery</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <Form.Item
//             label="First name"
//             name="firstName"
//             rules={[{ required: true, message: 'Please input your first name!' }]}
//           >
//             <Input placeholder="First name" />
//           </Form.Item>
//           <Form.Item
//             label="Last name"
//             name="lastName"
//             rules={[{ required: true, message: 'Please input your last name!' }]}
//           >
//             <Input placeholder="Last name" />
//           </Form.Item>
//         </div>
//         <Form.Item
//           label="Address"
//           name="address"
//           rules={[{ required: true, message: 'Please input your address!' }]}
//         >
//           <Input placeholder="Address" />
//         </Form.Item>
//         <Form.Item
//           label="Apartment, suite, etc."
//           name="apartment"
//         >
//           <Input placeholder="Apartment, suite, etc. (optional)" />
//         </Form.Item>

//         <div className="grid grid-cols-2 gap-4">
//           <Form.Item
//             label="City"
//             name="city"
//             rules={[{ required: true, message: 'Please input your city!' }]}
//           >
//             <Input placeholder="City" />
//           </Form.Item>
//           <Form.Item
//             label="State"
//             name="state"
//             rules={[{ required: true, message: 'Please input your state!' }]}
//           >
//             <Input placeholder="State" />
//           </Form.Item>
//         </div>

//         <Form.Item
//           label="Phone"
//           name="phone"
//           rules={[{ required: true, message: 'Please input your phone number!' }]}
//         >
//           <Input placeholder="Phone" />
//         </Form.Item>

//         {/* Payment Information */}
//         <h2 className="text-2xl font-bold mb-4">Payment</h2>
//         <Form.Item
//           label="Card Number"
//           name="cardNumber"
//           rules={[{ required: true, message: 'Please input your card number!' }]}
//         >
//           <Input prefix={<CreditCardOutlined />} placeholder="Card Number" />
//         </Form.Item>
//         <div className="grid grid-cols-2 gap-4">
//           <Form.Item
//             label="Expiration Date"
//             name="expiration"
//             rules={[{ required: true, message: 'Please input the expiration date!' }]}
//           >
//             <Input placeholder="MM / YY" />
//           </Form.Item>
//           <Form.Item
//             label="Security Code"
//             name="securityCode"
//             rules={[{ required: true, message: 'Please input the security code!' }]}
//           >
//             <Input placeholder="CVV" />
//           </Form.Item>
//         </div>
//         <Form.Item
//           label="Name on Card"
//           name="cardName"
//           rules={[{ required: true, message: 'Please input the name on the card!' }]}
//         >
//           <Input placeholder="Name on card" />
//         </Form.Item>

//         {/* Submit Button */}
//         <Form.Item>
//           <Button type="primary" htmlType="submit" className="w-full">
//             Pay Now
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default CheckoutForm;

import React, { useEffect } from 'react';
import { Input, Button, Form, Checkbox, Tooltip } from 'antd';
import { CreditCardOutlined, InfoCircleOutlined } from '@ant-design/icons';
import stachuImage from '../Assests/stachu.png'
// import 'antd/dist/antd.css';

const CheckoutForm = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);



  return (
    <div className="bg-white p-8  mt-16  ">
      <Form
        name="checkout"
        layout="vertical"
        initialValues={{ remember: true }}
      >
        {/* Contact Information */}
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <Form.Item
          label="Email or mobile phone number"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email or phone" />
        </Form.Item>
        <Checkbox className="mb-4">Email me with news and offers</Checkbox>

        {/* Delivery Information */}
        <h2 className="text-2xl font-bold mb-4">Delivery</h2>
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="First name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
        </div>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item
          label="Apartment, suite, etc."
          name="apartment"
        >
          <Input placeholder="Apartment, suite, etc. (optional)" />
        </Form.Item>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: 'Please input your city!' }]}
          >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            label="State"
            name="state"
            rules={[{ required: true, message: 'Please input your state!' }]}
          >
            <Input placeholder="State" />
          </Form.Item>
        </div>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input placeholder="Phone" />
        </Form.Item>

        {/* Payment Information */}
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        <Form.Item
          label="Card Number"
          name="cardNumber"
          rules={[{ required: true, message: 'Please input your card number!' }]}
        >
          <Input prefix={<CreditCardOutlined />} placeholder="Card Number" />
        </Form.Item>
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Expiration Date"
            name="expiration"
            rules={[{ required: true, message: 'Please input the expiration date!' }]}
          >
            <Input placeholder="MM / YY" />
          </Form.Item>
          <Form.Item
            label="Security Code"
            name="securityCode"
            rules={[{ required: true, message: 'Please input the security code!' }]}
          >
            <Input placeholder="CVV" />
          </Form.Item>
        </div>
        <Form.Item
          label="Name on Card"
          name="cardName"
          rules={[{ required: true, message: 'Please input the name on the card!' }]}
        >
          <Input placeholder="Name on card" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-yellow-500 hover:hover:bg-yellow-600">
            Pay Now
          </Button> 
        </Form.Item>
      </Form>
    </div>
  );
};

// Order Summary Component
const OrderSummary = () => {
  return (
    <div className="bg-white p-6  mt-14 border-l-2 ">
      {/* Product Summary */}
      <div className="flex items-center justify-between mb-4">
        <img
          src={stachuImage}
          alt="product"
          className="w-16 h-24 object-cover rounded"
        />
        <div className="ml-4">
          <h3 className="text-base font-semibold">CONTRASTING PANELED DRESS</h3>
          <p className="text-sm text-gray-500"></p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-semibold">₹7040.00</p>
        </div>
      </div>

      
      <div className="mb-4">
        <Input
          placeholder="Discount code"
          suffix={<Button type="default">Apply</Button>}
        />
      </div>

      {/* Subtotal and Shipping */}
      <div className="mb-2">
        <div className="flex justify-between text-sm">
          <p>Subtotal</p>
          <p>₹7040.00</p>
        </div>
        <div className="flex justify-between items-center text-sm">
          <p>
            Shipping{' '}
            <Tooltip title="Enter your shipping address to calculate shipping costs">
              <InfoCircleOutlined />
            </Tooltip>
          </p>
          <p className="text-gray-500">Enter shipping address</p>
        </div>
      </div>

      
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center font-bold text-lg">
          <p>Total</p>
          <p>INR ₹7040.00</p>
        </div>
      </div>
    </div>
  );
};

// Full Checkout Page Combining Both Components
const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-white p-8 flex justify-center items-start">
      <div className="grid grid-cols-1 lg:grid-cols-2  w-full max-w-6xl">
        {/* Left side - Checkout Form */}
        <CheckoutForm />

        {/* Right side - Order Summary */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
