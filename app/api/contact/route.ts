import Joi from "joi";
import { type NextRequest, NextResponse } from "next/server";

const contactSchema = Joi.object({
  name: Joi.string().trim().min(1).max(100).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 1 character",
    "string.max": "Name must not exceed 100 characters",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address",
    "string.empty": "Email is required",
  }),
  message: Joi.string().trim().min(1).max(5000).required().messages({
    "string.empty": "Message is required",
    "string.min": "Message must be at least 1 character",
    "string.max": "Message must not exceed 5000 characters",
  }),
  interests: Joi.array().items(Joi.string()).optional().default([]),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { error, value } = contactSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const fieldErrors: Record<string, string> = {};
      for (const detail of error.details) {
        const field = detail.path.join(".");
        if (!fieldErrors[field]) {
          fieldErrors[field] = detail.message;
        }
      }

      return NextResponse.json(
        { success: false, errors: fieldErrors },
        { status: 400 },
      );
    }

    // Placeholder: log the validated payload
    // In production, connect to an email service (Resend / nodemailer / etc.)
    console.log("[Contact Form Submission]", {
      ...value,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message received. Thank you for reaching out!",
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("[Contact Form Error]", err);
    return NextResponse.json(
      {
        success: false,
        errors: { _form: "Something went wrong. Please try again later." },
      },
      { status: 500 },
    );
  }
}
