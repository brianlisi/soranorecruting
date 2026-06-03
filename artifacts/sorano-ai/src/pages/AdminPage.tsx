import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  useListIntakeSubmissions,
  getListIntakeSubmissionsQueryKey,
  setAuthTokenGetter,
} from "@workspace/api-client-react";

const STORAGE_KEY = "sorano_admin_key";

// Register the auth token getter at module load so it is in place before the
// query fires on first render. The getter reads sessionStorage live, so it
// always reflects the current key (including after login/logout).
setAuthTokenGetter(() =>
  typeof window === "undefined" ? null : sessionStorage.getItem(STORAGE_KEY),
);

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

const thStyle: React.CSSProperties = {
  textAlign: "left",
  fontFamily: "'Inter', sans-serif",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(240,237,232,0.5)",
  padding: "0 16px 12px",
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  color: "#f0ede8",
  padding: "14px 16px",
  borderTop: "1px solid rgba(240,237,232,0.08)",
  verticalAlign: "top",
};

function formatDate(value: string): string {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function AdminPage() {
  const [key, setKey] = useState<string | null>(() =>
    typeof window === "undefined" ? null : sessionStorage.getItem(STORAGE_KEY),
  );
  const [pending, setPending] = useState("");

  const query = useListIntakeSubmissions({
    query: {
      queryKey: getListIntakeSubmissionsQueryKey(),
      enabled: Boolean(key),
      retry: false,
    },
  });

  const status =
    query.error && typeof query.error === "object" && "status" in query.error
      ? (query.error as { status?: number }).status
      : undefined;
  const unauthorized = status === 401;

  useEffect(() => {
    if (unauthorized) {
      sessionStorage.removeItem(STORAGE_KEY);
      setKey(null);
    }
  }, [unauthorized]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const value = pending.trim();
    if (!value) return;
    sessionStorage.setItem(STORAGE_KEY, value);
    setKey(value);
    setPending("");
    query.refetch();
  }

  function handleLogout() {
    sessionStorage.removeItem(STORAGE_KEY);
    setKey(null);
  }

  const submissions = query.data ?? [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        padding: "3rem 1.5rem 5rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "rgba(240,237,232,0.7)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            ← Back to Sorano AI
          </Link>
          {key && (
            <button
              onClick={handleLogout}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(240,237,232,0.7)",
                background: "transparent",
                border: "1px solid rgba(240,237,232,0.2)",
                borderRadius: "8px",
                padding: "8px 14px",
                cursor: "pointer",
              }}
            >
              Sign out
            </button>
          )}
        </div>

        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            fontWeight: 700,
            color: "#f0ede8",
            margin: "0 0 0.5rem",
          }}
        >
          Intake submissions
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            color: "rgba(240,237,232,0.55)",
            margin: "0 0 2.5rem",
          }}
        >
          {key
            ? `${submissions.length} ${submissions.length === 1 ? "request" : "requests"} received.`
            : "Enter the admin password to view requests."}
        </p>

        {!key ? (
          <form
            onSubmit={handleLogin}
            style={{
              background: "#f0ede8",
              borderRadius: "16px",
              padding: "clamp(1.5rem, 4vw, 2.25rem)",
              maxWidth: "420px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
            }}
          >
            <label style={labelStyle} htmlFor="adminKey">
              Admin password
            </label>
            <input
              id="adminKey"
              type="password"
              style={inputStyle}
              placeholder="••••••••"
              value={pending}
              onChange={(e) => setPending(e.target.value)}
              autoFocus
            />
            {unauthorized && (
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: "#b4452b",
                  marginTop: "8px",
                }}
              >
                Incorrect password. Please try again.
              </div>
            )}
            <button
              type="submit"
              style={{
                width: "100%",
                marginTop: "1.25rem",
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: "#0f0f0f",
                background: "#f5a623",
                border: "none",
                borderRadius: "10px",
                padding: "13px 20px",
                cursor: "pointer",
              }}
            >
              View submissions
            </button>
          </form>
        ) : query.isLoading ? (
          <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(240,237,232,0.6)" }}>
            Loading…
          </p>
        ) : query.isError && !unauthorized ? (
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#e0795f" }}>
            Could not load submissions. Please try again.
          </p>
        ) : submissions.length === 0 ? (
          <div
            style={{
              border: "1px dashed rgba(240,237,232,0.2)",
              borderRadius: "14px",
              padding: "3rem 1.5rem",
              textAlign: "center",
              fontFamily: "'Inter', sans-serif",
              color: "rgba(240,237,232,0.5)",
              fontSize: "15px",
            }}
          >
            No submissions yet.
          </div>
        ) : (
          <div
            style={{
              overflowX: "auto",
              border: "1px solid rgba(240,237,232,0.1)",
              borderRadius: "14px",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "760px" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Received</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Contact</th>
                  <th style={thStyle}>Company</th>
                  <th style={thStyle}>Size</th>
                  <th style={thStyle}>What they need</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id}>
                    <td style={{ ...tdStyle, whiteSpace: "nowrap", color: "rgba(240,237,232,0.6)" }}>
                      {formatDate(s.createdAt)}
                    </td>
                    <td style={{ ...tdStyle, fontWeight: 600 }}>{s.name}</td>
                    <td style={tdStyle}>
                      <a
                        href={`mailto:${s.email}`}
                        style={{ color: "#f5a623", textDecoration: "none" }}
                      >
                        {s.email}
                      </a>
                      {s.mobile && (
                        <div style={{ color: "rgba(240,237,232,0.6)", marginTop: "4px" }}>
                          {s.mobile}
                        </div>
                      )}
                    </td>
                    <td style={tdStyle}>
                      {s.company || "—"}
                      {s.role && (
                        <div style={{ color: "rgba(240,237,232,0.6)", marginTop: "4px" }}>
                          {s.role}
                        </div>
                      )}
                    </td>
                    <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>{s.companySize}</td>
                    <td style={{ ...tdStyle, minWidth: "260px", lineHeight: 1.6 }}>
                      {s.projectDetails}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
