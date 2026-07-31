"use client";

import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { TableType } from "@/data/tables";
import { siteConfig } from "@/lib/site";

type Props = {
  table: TableType | null;
  open: boolean;
  onClose: () => void;
};

export default function ReservationDrawer({
  table,
  open,
  onClose,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [request, setRequest] = useState("");
  const [step, setStep] = useState(1);

  if (!open || !table) return null;

  const reservationFee = table.reservationFee;
  const convenienceFee = reservationFee > 0 ? 20 : 0;

  const gst = Math.round((reservationFee + convenienceFee) * 0.05);

  const total = reservationFee + convenienceFee + gst;

  const handleClose = () => {
    setStep(1);
    setName("");
    setPhone("");
    setGuests(2);
    setDate("");
    setTime("");
    setRequest("");
    onClose();
    };
    const handleWhatsAppBooking = () => {
        const message = `🍽️ *Table Reservation Request*

        *Table:* ${table.name}
        *Guests:* ${guests}

        *Customer Details*

        *Name:* ${name}
        *Phone:* ${phone}

        *Reservation Details*

        *Date:* ${date}
        *Time:* ${time}

        *Special Request:*
        ${request || "None"}

        ────────────────

        *Booking Summary*

        Reservation Fee: ${
            reservationFee === 0 ? "FREE" : `₹${reservationFee}`
        }

        Convenience Fee: ₹${convenienceFee}

        GST: ₹${gst}

        *Total:* ${total === 0 ? "FREE" : `₹${total}`}`;

        const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

        handleClose();
        };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={handleClose}
      />

      {/* Drawer */}
      <aside className="fixed inset-y-0 right-0 z-50 flex h-dvh w-full max-w-md flex-col bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold">
            Reserve Table
          </h2>

            <button onClick={handleClose}>
            <X size={24} />
          </button>
        </div>

        {/* Scroll Area */}
        <div className="flex-1 overflow-y-auto p-5 pb-8">

          <h3 className="text-3xl font-bold">
            {table.name}
          </h3>

          <p className="mt-3 text-gray-500">
            👥 {table.capacity}
          </p>

          <p className="mt-1 text-gray-500">
            📍 {table.location}
          </p>

          {/* Fee */}
          <div className="mt-6 rounded-2xl bg-orange-50 p-5">
            <p className="font-semibold">
              Reservation Fee
            </p>

            <p className="mt-2 text-3xl font-bold text-orange-600">
              {reservationFee === 0
                ? "FREE"
                : `₹${reservationFee}`}
            </p>
          </div>

          {/* Name */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          {/* Phone */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          {/* Guests */}
          <div className="mt-6">
            <label className="mb-3 block text-sm font-medium">
              Number of Guests
            </label>

            <div className="flex items-center justify-between rounded-xl border border-gray-300 p-3">

              <button
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="rounded-lg bg-gray-100 p-2"
              >
                <Minus size={18} />
              </button>

              <span className="text-lg font-semibold">
                {guests}
              </span>

              <button
                onClick={() => setGuests((g) => g + 1)}
                className="rounded-lg bg-orange-600 p-2 text-white"
              >
                <Plus size={18} />
              </button>

            </div>
          </div>

          {/* Date & Time */}
          <div className="mt-6 grid grid-cols-2 gap-4">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Time
              </label>

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

          </div>
        {step === 1 && (
        <>
            {/* Special Request */}
            <div className="mt-6">
                <label className="mb-2 block text-sm font-medium">
                Special Request
                </label>

                <textarea
                rows={4}
                placeholder="Birthday decoration, anniversary setup..."
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none"
                />
            </div>
            </>
            )}

        </div>
        {step === 1 && (
          <div className="border-t bg-white p-5">
            <button
              onClick={() => {
                if (!name.trim() || !phone.trim() || !date || !time) {
                  alert("Please fill all required fields.");
                  return;
                }

                setStep(2);
              }}
              className="w-full rounded-xl bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700"
            >
              Continue
            </button>
          </div>
        )}

        {/* Bottom Summary */}
            {step === 2 && (
            <div className="border-t bg-white p-5">

                <h3 className="mb-5 text-lg font-bold">
                Booking Summary
                </h3>

                <div className="space-y-3">

                <div className="flex justify-between">
                    <span>Reservation Fee</span>
                    <span>
                    {reservationFee === 0
                        ? "FREE"
                        : `₹${reservationFee}`}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Convenience Fee</span>
                    <span>₹{convenienceFee}</span>
                </div>

                <div className="flex justify-between">
                    <span>GST</span>
                    <span>₹{gst}</span>
                </div>

                <div className="flex justify-between border-t pt-3 text-lg font-bold">
                    <span>Total</span>
                    <span>
                    {total === 0 ? "FREE" : `₹${total}`}
                    </span>
                </div>

                </div>

                <button
                onClick={() => setStep(1)}
                className="mt-5 w-full rounded-xl border border-gray-300 py-3 font-semibold"
                >
                Back
                </button>

                <button
                onClick={handleWhatsAppBooking}
                className="mt-3 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                Reserve via WhatsApp
                </button>

            </div>
            )}

      </aside>
    </>
  );
}