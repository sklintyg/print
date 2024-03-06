import { createElement } from "react";
import {
  CertificateDataValueType,
  ConfigTypes,
} from "../../types/certificateElement.types";
import { classNames } from "../../util/classNames";
import { StructuredCertificateData } from "../../util/structureCertificate";
import { UeCategory } from "./UeCategory";
import { UeCheckbox } from "./UeCheckbox";
import { UeCheckboxMultipleCode } from "./UeCheckboxMultipleCode";
import { UeCheckboxMultipleDate } from "./UeCheckboxMultipleDate";
import { UeDiagnoses } from "./UeDiagnoses";
import { UeIcf } from "./UeIcf";
import { UeRadio } from "./UeRadio";
import { UeRadioMultipleCodeOptionalDropdown } from "./UeRadioMultipleCodeOptionalDropdown";
import { UeSickLeavePeriod } from "./UeSickLeavePeriod";
import { UeTextArea } from "./UeTextArea";
import { UeUnknown } from "./UeUnknown";

function CertificateElementResolver({
  element,
  index,
}: {
  element: StructuredCertificateData;
  index: number;
}) {
  if (element.config.type === ConfigTypes.CATEGORY) {
    return createElement(UeCategory, {
      config: element.config,
      title: element.children.at(0)?.config.text ?? element.config.text,
      index,
    });
  }

  if (
    element.config.type === ConfigTypes.UE_CHECKBOX_BOOLEAN &&
    element.value?.type === CertificateDataValueType.BOOLEAN
  ) {
    return createElement(UeCheckbox, {
      config: element.config,
      value: element.value,
    });
  }

  if (
    element.config.type === ConfigTypes.UE_RADIO_BOOLEAN &&
    element.value?.type === CertificateDataValueType.BOOLEAN
  ) {
    return createElement(UeRadio, {
      config: element.config,
      value: element.value,
    });
  }

  if (
    element.config.type === ConfigTypes.UE_CHECKBOX_MULTIPLE_DATE &&
    element.value?.type === CertificateDataValueType.DATE_LIST
  ) {
    return createElement(UeCheckboxMultipleDate, {
      config: element.config,
      value: element.value,
    });
  }

  if (
    element.config.type === ConfigTypes.UE_CHECKBOX_MULTIPLE_CODE &&
    element.value?.type === CertificateDataValueType.CODE_LIST
  ) {
    return createElement(UeCheckboxMultipleCode, {
      config: element.config,
      value: element.value,
    });
  }

  if (
    element.config.type === ConfigTypes.UE_DIAGNOSES &&
    element.value?.type === CertificateDataValueType.DIAGNOSIS_LIST
  ) {
    return createElement(UeDiagnoses, {
      config: element.config,
      value: element.value,
    });
  }

  if (
    element.config.type === ConfigTypes.UE_TEXTAREA &&
    element.value?.type === CertificateDataValueType.TEXT
  ) {
    return createElement(UeTextArea, {
      config: element.config,
      value: element.value,
    });
  }

  if (
    element.config.type === ConfigTypes.UE_SICK_LEAVE_PERIOD &&
    element.value?.type === CertificateDataValueType.DATE_RANGE_LIST
  ) {
    return createElement(UeSickLeavePeriod, {
      config: element.config,
      value: element.value,
    });
  }

  if (
    element.config.type ===
      ConfigTypes.UE_RADIO_MULTIPLE_CODE_OPTIONAL_DROPDOWN &&
    element.value?.type === CertificateDataValueType.CODE
  ) {
    return createElement(UeRadioMultipleCodeOptionalDropdown, {
      config: element.config,
      value: element.value,
      children: element.children,
    });
  }

  if (
    element.config.type === ConfigTypes.UE_ICF &&
    element.value?.type === CertificateDataValueType.ICF
  ) {
    return createElement(UeIcf, {
      config: element.config,
      value: element.value,
    });
  }

  return createElement(UeUnknown, {
    config: element.config,
    value: element.value,
  });
}

export function CertificateElement({
  element,
  index,
}: {
  element: StructuredCertificateData;
  index: number;
}) {
  const isCategory = element.config.type === ConfigTypes.CATEGORY;
  const isMultipleDropdown =
    element.config.type ===
    ConfigTypes.UE_RADIO_MULTIPLE_CODE_OPTIONAL_DROPDOWN;

  if (!element.visible) {
    return null;
  }

  return (
    <div
      className={classNames(
        isCategory && "mb-5 break-inside-avoid",
        "empty:hidden [&:not(:first-child)]:-mt-px bg-white"
      )}
    >
      <div
        className={classNames(
          "empty:hidden",
          isCategory ? "pb-px" : "border border-black"
        )}
      >
        <CertificateElementResolver element={element} index={index} />
      </div>
      {!isMultipleDropdown &&
        element.children.map((element, index) => (
          <CertificateElement
            key={element.id}
            element={element}
            index={index}
          />
        ))}
    </div>
  );
}
