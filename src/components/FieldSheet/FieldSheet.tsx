import React, { FC } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './FieldSheet.css';

interface FieldSheetProps {
  info: DayDynamic[] | undefined;
  fieldName: string;
}

export const FieldSheet: FC<FieldSheetProps> = ({ info, fieldName }) => {
  const sheetHeader = `Месторождение «${fieldName}»`;
  return (
    <div className="fieldSheet">
      <DataTable
        header={sheetHeader}
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
