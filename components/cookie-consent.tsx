"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    setShowConsent(false);
  };

  if (!isMounted || !showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#161C28] text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          <Link href="/contents/cookie-notice" className="underline ml-2 hover:text-gray-300">
            Learn more
          </Link>
        </p>
        <div className="flex items-center gap-4 shrink-0">
          <Button
            onClick={acceptConsent}
            className="bg-white text-[#120174] hover:bg-gray-200 px-6 py-2 rounded-md"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
