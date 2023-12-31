import { useEffect, useState } from "react";
import { LoadData } from "./LoadData";
import { FlexContainer } from "../shared/FlexContainer";
import { Text } from "../shared/Text";
import { BillsTable } from "./BillsTable";

export const BillsSteps = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState([]);
  const titleText = ["Cargue de facturas en dos pasos", "Cargue de facturas"];

  useEffect(() => {
    setStep(() => (data.length ? 2 : 1));
  }, [data]);

  return (
    <>
      <FlexContainer>
        <Text $type="secondary" $size="24px" $fontWeight="700">
          {titleText[step - 1]}
        </Text>
      </FlexContainer>
      {step === 1 ? (
        <LoadData setData={setData} />
      ) : (
        <BillsTable data={data} setData={setData} />
      )}
      <div></div>
    </>
  );
};
