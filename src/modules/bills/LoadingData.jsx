import { FlexContainer } from "../shared/FlexContainer";
import { Text } from "../shared/Text";
import loadingBills from "../../assets/bills/loadingBills.svg";

export const LoadingData = () => {
  return (
    <div>
      <FlexContainer $justifyContent="center" $alignItems="center">
        <img src={loadingBills} />
        <Text $type="secondary" $size="26px" $fontWeight="700">
          Estamos preparando la información
        </Text>
        <Text $type="secondary" $size="16px" $fontWeight="600" $marginTop="8px">
          Cuando este lista la encontráras aquí
        </Text>
      </FlexContainer>
    </div>
  );
};
