import * as xlsx from 'xlsx';

const formatToDayDynamic = (dayInfo: object): DayDynamic => {
  const [date, oilPerDay, liquidPerDay] = Object.values(dayInfo);
  return {
    date,
    oilPerDay,
    liquidPerDay,
  };
};

export const getInfoFromExcel = (file: ArrayBuffer): DayDynamic[] => {
  const workbook = xlsx.read(file);
  const sheetName = workbook.SheetNames[0];
  const DaysInfoJson = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], {
    defval: '-',
    raw: false,
  }) as Array<object>;

  return DaysInfoJson.map(formatToDayDynamic);
};
