import React, { useCallback } from "react";

export default function Cookies() {
  // Define callback functions for accept and decline actions
  const handleAccept = useCallback(() => {
    document.cookie =
      "cookie_consent=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    window.location.href = "https://example.com";
  }, []);

  const handleDecline = useCallback(() => {
    window.location.href = "https://example.com/declined";
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0">
      <div className="w-full bg-black bg-opacity-60 p-8 shadow-md">
        <div className="flex flex-row justify-center items-center gap-10">
          <div>
            <h1 className="text-2xl text-white font-semibold mb-4">
              Cookie Consent
            </h1>
            <p className="mb-4 text-white">
              We use cookies to improve user experience on our website. By
              clicking "Accept", you agree to our use of cookies.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <button
                id="acceptBtn"
                onClick={handleAccept}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Accept
              </button>
              <button
                id="declineBtn"
                onClick={handleDecline}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
