import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-2 text-center mb-6">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>
      <form
        action=""
        className="space-y-6  "
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 space-y-2 sm:space-y-0">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-gray-200 text-md font-medium mb-1.5"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-600 bg-[#334155] p-3 w-full rounded-md text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              placeholder="Kolawole Adetola"
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-200 text-md font-medium mb-1.5"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-600 bg-[#334155] p-3 w-full rounded-md text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              placeholder="Kolawole@example.com"
              autoComplete="email"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all"
        >
          Submit
        </button>
      </form>
      <div className="flex justify-center mt-6">
        <p className="text-sm text-gray-400">
          Or reach out to me on{" "}
          <a
            href="https://twitter.com/kolawole_adetola"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
