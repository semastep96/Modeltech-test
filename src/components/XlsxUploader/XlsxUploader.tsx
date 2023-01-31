import React, { FC, useRef } from 'react';
import { Toast } from 'primereact/toast';
import {
  FileUpload,
  FileUploadHandlerEvent,
  FileUploadSelectEvent,
} from 'primereact/fileupload';
import { getInfoFromExcel } from '../../utils/getInfoFromExcel';

interface XlsxUploaderProps {
  onFileLoadSuccess: (daysDynamic: DayDynamic[]) => void;
  onFileLoadError: (message: string) => void;
}

export const XlsxUploader: FC<XlsxUploaderProps> = ({
  onFileLoadSuccess,
  onFileLoadError,
}) => {
  const toast = useRef(null);

  const onFileSelect = async (e: FileUploadSelectEvent) => {
    try {
      const file = await e.files[0].arrayBuffer();
      const daysDynamic = getInfoFromExcel(file);
      onFileLoadSuccess(daysDynamic);

      if (toast.current) {
        (toast.current as Toast).show({
          severity: 'info',
          summary: 'Success',
          detail: 'information copied',
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        onFileLoadError('Error on file reading: \n' + error.message);
      }
    }
  };

  const uploadHandler = (e: FileUploadHandlerEvent) => {
    e.options.clear();
  };

  return (
    <div className="card">
      <Toast ref={toast}></Toast>
      <FileUpload
        mode="basic"
        name="xlsx uploader"
        accept=".xlsx,.xls"
        maxFileSize={1000000}
        customUpload
        uploadHandler={uploadHandler}
        onSelect={onFileSelect}
        chooseLabel="Загрузите Excel файл"
      />
    </div>
  );
};
