"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setStatus({
        type: "error",
        message: "Please fill all fields.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="bg-[#FFF9F5] min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-24">

        {/* Heading */}

        <div className="text-center">

          <div className="flex justify-center">
            <span className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100 px-8 py-4 shadow-md">

              <span className="text-2xl">📞</span>

              <span className="text-xl font-extrabold uppercase tracking-[0.2em] text-orange-600">
                CONTACT US
              </span>

            </span>
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            We'd Love To
            <br />

            <span className="text-orange-600">
              Hear From You
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
            Have a question, want to reserve a table, or simply say hello?
            Our team is always ready to help you.
          </p>

        </div>

        {/* Contact Section */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Form */}

          <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          <h2 className="text-4xl font-extrabold text-gray-900">
            Send a Message
          </h2>

          <p className="mt-3 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-7"
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-lg text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-lg text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-lg text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-white px-5 py-4 text-lg text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />

              {status.message && (
                <div
                  className={`rounded-xl p-4 text-center font-medium ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-orange-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

            </form>

          </div>

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900">
                📍 Visit Us
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                123 Coffee Street
                <br />
                Downtown, New York
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900">
                📞 Phone
              </h3>

              <p className="mt-3 text-gray-600">
                +1 (234) 567-890
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900">
                ✉ Email
              </h3>

              <p className="mt-3 text-gray-600">
                hello@brewhaven.com
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900">
                🕒 Opening Hours
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Monday – Sunday
                <br />
                8:00 AM – 10:00 PM
              </p>
            </div>

          </div>

        </div>

        {/* Map */}

        <div className="mt-28">

          <h2 className="text-center text-4xl font-bold text-gray-900">
            Find Us
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=Times+Square,+New+York&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            />

          </div>

        </div>

      </section>

    </main>
  );
}