import * as XLSX from "xlsx";

export default function useLoadXlsx() {
  let jsonData = {};

  function fileToData(files) {
    const file = files[0];
    if (file) {
      const reader = new FileReader();

      const hola = (reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        jsonData = XLSX.utils.sheet_to_json(sheet);
      });
      console.log(hola, "holaaaa", jsonData);
      reader.readAsArrayBuffer(file);
      return jsonData;
    }
  }
  return { fileToData };
}
