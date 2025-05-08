/**
 * define Data Table props
 */
export interface FlexoraDataTableProps {
  Id: string;
  Name?: string;
  Columns: Array<FlexoraDataTableColumnType>;
  Rows: Array<any>;
  ClassName?: string;

  onClickTableRow?: (row: any) => void;
}

/**
 * Data Table Columns props Type
 */
export interface FlexoraDataTableColumnType {
  Id: string;
  Name: string;
  AccessKey?: string;
  ClassName: string;
  Tooltips?: string;
  Hide?: boolean;
}
