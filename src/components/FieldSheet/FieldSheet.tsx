import React, { FC } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './FieldSheet.css';

interface FieldSheetProps {
  info: DayDynamic[] | undefined;
  fieldName: string;
  loading: boolean;
}

export const FieldSheet: FC<FieldSheetProps> = ({
  info,
  fieldName,
  loading,
}) => {
  const sheetHeader = info?.length
    ? `Месторождение «${fieldName}»`
    : 'Загрузите данные';

  return (
    <div className="fieldSheet">
      <DataTable
        header={loading ? 'Загрузка...' : sheetHeader}
        value={info}
        size={'normal'}
        responsiveLayout="scroll"
      >
        <Column field="date" header="Дата"></Column>
        <Column field="oilPerDay" header="Добыча нефти, т/сут"></Column>
        <Column field="liquidPerDay" header="Добыча жидкости, м3/сут"></Column>
      </DataTable>
    </div>
  );
};
