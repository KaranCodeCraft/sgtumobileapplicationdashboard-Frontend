import React from "react";
import {
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// Updated student data
const studentData = [
  {
    name: "John Doe",
    enrollmentNumber: "2024001",
    aadharNumber: "1234 5678 9012",
    mobileNumber: "9876543210",
    email: "john.doe@email.com",
    session: "2024",
    course: "B.Tech",
    stream: "CSE",
  },
  {
    name: "Jane Smith",
    enrollmentNumber: "2024002",
    aadharNumber: "2345 6789 0123",
    mobileNumber: "9876543211",
    email: "jane.smith@email.com",
    session: "2024",
    course: "B.Tech",
    stream: "ECE",
  },
  {
    name: "Robert Johnson",
    enrollmentNumber: "2024003",
    aadharNumber: "3456 7890 1234",
    mobileNumber: "9876543212",
    email: "robert.johnson@email.com",
    session: "2024",
    course: "M.Tech",
    stream: "CSE",
  },
  {
    name: "Emily Davis",
    enrollmentNumber: "2024004",
    aadharNumber: "4567 8901 2345",
    mobileNumber: "9876543213",
    email: "emily.davis@email.com",
    session: "2024",
    course: "MBA",
    stream: "HR",
  },
  {
    name: "Michael Brown",
    enrollmentNumber: "2024005",
    aadharNumber: "5678 9012 3456",
    mobileNumber: "9876543214",
    email: "michael.brown@email.com",
    session: "2024",
    course: "BBA",
    stream: "Marketing",
  },
  {
    name: "Michael Brown",
    enrollmentNumber: "2024005",
    aadharNumber: "5678 9012 3456",
    mobileNumber: "9876543214",
    email: "michael.brown@email.com",
    session: "2024",
    course: "BBA",
    stream: "Marketing",
  },
  {
    name: "Michael Brown",
    enrollmentNumber: "2024005",
    aadharNumber: "5678 9012 3456",
    mobileNumber: "9876543214",
    email: "michael.brown@email.com",
    session: "2024",
    course: "BBA",
    stream: "Marketing",
  },
];

// Updated column definitions
const columns = [
  { accessorKey: "name", header: "Student Name" },
  { accessorKey: "enrollmentNumber", header: "Enrollment Number" },
  { accessorKey: "aadharNumber", header: "Aadhar Number" },
  { accessorKey: "mobileNumber", header: "Mobile Number" },
  { accessorKey: "email", header: "E-mail" },
  { accessorKey: "session", header: "Session" },
  { accessorKey: "course", header: "Course" },
  { accessorKey: "stream", header: "Stream" },
];

const Example = () => {
  const table = useMaterialReactTable({
    columns,
    data: studentData,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
  });

  return (
    <Stack sx={{ m: "1rem 0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MRT_GlobalFilterTextField table={table} />
        <MRT_TablePagination table={table} />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    align="center"
                    variant="head"
                    key={header.id}
                    sx={{ fontWeight: "bold" }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.Header ??
                            header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow key={row.id} selected={row.getIsSelected()}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    align="center"
                    variant="body"
                    key={cell.id}
                    sx={{ padding: "6px 2px" }}
                  >
                    <MRT_TableBodyCellValue
                      cell={cell}
                      table={table}
                      staticRowIndex={rowIndex}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
    </Stack>
  );
};

export default Example;
