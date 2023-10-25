import { useCallback, useEffect, useState } from "react";
import useLoadXlsx from "../../hooks/useLoadXlsx";
import { Card } from "../shared/Card";
import { InputFile } from "../shared/InputFile";
import { Text } from "../shared/Text";

export const LoadData = () => {
  const [files, setFiles] = useState([]);
  const { fileToData } = useLoadXlsx();

  const handleChangeFiles = useCallback(async () => {
    if (files.length) {
      const _data = await fileToData(files);
      console.log(_data, "sd");
    }
  }, [files, fileToData]);

  useEffect(() => {
    console.log(files);
    handleChangeFiles();
  }, [files, handleChangeFiles]);

  return (
    <div>
      <Card>
        <Text $margin="0 0 30px" $size="14px">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum es simplemente el texto de relleno de
          las imprentas y archivos .
        </Text>
        <Text $type="primary" $margin="0 0 30px" $size="18px" $fontWeight="700">
          Cargue de facturas
        </Text>
        <InputFile
          setFiles={setFiles}
          fileTypes="EXCEL, CSV"
          accept={
            ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, text/csv"
          }
        />
        <Text $marginTop="14px" $marginBottom="76px">
          El documento debe ser formato csv o excel y un tamaño maximo de 1MB.
        </Text>
      </Card>
    </div>
  );
};
