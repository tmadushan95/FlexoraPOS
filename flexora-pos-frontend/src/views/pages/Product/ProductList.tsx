import * as React from "react";
import FlexoraDataTable from "../../Components/FlexoraDataTable/FlexoraDataTable";
import { FlexoraDataTableColumnType } from "../../Components/FlexoraDataTable/FlexoraDataTable.type";
import { Box } from "@mui/joy";

// ============================================================================================================================================ //
// =================================================== VIEWS - PAGES - PRODUCTLIST ================================================== //
// ============================================================================================================================================ //

const rows = [
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
  { Id: "1", Name: "159", Name1: "159", Name2: "159", Name3: "159" },
];

const columns = [
  { Id: "1", Name: "ID", AccessKey: "Id" } as FlexoraDataTableColumnType,
  { Id: "2", Name: "Name-1", AccessKey: "Name" } as FlexoraDataTableColumnType,
  { Id: "2", Name: "Name-2", AccessKey: "Name1" } as FlexoraDataTableColumnType,
  { Id: "2", Name: "Name-3", AccessKey: "Name2" } as FlexoraDataTableColumnType,
  { Id: "2", Name: "Name-4", AccessKey: "Name3" } as FlexoraDataTableColumnType,
];

export default function TableColumnPinning() {
  const onclick = (row: any) => {
    alert(JSON.stringify(row));
  };

  return (
    <Box
      sx={{
        top: 0,
        left: 10,
      }}
    >
      <FlexoraDataTable
        Id={""}
        Columns={columns}
        Rows={rows}
        onClickTableRow={onclick}
      />
    </Box>
  );
}
