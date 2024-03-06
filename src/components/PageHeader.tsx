import { MetaData } from "../types/certificate.types";

export function PageHeader(metadata: MetaData) {
  return (
    <div
      style={{
        width: "100%",
        fontSize: "10pt",
        color: "#000",
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 20px",
        gap: "10px",
      }}
    >
      <div>
        <span style={{ verticalAlign: "top" }} className="pageNumber"></span>
        <span style={{ fontSize: "11pt" }}>
          (<span className="totalPages"></span>)
        </span>
      </div>
    </div>
  );
}
