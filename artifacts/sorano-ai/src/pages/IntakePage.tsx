import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "wouter";
import { useCreateIntakeSubmission } from "@workspace/api-client-react";

type IntakeFormValues = {
  name: string;
  email: string;
  company: string;
  role: string;
  projectDetails: string;
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "13px",
  fontWeight: 600,
  color: "#3a352e",
  letterSpacing: "0.02em",
  marginBottom: "8px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  color: "#1a1713",
  background: "#fffdf9",
  border: "1px solid #d9d2c5",
  borderRadius: "10px",
  padding: "12px 14px",
  outline: "none",
  boxSizing: "border-box",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "12px",
  color: "#b4452b",
  marginTop: "6px",
};

export default function IntakePage() {
  const [submitted, setSubmitted] = useState(false);
  const mutation = useCreateIntakeSubmission();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IntakeFormValues>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      projectDetails: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    mutation.mutate(
      {
        data: {
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim() || null,
          role: values.role.trim() || null,
          projectDetails: values.projectDetails.trim(),
        },
      },
      {
        onSuccess: () => setSubmitted(true),
      },
    );
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3.5rem 1.5rem 5rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: "640px" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            color: "rgba(240,237,232,0.7)",
            textDecoration: "none",
            marginBottom: "2rem",
            fontWeight: 500,
          }}
        >
          ← Back to Sorano AI
        </Link>

        <div
          style={{
            background: "#f0ede8",
            borderRadius: "20px",
            padding: "clamp(1.75rem, 4vw, 3rem)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#f5a623",
                  color: "#0f0f0f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  fontWeight: 700,
                  margin: "0 auto 1.5rem",
                }}
              >
                ✓
              </div>
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "#1a1713",
                  margin: "0 0 0.75rem",
                }}
              >
                Thanks — we got it.
              </h1>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "#4a443b",
                  lineHeight: 1.7,
                  margin: "0 auto",
                  maxWidth: "420px",
                }}
              >
                We will review what you need and get back to you with scope,
                timeline, and a fixed price within 24 hours.
              </p>
              <Link
                href="/"
                style={{
                  display: "inline-block",
                  marginTop: "2rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#0f0f0f",
                  background: "#f5a623",
                  borderRadius: "10px",
                  padding: "12px 22px",
                  textDecoration: "none",
                }}
              >
                Back to homepage
              </Link>
            </div>
          ) : (
            <>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#b07d15",
                  marginBottom: "0.75rem",
                }}
              >
                Tell us what you need
              </div>
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#1a1713",
                  lineHeight: 1.2,
                  margin: "0 0 0.75rem",
                }}
              >
                Describe the system you want built.
              </h1>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "#4a443b",
                  lineHeight: 1.6,
                  margin: "0 0 2rem",
                }}
              >
                Give us the outcome you need and we will come back with scope,
                timeline, and a fixed price within 24 hours.
              </p>

              <form onSubmit={onSubmit} noValidate>
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={labelStyle} htmlFor="name">
                    Name *
                  </label>
                  <input
                    id="name"
                    style={inputStyle}
                    placeholder="Your full name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <div style={errorStyle}>{errors.name.message}</div>}
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={labelStyle} htmlFor="email">
                    Work email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    style={inputStyle}
                    placeholder="you@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && <div style={errorStyle}>{errors.email.message}</div>}
                </div>

                <div
                  className="intake-row"
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle} htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      style={inputStyle}
                      placeholder="Company name"
                      {...register("company")}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle} htmlFor="role">
                      Role
                    </label>
                    <input
                      id="role"
                      style={inputStyle}
                      placeholder="e.g. Director of Ops"
                      {...register("role")}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={labelStyle} htmlFor="projectDetails">
                    What do you need? *
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                    placeholder="Describe the reporting workflow, dashboard, or AI system you want built — and the deadline you are working toward."
                    {...register("projectDetails", {
                      required: "Please tell us what you need",
                    })}
                  />
                  {errors.projectDetails && (
                    <div style={errorStyle}>{errors.projectDetails.message}</div>
                  )}
                </div>

                {mutation.isError && (
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: "#b4452b",
                      background: "#f7e3dd",
                      border: "1px solid #e3b6aa",
                      borderRadius: "10px",
                      padding: "12px 14px",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Something went wrong submitting your request. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  style={{
                    width: "100%",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0f0f0f",
                    background: "#f5a623",
                    border: "none",
                    borderRadius: "12px",
                    padding: "15px 24px",
                    cursor: mutation.isPending ? "default" : "pointer",
                    opacity: mutation.isPending ? 0.7 : 1,
                    transition: "opacity 0.15s ease",
                  }}
                >
                  {mutation.isPending ? "Sending…" : "Send My Request"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .intake-row { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}
