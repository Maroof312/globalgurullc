import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Global Guru LLC</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1>404 – Page Not Found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <Link to="/" style={{ color: "#0066cc" }}>
          Go back to Home
        </Link>
      </div>
    </>
  );
}
