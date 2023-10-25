/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import useLoadXlsx from "../../hooks/useLoadXlsx";
import { Card } from "../shared/Card";
import { InputFile } from "../shared/InputFile";
import { Text } from "../shared/Text";
import { LoadingData } from "./LoadingData";
import Button from "../shared/Button";
import { FlexContainer } from "../shared/FlexContainer";
import { billsAdapter } from "../../adapters/billsAdapter";

export const LoadData = ({ setData }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { fileToData } = useLoadXlsx();

  const handleSaveFiles = useCallback(async () => {
    let _data;
    if (files.length) {
      setLoading(true);
      setTimeout(async () => {
        _data = await fileToData(files);
        setData(billsAdapter(_data));
        setLoading(false);
      }, 1000);
    }
  }, [files]);

  return (
    <div>
      <Card>
        <Text $margin="0 0 30px" $size="14px">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum es simplemente el texto de relleno de
          las imprentas y archivos .
        </Text>
        {loading ? (
          <LoadingData />
        ) : (
          <div>
            <Text
              $type="primary"
              $margin="0 0 30px"
              $size="18px"
              $fontWeight="700"
            >
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
              El documento debe ser formato csv o excel y un tamaño maximo de
              1MB.
            </Text>
            <FlexContainer $alignItems="center">
              <Button disabled={!files.length} onClick={handleSaveFiles}>
                Continuar
              </Button>
            </FlexContainer>
          </div>
        )}
      </Card>
    </div>
  );
};

LoadData.propTypes = {
  setData: PropTypes.func.isRequired,
};
