"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepter tous"
      declineButtonText="Refuser"
      enableDeclineButton
      cookieName="yourAppCookieConsent"
      style={{ background: "#2B373B", color: "#FFF" }}
      buttonStyle={{
        backgroundColor: "#4CAF50",
        color: "#FFF",
        fontSize: "14px",
      }}
      declineButtonStyle={{
        backgroundColor: "#f44336",
        color: "#FFF",
        fontSize: "14px",
      }}
      expires={365}
      onAccept={() => {
        // Add functionality when user accepts cookies
        console.log("Cookies acceptés");
      }}
      onDecline={() => {
        // Add functionality when user declines cookies
        console.log("Cookies refusés");
      }}
    >
      Notre site utilise des cookies pour améliorer votre expérience de
      navigation. En continuant à utiliser notre site, vous acceptez notre
      utilisation de cookies conformément à notre{" "}
      <Link href="/privacy-policy">politique de confidentialité</Link>.
    </CookieConsent>
  );
}
