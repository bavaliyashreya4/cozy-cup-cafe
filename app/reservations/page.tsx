"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitReservation } from "@/app/actions/reservation";
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  numberOfGuests: z.number().min(1, "At least 1 guest required"),
  specialRequests: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof schema>;

export default function ReservationsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value.toString());
      }
    });

    try {
      const result = await submitReservation(null, formData);
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

  // Ensure date cannot be in the past
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-cream-soft pt-32 pb-24 text-mocha-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading italic text-5xl md:text-6xl mb-4">Make a Reservation</h1>
          <div className="h-1 w-24 bg-gold-accent mx-auto mb-6"></div>
          <p className="text-lg text-brown-medium font-light tracking-wide">
            Reserve your table for an unforgettable experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-beige-warm"
        >
          {submitResult && (
            <div className={`mb-8 p-4 rounded-lg flex items-center ${
              submitResult.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
            }`}>
              <p className="font-medium">{submitResult.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-brown-medium mb-2 flex items-center gap-2">
                  <User size={16} /> Full Name
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

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-brown-medium mb-2 flex items-center gap-2">
                  <Mail size={16} /> Email Address
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

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-brown-medium mb-2 flex items-center gap-2">
                  <Phone size={16} /> Phone Number
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  className={`w-full px-4 py-3 rounded-lg border bg-beige-warm/20 focus:ring-2 focus:ring-gold-accent focus:outline-none transition-colors ${
                    errors.phone ? "border-red-500" : "border-beige-warm"
                  }`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-brown-medium mb-2 flex items-center gap-2">
                  <Users size={16} /> Number of Guests
                </label>
                <input
                  {...register("numberOfGuests", { valueAsNumber: true })}
                  type="number"
                  min="1"
                  max="20"
                  className={`w-full px-4 py-3 rounded-lg border bg-beige-warm/20 focus:ring-2 focus:ring-gold-accent focus:outline-none transition-colors ${
                    errors.numberOfGuests ? "border-red-500" : "border-beige-warm"
                  }`}
                  placeholder="2"
                />
                {errors.numberOfGuests && <p className="mt-1 text-sm text-red-500">{errors.numberOfGuests.message}</p>}
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-brown-medium mb-2 flex items-center gap-2">
                  <Calendar size={16} /> Date
                </label>
                <input
                  {...register("date")}
                  type="date"
                  min={today}
                  className={`w-full px-4 py-3 rounded-lg border bg-beige-warm/20 focus:ring-2 focus:ring-gold-accent focus:outline-none transition-colors ${
                    errors.date ? "border-red-500" : "border-beige-warm"
                  }`}
                />
                {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>}
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-brown-medium mb-2 flex items-center gap-2">
                  <Clock size={16} /> Time
                </label>
                <input
                  {...register("time")}
                  type="time"
                  min="08:00"
                  max="21:30"
                  className={`w-full px-4 py-3 rounded-lg border bg-beige-warm/20 focus:ring-2 focus:ring-gold-accent focus:outline-none transition-colors ${
                    errors.time ? "border-red-500" : "border-beige-warm"
                  }`}
                />
                {errors.time && <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>}
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-brown-medium mb-2 flex items-center gap-2">
                <MessageSquare size={16} /> Special Requests (Optional)
              </label>
              <textarea
                {...register("specialRequests")}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-beige-warm bg-beige-warm/20 focus:ring-2 focus:ring-gold-accent focus:outline-none transition-colors"
                placeholder="Any allergies, special occasions, or seating preferences?"
              ></textarea>
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
              {isSubmitting ? "Processing..." : "Confirm Reservation"}
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
