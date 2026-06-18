"use client";

import { motion } from "framer-motion";
import { Coffee, Heart, Users } from "lucide-react";

export default function OurStoryPage() {
  const values = [
    {
      icon: Coffee,
      title: "Quality",
      description: "We source our beans from ethical, sustainable farms, roasting them to perfection to bring out their unique, deep flavors.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Cozy Cup was built to be a gathering place. A space where ideas are born, friendships are forged, and everyone is welcome.",
    },
    {
      icon: Heart,
      title: "Soul",
      description: "Every cup is poured with love. We believe that coffee is more than a beverage; it's an experience that nourishes the spirit.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-soft pt-32 pb-24 text-mocha-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading italic text-5xl md:text-7xl mb-6">Our Story</h1>
          <div className="h-1 w-24 bg-gold-accent mx-auto mb-6"></div>
          <p className="text-xl text-brown-medium font-light italic tracking-wide">
            &quot;A vision born from the love of coffee and connection.&quot;
          </p>
        </motion.div>

        {/* Story Text */}
        <motion.div 
          className="prose prose-lg mx-auto text-brown-medium mb-24 space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <p className="leading-loose text-lg">
            It started with a simple idea: that coffee should be more than just a morning ritual. It should be a moment of pause, a breath of warmth, and a connection to the soul. In 2020, amidst the bustling streets of Ahmedabad, Cozy Cup opened its doors with a singular mission—to create a sanctuary for coffee lovers.
          </p>
          <p className="leading-loose text-lg">
            We spent months perfecting our signature roasts, collaborating with local artisans to design a space that felt like home. The rich aroma of roasted beans, the soft hum of conversation, and the warm, earthy tones of our café were carefully curated to foster a sense of belonging.
          </p>
          <p className="leading-loose text-lg">
            Today, Cozy Cup is a thriving community. Whether you&apos;re here for a quiet morning with a book, a lively meeting with colleagues, or simply a perfectly crafted caramel cloud latte, we invite you to sit back, take a sip, and let the coffee speak to your soul.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading italic mb-4">Our Core Values</h2>
            <div className="h-0.5 w-16 bg-beige-warm mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-mocha-dark flex items-center justify-center text-gold-accent mb-6 shadow-md hover:scale-110 transition-transform duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-heading italic mb-4">{value.title}</h3>
                  <p className="text-brown-medium leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
