import { CertificateData, MetaData } from "../types/certificate.types";
import { CertificateDataElement } from "../types/certificateElement.types";
import { ResourceLink } from "../types/resourceLink.types";
import { getDecoratedCertificateData } from "../validation/getDecoratedCertificateData";

export interface StructuredCertificateData extends CertificateDataElement {
  children: StructuredCertificateData[];
}

function getStructure(elements: CertificateDataElement[]) {
  return (element: CertificateDataElement): StructuredCertificateData => ({
    ...element,
    children: getChildren(elements, element),
  });
}

function getChildren(
  elements: CertificateDataElement[],
  parent: CertificateDataElement
): StructuredCertificateData[] {
  return elements
    .filter((el) => el.parent === parent.id)
    .map(getStructure(elements));
}

export function structureCertificate(
  data: CertificateData,
  metadata: MetaData,
  links: ResourceLink[]
) {
  const elements = Object.values(
    getDecoratedCertificateData(data, metadata, links)
  ).sort((a, b) => a.index - b.index);

  return elements
    .filter(({ parent }) => parent == undefined)
    .map(getStructure(elements));
}
