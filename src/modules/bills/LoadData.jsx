import { Card } from "../shared/Card";
import { InputFile } from "../shared/InputFile";
import { Text } from "../shared/Text";

export const LoadData = () => {
  return (
    <div>
      LoadData
      <Card>
        <Text $margin="0 0 30px" $size="14px">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum es simplemente el texto de relleno de
          las imprentas y archivos .
        </Text>
        <Text $type="primary" $margin="0 0 30px" $size="18px" $fontWeight="700">
          Cargue de facturas
        </Text>
        <InputFile fileTypes="EXCEL, CSV" />
        <Text $marginTop="14px" $marginBottom="76px">
          El documento debe ser formato csv o excel y un tamaño maximo de 1MB.
        </Text>
      </Card>
    </div>
  );
};
