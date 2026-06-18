"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/data/menu";

const categories = ["All", "Hot Drinks", "Cold Drinks", "Food"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? menuData 
    : menuData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream-soft pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading italic text-5xl md:text-6xl text-mocha-dark mb-4">Our Menu</h1>
          <div className="h-1 w-24 bg-gold-accent mx-auto"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm tracking-wider uppercase font-medium ${
                activeCategory === category
                  ? "bg-mocha-dark text-cream-soft border-mocha-dark shadow-md"
                  : "bg-transparent text-mocha-dark border-mocha-dark/20 hover:border-mocha-dark hover:bg-mocha-dark/5"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-beige-warm/50 group flex flex-col h-full overflow-hidden"
              >
                <div className="relative h-56 w-full overflow-hidden bg-beige-warm/30">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-heading italic text-mocha-dark group-hover:text-gold-accent transition-colors w-3/4">
                      {item.name}
                    </h3>
                    <span className="text-lg font-medium text-gold-accent">{item.price}</span>
                  </div>
                  <div className="w-full h-px bg-beige-warm mb-4"></div>
                  <p className="text-brown-medium text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-dashed border-beige-warm">
                    <span className="text-xs uppercase tracking-widest text-mocha-dark/40 font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>

            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
