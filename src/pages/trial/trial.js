
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
  KeyboardNavigation,
  TotalItem,
  Summary,
  SearchPanel,
  Grouping,
} from "devextreme-react/data-grid";
import { customers } from "../../../src/data.js";


const Trial = () => {
  
  const onFocusedCellChanging = (e) => {
    e.isHighlighted = true;
  };

  return (
    <div id="data-grid-demo">
      <h4>Journal Entry</h4>

      <DataGrid
        dataSource={customers}
        keyExpr="ID"
        showBorders={true}
        onFocusedCellChanging={onFocusedCellChanging}
      >
        <Grouping autoExpandAll={false} />
        <SearchPanel visible={true} highlightCaseSensitive={true} />
        <KeyboardNavigation
          editOnKeyPress={true}
          enterKeyAction={"moveFocus"}
          enterKeyDirection={"column"}
        />
        <Paging enabled={false} />
        <Editing
          mode="batch"
          allowAdding={true}
          allowUpdating={true}
          allowDeleting={true}
          startEditAction="dblClick"
        />

        <Column calculateCellValue={(rowData)=>{}} caption="Code" width={70} />
      
        <Column  dataField="options" caption="Account Name" width={125}>
          <Lookup  dataSource={customers} valueExpr="ID" displayExpr="CodeName" />
        </Column>
        <Column dataField="Debit" />
        <Column dataField="Credit" width={170} />
        <Summary>
          {" "}
          <TotalItem column="Debit" summaryType="sum" valueFormat="#0.00" />
          <TotalItem column="Credit" summaryType="sum" valueFormat="#0.00" />
        </Summary>
        <Column dataField="Memo" />
      </DataGrid>
    </div>
  );
};

export default Trial;
