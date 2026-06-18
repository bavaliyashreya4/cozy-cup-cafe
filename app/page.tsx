"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

export default function Home() {
  const featuredDrinks = [
    {
      name: "Caramel Cloud Latte",
      description: "Espresso with steamed milk, sweet caramel syrup, and a cloud-like milk foam.",
      price: "₹250",
    },
    {
      name: "Brown Sugar Espresso",
      description: "Double shot of espresso shaken with brown sugar and topped with oat milk.",
      price: "₹280",
    },
    {
      name: "Vanilla Mist Cappuccino",
      description: "Classic cappuccino infused with real Madagascar vanilla bean mist.",
      price: "₹220",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-mocha-dark overflow-hidden">
        <Image src="/images/hero_bg.png" alt="Cozy Cup Interior" fill className="object-cover opacity-50 z-0" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-mocha-dark/60 to-transparent z-10" />
        
        <motion.div 
          className="relative z-20 text-center text-cream-soft px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-heading italic text-7xl md:text-9xl mb-6 tracking-wider">
            Cozy Cup
          </h1>
          <p className="text-xl md:text-3xl font-light tracking-widest text-beige-warm/90 uppercase">
            With Your Soul
          </p>
          <div className="mt-12">
            <Link 
              href="/menu" 
              className="inline-block border border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-white px-8 py-3 rounded-full transition-all duration-300 tracking-widest uppercase text-sm"
            >
              Explore Menu
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Info Strip */}
      <section className="bg-brown-medium text-cream-soft py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
            <div className="flex items-center space-x-3">
              <MapPin className="text-gold-accent" size={24} />
              <span className="text-lg tracking-wide">CG Road, Navrangpura, Ahmedabad</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-gold-accent" size={24} />
              <span className="text-lg tracking-wide">Open Daily 8:00 AM – 10:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drinks Section */}
      <section className="py-24 bg-cream-soft text-mocha-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading italic mb-4">Signature Blends</h2>
            <div className="h-1 w-24 bg-gold-accent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredDrinks.map((drink, index) => (
              <motion.div
                key={drink.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-beige-warm"
              >
                <div className="h-48 bg-beige-warm/30 rounded-xl mb-6 relative overflow-hidden group-hover:shadow-inner transition-shadow">
                  <Image src={`/images/drink_${index + 1}.png`} alt={drink.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-heading italic mb-3 group-hover:text-gold-accent transition-colors">{drink.name}</h3>
                <p className="text-brown-medium mb-6 leading-relaxed text-sm">{drink.description}</p>
                <div className="text-xl font-medium text-gold-accent">{drink.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Preview */}
      <section className="py-24 bg-beige-warm text-mocha-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading italic mb-6">A Place With Soul</h2>
              <p className="text-lg leading-relaxed mb-8 text-brown-medium">
                Nestled in the heart of Ahmedabad, Cozy Cup is more than just a café—it&apos;s a sanctuary. 
                We believe that every cup of coffee should be an experience, crafted not just with the 
                finest beans, but with intention, warmth, and soul.
              </p>
              <Link 
                href="/our-story" 
                className="inline-flex items-center space-x-2 text-gold-accent font-medium hover:text-brown-medium transition-colors uppercase tracking-widest text-sm"
              >
                <span>Read Our Story</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="h-[500px] bg-mocha-dark rounded-2xl relative overflow-hidden shadow-2xl"
            >
              <Image src="/images/atmosphere.png" alt="Cafe Atmosphere" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
