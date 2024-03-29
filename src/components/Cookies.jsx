/* eslint-disable react/no-unescaped-entities */
import { useCallback } from "react";
import { useStore } from "../hooks/useStore";

export default function Cookies() {
  const { clickCookie, setClickCookie } = useStore((state) => ({
    clickCookie: state.clickCookie,
    setClickCookie: state.setClickCookie,
  }));

  // Define callback functions for accept and decline actions

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const handleAccept = useCallback(() => {
    setCookie("cookie_consent", "accepted", 30);
    const d = new Date();
    setCookie("date", d.toUTCString(), 30);
    let width = screen.width;
    let device = width >= 1440 ? "desktop" : "mobile";
    setCookie("device", device, 30);
    // document.cookie =
    //   "cookie_consent=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    // window.location.href = "https://example.com";
    setClickCookie(true);
  }, []);

  const handleDecline = useCallback(() => {
    setClickCookie(true);
    // window.location.href = "https://example.com/declined";
  }, []);

  let checkedCookie = getCookie("cookie_consent");
  console.log(clickCookie);

  return (
    <>
      {checkedCookie == "accepted" || clickCookie ? (
        <></>
      ) : (
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
      )}
    </>
  );
}
