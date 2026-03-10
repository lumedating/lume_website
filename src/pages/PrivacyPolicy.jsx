import policyPdf from "../assets/Lume Privacy Policy.pdf";

function PrivacyPolicy() {
  return (
    <section
      style={{
        padding: "2rem 1rem",
        minHeight: "100vh",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ marginBottom: "1rem" }}>Privacy Policy</h1>
      <p style={{ marginBottom: "1rem" }}>
        If the document does not load below,{" "}
        <a href={policyPdf} target="_blank" rel="noopener noreferrer">
          open the PDF in a new tab
        </a>
        .
      </p>
      <iframe
        src={policyPdf}
        title="Lume Privacy Policy"
        style={{
          width: "100%",
          height: "80vh",
          border: "1px solid #333",
          borderRadius: "8px",
          background: "#111",
        }}
      />
    </section>
  );
}

export default PrivacyPolicy;
