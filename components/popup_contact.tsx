"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type PopupContactProps = {
  triggerLabel?: string;
  accessKey?: string; // Web3Forms public access key
  redirectUrl?: string; // URL to download after success (e.g., templateDocPath)
  className?: string;
};

export function PopupContact({
  triggerLabel = "Download free template",
  accessKey = "9a86aa73-ae35-4ea0-8a1f-f546aa5105e2",
  redirectUrl,
  className,
}: PopupContactProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, string> = {
      access_key: accessKey,
      subject: "Template Download",
      from_name: `${formData.get("first_name") || ""} ${formData.get("last_name") || ""}`.trim(),
      first_name: String(formData.get("first_name") || ""),
      last_name: String(formData.get("last_name") || ""),
      email: String(formData.get("email") || ""),
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
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
            className="relative z-[101] w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gray-200"
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
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#120174] focus:border-[#120174] outline-none"
                    />
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
                      className="bg-[#120174] hover:bg-[#0d0050] text-white rounded-full px-5"
                      disabled={loading}
                    >
                      {loading ? "Submitting…" : "Download"}
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
