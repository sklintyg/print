import { CertificateData } from "../types/certificate.types";
import { CertificateDataElement } from "../types/certificateElement.types";
import { CertificateDataValidation } from "../types/certificateValidation.types";
import { executeValidation } from "./executeValidation";

export interface ValidationResult {
  element: CertificateDataElement;
  result: boolean;
  validation: CertificateDataValidation;
}

export const getValidationResults = (
  data: CertificateData,
  element?: CertificateDataElement
) =>
  element == null
    ? []
    : (element.validation ?? []).map(
        (validation): ValidationResult => ({
          element,
          result: executeValidation(validation, data),
          validation,
        })
      );
