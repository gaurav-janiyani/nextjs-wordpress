import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://sampleblog.ts2.in/wp-json/contact-form/v1/submit",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <section className="bg-slate-700">
        <SiteHeader className="header-contact" />
      </section>
      <section>
        <div className="container mx-auto lg:max-w-4xl">
          <h1 className="text-4xl text-center text-slate-700 py-8">
            Contact Us
          </h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={formData.message}
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
