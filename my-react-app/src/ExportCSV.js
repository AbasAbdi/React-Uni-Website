import React from 'react';
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as CSV from 'csv';

export const ExportCSV = ({ csvData, fileName }) => {
	const fileType =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	const fileExtension = '.csv';

	const exportToCSV = (csvData, fileName) => {
		const ws = CSV.utils.json_to_sheet(csvData);
		const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
		const excelBuffer = CSV.write(wb, { bookType: 'csv', type: 'array' });
		const data = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(data, fileName + fileExtension);
	};

	return (
		<Button variant="warning" onClick={(e) => exportToCSV(csvData, fileName)}>
			Export
		</Button>
	);
};
