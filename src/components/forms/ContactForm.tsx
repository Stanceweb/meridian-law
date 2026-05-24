"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { MATTER_TYPES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  fullName:         z.string().min(2, "Please enter your full name"),
  email:            z.string().email("Please enter a valid email address"),
  phone:            z.string().optional(),
  matterType:       z.string().min(1, "Please select a matter type"),
  message:          z.string().min(20, "Please provide more detail (at least 20 characters)"),
  preferredContact: z.enum(["email", "phone", "either"]),
});

type FormData = z.infer<typeof schema>;

interface FieldProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, id, error, required, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-primary mb-1.5">
        {label}
        {required && <span aria-hidden="true" className="text-red-600 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError: boolean) => cn(
  "w-full px-4 py-3 rounded border text-base text-text-primary bg-white",
  "placeholder:text-text-muted transition-colors duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-1",
  hasError
    ? "border-red-400 bg-red-50"
    : "border-surface-border hover:border-text-muted"
);

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [refId] = useState(() => `ML-${Date.now().toString(36).toUpperCase()}`);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setServerError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, refId }),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setServerError(true);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white border border-surface-border rounded-sm"
        aria-live="polite"
      >
        <CheckCircle className="h-12 w-12 text-green-600 mb-5" aria-hidden="true" />
        <h3 className="font-serif text-2xl font-semibold text-text-primary mb-3">
          Your inquiry has been received.
        </h3>
        <p className="text-text-secondary mb-4 max-w-sm leading-relaxed">
          We&apos;ll be in touch within one business day. A confirmation has been
          sent to your email address.
        </p>
        <p className="text-xs text-text-muted">Reference: {refId}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Full Name" id="fullName" error={errors.fullName?.message} required>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            placeholder="Jane Smith"
            className={inputClass(!!errors.fullName)}
            {...register("fullName")}
          />
        </Field>

        <Field label="Email Address" id="email" error={errors.email?.message} required>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="jane@company.com"
            className={inputClass(!!errors.email)}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Phone Number" id="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="+1 (212) 555-0100"
            className={inputClass(!!errors.phone)}
            {...register("phone")}
          />
        </Field>

        <Field label="Matter Type" id="matterType" error={errors.matterType?.message} required>
          <select
            id="matterType"
            aria-required="true"
            aria-describedby={errors.matterType ? "matterType-error" : undefined}
            className={cn(inputClass(!!errors.matterType), "cursor-pointer")}
            defaultValue=""
            {...register("matterType")}
          >
            <option value="" disabled>Select an area of law</option>
            {MATTER_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="How can we help?" id="message" error={errors.message?.message} required>
        <textarea
          id="message"
          rows={5}
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Briefly describe your matter and what you're hoping to achieve..."
          className={cn(inputClass(!!errors.message), "resize-y min-h-[120px]")}
          {...register("message")}
        />
      </Field>

      {/* Preferred Contact */}
      <fieldset>
        <legend className="text-sm font-medium text-text-primary mb-3">
          Preferred contact method
        </legend>
        <div className="flex flex-wrap gap-6">
          {(["email", "phone", "either"] as const).map((val) => (
            <label key={val} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value={val}
                defaultChecked={val === "either"}
                className="w-4 h-4 accent-brand-navy"
                {...register("preferredContact")}
              />
              <span className="text-sm text-text-secondary capitalize">{val}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Server error */}
      {serverError && (
        <div role="alert" className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <div>
        <Button
          type="submit"
          variant="gold"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="w-full sm:w-auto justify-center"
        >
          {isSubmitting ? "Sending…" : "Submit Inquiry"}
        </Button>

        <p className="mt-4 text-xs text-text-muted leading-relaxed max-w-md">
          Submitting this form does not create an attorney-client relationship.
          Confidentiality is not guaranteed until an engagement letter is signed.
        </p>
      </div>
    </form>
  );
}
