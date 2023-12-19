import XLSX = require('xlsx');

export class BusinessFunction {

    static async getExcelData(filePath: string, sheetName: string) {
        try {
            const workBook = XLSX.readFile(filePath);
            const sheet = workBook.Sheets[sheetName];
            return XLSX.utils.sheet_to_json(sheet);
        } catch (error) {
            throw new Error('Unable to read Excel data.' + error.message)
        }
    }

    public static formatStringValue(str: string, replaceValue: any): string {
        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(replaceValue)) {
            // eslint-disable-next-line no-param-reassign
            str = str.split(`{${key}}`).join(`${value}`);
        }
        return str;
    }
}