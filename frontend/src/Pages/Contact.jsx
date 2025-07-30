import React, { useState } from "react";
import './CSS/Contact.css'; // Ensure this import is correct


export default function Contact() {
 const [form, setForm] = useState({
   fullName: "",
   email: "",
   phone: "",
   subject: "",
   message: "",
 });


 const handleChange = (e) => {
   setForm({ ...form, [e.target.name]: e.target.value });
 };


 const handleSubmit = (e) => {
   e.preventDefault();
   // Here you would handle sending the message (e.g., API call)
   alert("Message sent!");
   setForm({
     fullName: "",
     email: "",
     phone: "",
     subject: "",
     message: "",
   });
 };


 return (
   <div className="contact-container">
     <div className="contact-paper">
       <h4 className="contact-title">Contact Us</h4>
       <form onSubmit={handleSubmit} className="contact-form">
         <input
           type="text"
           name="fullName"
           value={form.fullName}
           onChange={handleChange}
           placeholder="Full Name"
           required
           className="contact-field"
         />
         <input
           type="email"
           name="email"
           value={form.email}
           onChange={handleChange}
           placeholder="Email"
           required
           className="contact-field"
         />
         <input
           type="tel"
           name="phone"
           value={form.phone}
           onChange={handleChange}
           placeholder="Phone Number"
           className="contact-field"
         />
         <select
           name="subject"
           value={form.subject}
           onChange={handleChange}
           className="contact-field"
           required
         >
           <option value="">Select Subject</option>
           <option value="order_inquiry">Order Inquiry</option>
           <option value="product_inquiry">Product Inquiry</option>
           <option value="shipping_inquiry">Shipping Inquiry</option>
           <option value="feedback">Feedback</option>
         </select>
         <textarea
           name="message"
           value={form.message}
           onChange={handleChange}
           placeholder="Message"
           required
           className="contact-field"
         />
         <button type="submit" className="contact-button">
           Send Message
         </button>
       </form>
     </div>
   </div>
 );
}
