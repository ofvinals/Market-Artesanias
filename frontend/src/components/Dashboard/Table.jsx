import React from 'react';
import {
	MaterialReactTable,
	useMaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MRT_Localization_ES } from 'material-react-table/locales/es';

export const Table = ({ columns, data, actions }) => {
	const table = useMaterialReactTable({
		columns,
		data: data || [],
		enableColumnFilterModes: true,
		enableColumnOrdering: true,
		enableGlobalFilterModes: true,
		enableColumnPinning: true,
		enableRowActions: true,
		enableGrouping: true,
		paginationDisplayMode: 'pages',
		positionToolbarAlertBanner: 'bottom',
		localization: MRT_Localization_ES,
		muiSearchTextFieldProps: {
			size: 'medium',
			variant: 'outlined',
		},
		muiPaginationProps: {
			color: 'primary',
			rowsPerPageOptions: [5, 10, 20, 30],
			shape: 'rounded',
			variant: 'outlined',
		},
		renderRowActions: ({ row }) => (
			<Box sx={{}}>
				{actions.map((action, index) => {
					if (row.original.Activo) {
						if (action.text === 'Inhabilitar') {
							return (
								<button
									key={index}
									className='flex flex-col items-center justify-center'
									onClick={() => action.onClick(row)}>
									<span className='bg-red-700 ms-3 text-white text-center rounded-xl border-2 p-3 text-2xl hover:opacity-50'>
										{action.icon}
									</span>
								</button>
							);
						}
					} else {
						if (action.text === 'Habilitar') {
							return (
								<button
									key={index}
									className='flex items-center justify-center'
									onClick={() => action.onClick(row)}>
									<span className='bg-green-700 ms-3 text-center text-white text-2xl rounded-xl border-2 p-3 hover:opacity-50'>
										{action.icon}
									</span>
								</button>
							);
						}
					}
					return null;
				})}
			</Box>
		),
	});

	const darkTheme = createTheme({
		palette: {
			mode: 'light',
		},
	});

	return (
		<div className=''>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<MaterialReactTable table={table} />
			</ThemeProvider>
		</div>
	);
};
