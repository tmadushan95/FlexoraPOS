import { FC } from "react";
import {
  FlexoraDataTableColumnType,
  FlexoraDataTableProps,
} from "./FlexoraDataTable.type";
import { Sheet, Table } from "@mui/joy";

// ============================================================================================================================================ //
// =================================================== VIEWS - COMPONENTS - FLEXORADATATABLE ================================================== //
// ============================================================================================================================================ //

const getDataTableColumn = (columns: Array<FlexoraDataTableColumnType>) => {
  return columns?.filter((filter) => !filter.Hide);
};

const RenderTableHeader = (
  columns: Array<FlexoraDataTableColumnType>
): React.JSX.Element => {
  return (
    <thead>
      <tr>
        {getDataTableColumn(columns).map(
          (column: FlexoraDataTableColumnType, columnIndex: number) => {
            return <th key={columnIndex}>{column.Name}</th>;
          }
        )}
      </tr>
    </thead>
  );
};

const RenderTableRows = (props: {
  columns: Array<FlexoraDataTableColumnType>;
  rows: any;
  onClickTableRow: (row: any) => void;
}): React.JSX.Element => {
  const onClickTableRowCallBack = (row: any) => {
    if (props.onClickTableRow) {
      props.onClickTableRow(row);
    }
  };

  return (
    <tbody>
      {props.rows.map((row: any, rowIndex: number) => {
        return (
          <tr key={rowIndex} onClick={() => onClickTableRowCallBack(row)}>
            {getDataTableColumn(props.columns).map(
              (column: FlexoraDataTableColumnType, columnIndex: number) => {
                return (
                  <td key={`${rowIndex}-${columnIndex}`}>
                    {row[column.AccessKey ?? column.Name] ?? ""}
                  </td>
                );
              }
            )}
          </tr>
        );
      })}
    </tbody>
  );
};

const FlexoraDataTable: FC<FlexoraDataTableProps> = (props) => {
  return (
    <Sheet
      sx={(theme) => ({
        "--TableCell-height": "40px",
        // the number is the amount of the header rows.
        "--TableHeader-height": "calc(1 * var(--TableCell-height))",
        height: "100dvh",
        overflow: "auto",
        background: `linear-gradient(${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
        linear-gradient(rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
        radial-gradient(
          farthest-side at 50% 0,
          rgba(0, 0, 0, 0.12),
          rgba(0, 0, 0, 0)
        ),
        radial-gradient(
            farthest-side at 50% 100%,
            rgba(0, 0, 0, 0.12),
            rgba(0, 0, 0, 0)
          )
          0 100%`,
        backgroundSize: "100% 40px, 100% 40px, 100% 14px, 100% 14px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "local, local, scroll, scroll",
        backgroundPosition:
          "0 var(--TableHeader-height), 0 100%, 0 var(--TableHeader-height), 0 100%",
        backgroundColor: "background.surface",
      })}
    >
      <Table
        hoverRow
        borderAxis={"xBetween"}
        stickyHeader
        stickyFooter
        sx={{
          "--Table-headerUnderlineThickness": "3px",
          "--TableCell-height": "39px",
          "--TableCell-paddingX": "8px",
          "--TableCell-paddingY": "7px",
        }}
      >
        {RenderTableHeader(props.Columns)}
        {RenderTableRows({
          columns: props.Columns,
          rows: props.Rows,
          onClickTableRow(row) {
            if (props.onClickTableRow) props.onClickTableRow(row);
          },
        })}
      </Table>
    </Sheet>
  );
};

export default FlexoraDataTable;
