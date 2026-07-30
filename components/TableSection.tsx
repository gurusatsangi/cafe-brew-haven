"use client";

import { useState } from "react";
import TableCard from "./TableCard";
import { tables, TableType } from "@/data/tables";
import ReservationDrawer from "@/components/ReservationDrawer";

export default function TableSection() {
  const [selectedTable, setSelectedTable] = useState<TableType | null>(null);

  const handleBook = (id: number) => {
    const table = tables.find((t) => t.id === id);

    if (table) {
      setSelectedTable(table);
    }
  };

  return (
    <section
      id="book-table"
      className="mx-auto max-w-7xl px-5 py-20"
    >
      <div className="mb-12 text-center">
        <p className="text-orange-600 font-semibold uppercase tracking-widest">
          Reservation
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Book Your Perfect Table
        </h2>

        <p className="mt-4 text-gray-500">
          Choose the table that suits your occasion.
        </p>
      </div>

      <div className="space-y-6">
        {tables.map((table) => (
          <TableCard
            key={table.id}
            {...table}
            onBook={handleBook}
          />
        ))}
      </div>

      {/* Reservation Drawer */}
        <ReservationDrawer
        table={selectedTable}
        open={selectedTable !== null}
        onClose={() => setSelectedTable(null)}
        />
    </section>
  );
}