import { AuthLayout } from "../Layout/AuthLayout";
import { FlexContainer } from "../shared/FlexContainer";
import { Text } from "../shared/Text";
import { BillsSteps } from "./BillsSteps";

export const Bills = () => {
  return (
    <div>
      <AuthLayout>
        <div>
          <FlexContainer $alignItems={"end"}>
            <Text>Último ingreso 05/10/2023 - 08:05 am </Text>
            <Text>Dirección IP:186.145.19.35</Text>
          </FlexContainer>
          <BillsSteps />
        </div>
      </AuthLayout>
    </div>
  );
};
