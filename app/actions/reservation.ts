"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  numberOfGuests: z.number().min(1, "At least 1 guest required"),
  specialRequests: z.string().optional(),
});

export async function submitReservation(prevState: unknown, formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      numberOfGuests: parseInt(formData.get("numberOfGuests") as string, 10),
      specialRequests: formData.get("specialRequests") as string,
    };

    const validatedData = reservationSchema.parse(data);

    await prisma.reservation.create({
      data: validatedData,
    });

    return { success: true, message: "Reservation confirmed! We look forward to seeing you." };
  } catch (error) {
    console.error("Reservation Error:", error);
    return { success: false, message: "Failed to submit reservation. Please try again." };
  }
}
