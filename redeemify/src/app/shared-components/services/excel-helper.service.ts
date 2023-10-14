import * as XLSX from 'xlsx';

export class ExcelService {

  static readExcel(files: any, startRowIndex = 0) {
    return new Promise<any[]>((resolve, reject) => {
      const file = files[0];
      const reader: FileReader = new FileReader();

      reader.onload = (e: any) => {
        const binaryData = e.target.result;
        const workbook = XLSX.read(binaryData, { type: 'binary' });

        const sheetName = workbook.SheetNames[0]; // Assuming you want to read the first sheet
        const worksheet: any = workbook.Sheets[sheetName];

        const range = XLSX.utils.decode_range(worksheet['!ref']);
        range.s.r = startRowIndex;

        const data = XLSX.utils.sheet_to_json(worksheet);

        resolve(data); // Resolve the Promise with the data
      };

      reader.onerror = (error) => {
        reject(error); // Reject the Promise in case of an error
      };

      reader.readAsBinaryString(file);
    });

  }

}