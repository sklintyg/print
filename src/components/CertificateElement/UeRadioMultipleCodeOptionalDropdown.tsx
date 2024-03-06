import {
  CertificateDataValueType,
  ConfigTypes,
  ConfigUeDropdown,
  ConfigUeRadioMultipleCodesOptionalDropdown,
  ValueCode,
} from "../../types/certificateElement.types";
import { StructuredCertificateData } from "../../util/structureCertificate";
import { Checkbox } from "../Checkbox";

function UeOptionalDropdown({
  config,
  value,
}: {
  config: ConfigUeDropdown;
  value: ValueCode;
}) {
  const selected = config.list.find(({ id }) => id === value.id);
  return <div className="text-lg">{selected?.label}</div>;
}

export function UeRadioMultipleCodeOptionalDropdown({
  config,
  value,
  children,
}: {
  config: ConfigUeRadioMultipleCodesOptionalDropdown;
  children: StructuredCertificateData[];
  value: ValueCode;
}) {
  return (
    <>
      <div className="p-4 grid gap-2">
        {config.list.map(({ id, label, dropdownQuestionId }) => {
          let dropdownElement = null;
          const dropdownQuestion = children.find(
            (element) => element.id === dropdownQuestionId
          );
          if (
            dropdownQuestion?.config.type === ConfigTypes.UE_DROPDOWN &&
            dropdownQuestion.value?.type === CertificateDataValueType.CODE
          ) {
            dropdownElement = (
              <UeOptionalDropdown
                config={dropdownQuestion.config}
                value={dropdownQuestion.value}
              />
            );
          }
          return (
            <div key={id} className="flex gap-2">
              <Checkbox selected={value.code === id}>{label}</Checkbox>
              {dropdownElement}
            </div>
          );
        })}
      </div>
    </>
  );
}
