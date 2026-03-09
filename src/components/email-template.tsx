import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({
  fullName,
  email,
  message,
}: EmailTemplateProps) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      padding: "30px",
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        background: "#ffffff",
        borderRadius: "10px",
        padding: "30px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#111", marginBottom: "10px" }}>
        📩 New Message From Portfolio
      </h2>

      <p style={{ color: "#555", marginBottom: "25px" }}>
        Someone contacted you through your portfolio website.
      </p>

      <div
        style={{
          background: "#f9fafb",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <p>
          <strong>Name:</strong> {fullName}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>

      <div
        style={{
          background: "#f9fafb",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <p style={{ marginBottom: "8px" }}>
          <strong>Message:</strong>
        </p>
        <p style={{ color: "#333", lineHeight: "1.6" }}>{message}</p>
      </div>

      <hr style={{ margin: "30px 0", borderColor: "#eee" }} />

      <p style={{ fontSize: "12px", color: "#888" }}>
        This email was sent from your portfolio contact form.
      </p>
    </div>
  </div>
);
