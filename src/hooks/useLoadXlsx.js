import * as XLSX from "xlsx";

export default function useLoadXlsx() {
  async function fileToData(files) {
    return new Promise((resolve, reject) => {
      const file = files[0];
      if (!file) {
        reject("No se seleccionó ningún archivo");
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet);

        resolve(jsonData);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsArrayBuffer(file);
    });
  }

  return { fileToData };
}
