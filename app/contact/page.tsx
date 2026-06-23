"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactMessage } from "@/app/actions/contact";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const result = await submitContactMessage(null, formData);
      setSubmitResult(result);
      if (result.success) {
        reset();
      }
    } catch {
      setSubmitResult({ success: false, message: "An unexpected error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-soft pt-32 pb-24 text-mocha-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading italic text-5xl md:text-6xl mb-4">Get in Touch</h1>
          <div className="h-1 w-24 bg-gold-accent mx-auto mb-6"></div>
          <p className="text-lg text-brown-medium font-light tracking-wide">
            We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-heading italic mb-6">Visit Us</h2>
              <ul className="space-y-6 text-brown-medium">
                <li className="flex items-start space-x-4">
                  <div className="bg-mocha-dark p-3 rounded-full text-gold-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading italic text-mocha-dark mb-1">Address</h3>
                    <p>CG Road, Navrangpura<br/>Ahmedabad, Gujarat<br/>India 380009</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-mocha-dark p-3 rounded-full text-gold-accent shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading italic text-mocha-dark mb-1">Hours</h3>
                    <p>Open Daily<br/>8:00 AM – 10:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-heading italic mb-6">Contact Info</h2>
              <ul className="space-y-6 text-brown-medium">
                <li className="flex items-start space-x-4">
                  <div className="bg-mocha-dark p-3 rounded-full text-gold-accent shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading italic text-mocha-dark mb-1">Phone</h3>
                    <p>+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-mocha-dark p-3 rounded-full text-gold-accent shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading italic text-mocha-dark mb-1">Email</h3>
                    <p>hello@cozycup.cafe</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-heading italic mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="bg-mocha-dark w-12 h-12 flex items-center justify-center rounded-full text-gold-accent hover:bg-gold-accent hover:text-white transition-colors shadow-sm font-medium">
                  IG
                </a>
                <a href="#" className="bg-mocha-dark w-12 h-12 flex items-center justify-center rounded-full text-gold-accent hover:bg-gold-accent hover:text-white transition-colors shadow-sm font-medium">
                  FB
                </a>
                <a href="#" className="bg-mocha-dark w-12 h-12 flex items-center justify-center rounded-full text-gold-accent hover:bg-gold-accent hover:text-white transition-colors shadow-sm font-medium">
                  TW
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-beige-warm h-fit"
          >
            <h2 className="text-3xl font-heading italic mb-6">Send a Message</h2>
            
            {submitResult && (
              <div className={`mb-6 p-4 rounded-lg flex items-center ${
                submitResult.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
              }`}>
                <p className="font-medium">{submitResult.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brown-medium mb-2">
                  Full Name
                </label>
                <input
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-lg border bg-beige-warm/20 focus:ring-2 focus:ring-gold-accent focus:outline-none transition-colors ${
                    errors.name ? "border-red-500" : "border-beige-warm"
                  }`}
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-medium mb-2">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border bg-beige-warm/20 focus:ring-2 focus:ring-gold-accent focus:outline-none transition-colors ${
                    errors.email ? "border-red-500" : "border-beige-warm"
                  }`}
                  placeholder="jane@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border bg-beige-warm/20 focus:ring-2 focus:ring-gold-accent focus:outline-none transition-colors ${
                    errors.message ? "border-red-500" : "border-beige-warm"
                  }`}
                  placeholder="How can we help you today?"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg text-white font-medium uppercase tracking-widest transition-all duration-300 ${
                  isSubmitting 
                    ? "bg-mocha-dark/70 cursor-not-allowed" 
                    : "bg-mocha-dark hover:bg-gold-accent shadow-md hover:shadow-lg"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
