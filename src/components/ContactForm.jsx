"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { configDotenv } from "dotenv";
import { dotenv } from "dotenv";

// Load environment variables from .env file
// dotenv.config();


const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,     // ✅ Replace with your EmailJS service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,    // ✅ Replace with your EmailJS template ID
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,      // ✅ Replace with your EmailJS public key
      );

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Toaster />
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-200 text-md font-medium mb-1.5">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="border border-gray-600 bg-black p-2 rounded-md text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-white focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-200 text-md font-medium mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="border border-gray-600 bg-black p-2 rounded-md text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-white focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-gray-200 text-md font-medium mb-1.5">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="border border-gray-600 bg-black p-2 rounded-md text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-white focus:outline-none"
            placeholder="Subject"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-200 text-md font-medium mb-1.5">Message</label>
          <textarea
            name="message"
            id="message"
            required
            className="border border-gray-600 bg-black p-2 min-h-32 max-h-48 rounded-md text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-white focus:outline-none"
            placeholder="Write your message here..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black py-2 font-medium rounded-md hover:bg-gray-300 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
