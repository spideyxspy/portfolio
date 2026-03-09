"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SampleModalTest = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Framer Motion Modal Test</h2>

      {/* Grid of items */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <motion.div
            key={item}
            className="bg-blue-500 text-white p-6 rounded-lg cursor-pointer text-center"
            whileHover={{ scale: 1.05, rotate: 2 }}
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white p-10 rounded-lg text-black"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // click outside to close
            >
              <h3 className="text-xl font-bold mb-2">{selectedItem}</h3>
              <p>This is a test modal using Framer Motion!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SampleModalTest;
