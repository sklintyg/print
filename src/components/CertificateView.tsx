import { Certificate } from "../types/certificate.types";
import { structureCertificate } from "../util/structureCertificate";
import { CertificateElement } from "./CertificateElement/index";
import { ForsakringskassanLogo } from "./Logo/ForsakringskassanLogo";
import { PageInfo } from "./PageInfo";

export function CertificateView({ data, metadata, links }: Certificate) {
  const structuredData = structureCertificate(data, metadata, links);
  return (
    <div className="px-12">
      <PageInfo position="left">
        {metadata.typeName} Fastställd av Försäkringskassan
        <br />i samråd med Socialstyrelsen
      </PageInfo>
      <PageInfo position="right">Intygs-ID: {metadata.id}</PageInfo>

      <div className="mb-6 pr-10">
        <div className="flex gap-4 justify-between mb-4">
          <div>
            <ForsakringskassanLogo />
          </div>
          <div>
            <h1 className="text-xl font-bold">{metadata.name}</h1>
            <span>{metadata.patient.fullName}</span>
          </div>
          <div>
            Personnummer
            <br />
            {metadata.patient.personId.id}
          </div>
        </div>
        <div className="text-right">
          <div className="inline-block text-left px-10">
            <span className="text-sm">Skicka blanketten till</span>
            <br />
            Försäkringskassans inläsningscentral
            <br />
            839 88 Östersund
          </div>
        </div>
      </div>

      {structuredData.map((element, index) => (
        <CertificateElement key={element.id} element={element} index={index} />
      ))}
    </div>
  );
}
