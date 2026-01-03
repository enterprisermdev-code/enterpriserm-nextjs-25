"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type PopupContactProps = {
  triggerLabel?: string;
  accessKey?: string; // Web3Forms public access key
  redirectUrl?: string; // URL to download after success (e.g., templateDocPath)
  className?: string;
  bouncifyApiKey?: string; // Bouncify API key for email validation
};

export function PopupContact({
  triggerLabel = "Download free template",
  accessKey = "9a86aa73-ae35-4ea0-8a1f-f546aa5105e2",
  redirectUrl,
  className,
  bouncifyApiKey = process.env.NEXT_PUBLIC_BOUNCIFY_API_KEY,
}: PopupContactProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [emailValidation, setEmailValidation] = useState<{
    isValidating: boolean;
    isValid: boolean | null;
    message: string | null;
  }>({
    isValidating: false,
    isValid: null,
    message: null,
  });
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      setTimeout(() => firstInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  async function validateEmail(email: string): Promise<boolean> {
    if (!bouncifyApiKey || bouncifyApiKey.trim() === '' || !email) return true; // Skip validation if no API key or email

    setEmailValidation({ isValidating: true, isValid: null, message: null });

    try {
      const response = await fetch(
        `https://api.bouncify.io/v1/verify?apikey=${encodeURIComponent(bouncifyApiKey)}&email=${encodeURIComponent(email)}`
      );
      
      const data = await response.json();
      
      if (!response.ok) {
        setEmailValidation({
          isValidating: false,
          isValid: false,
          message: data.result || "Email validation service error",
        });
        return false;
      }

      if (data.success) {
        const isValid = data.result === "deliverable";
        setEmailValidation({
          isValidating: false,
          isValid,
          message: isValid ? "Email is valid" : data.message || "Email is not deliverable",
        });
        return isValid;
      } else {
        setEmailValidation({
          isValidating: false,
          isValid: false,
          message: data.result || "Email validation failed",
        });
        return false;
      }
    } catch (err: any) {
      setEmailValidation({
        isValidating: false,
        isValid: false,
        message: "Unable to verify email address",
      });
      // Prevent submission if validation service is unavailable
      return false;
    }
  }

  async function handleEmailValidation() {
    const email = emailInputRef.current?.value;
    if (email && email.includes("@")) {
      await validateEmail(email);
    } else {
      setEmailValidation({ isValidating: false, isValid: null, message: null });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "");

    // Validate email with Bouncify if API key is provided
    if (bouncifyApiKey && bouncifyApiKey.trim() !== '' && email) {
      const isEmailValid = await validateEmail(email);
      if (!isEmailValid) {
        setError("Please enter a valid email address that can receive emails.");
        setLoading(false);
        return;
      }
    }

    const payload: Record<string, string> = {
      access_key: accessKey,
      subject: "Template Download",
      from_name: `${formData.get("first_name") || ""} ${formData.get("last_name") || ""}`.trim(),
      first_name: String(formData.get("first_name") || ""),
      last_name: String(formData.get("last_name") || ""),
      email: email,
      page_url: window.location.href,
      submission_page: window.location.pathname,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        // Optional: redirect to the template download path if provided
        if (redirectUrl) {
          // Give a small delay for UX before redirect
          setTimeout(() => {
            window.location.href = redirectUrl;
          }, 500);
        }
      } else {
        setError(data.message || "Submission failed. Please try again.");
      }
    } catch (err: any) {
      setError(err?.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={className}>
      <Button
        className="bg-[#120174] hover:bg-[#0d0050] text-white px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
        onClick={() => setOpen(true)}
      >
        {triggerLabel}
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          aria-labelledby="popup-contact-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Dialog */}
          <div
            ref={dialogRef}
            className="relative z-101 w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gray-200"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 id="popup-contact-title" className="text-xl font-bold text-gray-900">
                    Get your free template
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Enter your details and we’ll start the download.
                  </p>
                </div>
                <button
                  aria-label="Close"
                  className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {!success ? (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First Name</label>
                      <input
                        ref={firstInputRef}
                        type="text"
                        name="first_name"
                        required
                        placeholder="Jane"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#120174] focus:border-[#120174] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        placeholder="Doe"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#120174] focus:border-[#120174] outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <input
                        ref={emailInputRef}
                        type="email"
                        name="email"
                        required
                        placeholder="jane@example.com"
                        className={`mt-1 w-full rounded-lg border px-3 py-2 pr-10 text-sm focus:ring-2 focus:ring-[#120174] focus:border-[#120174] outline-none ${
                          emailValidation.isValid === false 
                            ? "border-red-300 bg-red-50" 
                            : emailValidation.isValid === true 
                            ? "border-green-300 bg-green-50"
                            : "border-gray-300"
                        }`}
                        onChange={() => {
                          // Reset validation when user types
                          if (emailValidation.isValid !== null) {
                            setEmailValidation({ isValidating: false, isValid: null, message: null });
                          }
                        }}
                      />
                      {emailValidation.isValidating && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-1">
                          <svg className="animate-spin h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </div>
                      )}
                      {!emailValidation.isValidating && emailValidation.isValid === true && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-1">
                          <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                      {!emailValidation.isValidating && emailValidation.isValid === false && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-1">
                          <svg className="h-4 w-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {emailValidation.message && (
                      <p className={`mt-1 text-xs ${emailValidation.isValid ? "text-green-600" : "text-red-600"}`}>
                        {emailValidation.message}
                      </p>
                    )}
                  </div>

                  {error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}

                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                      By submitting, you agree to our privacy policy.
                    </p>
                    <Button
                      type="submit"
                      className="bg-[#120174] hover:bg-[#0d0050] text-white rounded-full px-5 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading || emailValidation.isValidating || (!!bouncifyApiKey && emailValidation.isValid === false)}
                    >
                      {loading ? "Submitting…" : emailValidation.isValidating ? "Validating…" : "Download"}
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="mt-6">
                  <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                    <p className="text-sm text-green-700">
                      Thanks! Your download should start shortly.
                    </p>
                    {!redirectUrl && (
                      <p className="mt-2 text-xs text-gray-600">
                        No file link configured. Close this dialog to continue.
                      </p>
                    )}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button
                      className="bg-[#120174] hover:bg-[#0d0050] text-white rounded-full px-5"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
