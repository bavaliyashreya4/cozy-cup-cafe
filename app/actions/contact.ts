"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

export async function submitContactMessage(prevState: unknown, formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const validatedData = contactSchema.parse(data);

    await prisma.contactMessage.create({
      data: validatedData,
    });

    return { success: true, message: "Thank you! Your message has been received." };
  } catch (error) {
    console.error("Contact Error:", error);
    return { success: true, message: "Thank you! Your message has been received." };
  }
}
