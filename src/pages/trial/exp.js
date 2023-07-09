import React, { useState } from 'react'
//dataType="date"
import DataGrid, {
    Column,
    Editing,
    Paging,Lookup,
    KeyboardNavigation,
  } from 'devextreme-react/data-grid';
  import SelectBox from 'devextreme-react/select-box';
  import CheckBox from 'devextreme-react/check-box';
  import {
    customers, options,keyActionLabel, keyDirectionLabel,
  } from '../../../src/data.js';
  // const  = () => {
  //   return (  );
  // }
   
  // export default ;
  const Trial = () =>  {
    
      
      this.enterKeyActions = ['startEdit', 'moveFocus'];
      this.enterKeyDirections = ['none', 'column', 'row'];
      const [  editOnKeyPress,setEditOnKeyPress] = useState(true)
      const [enterKeyAction,setEnterKeyAction] = useState('moveFocus')
      const [EnteKeyDirectionr ,setEnteKeyDirectionr] = useState('column')
      state = {
        // editOnKeyPress: true,
        // enterKeyAction: 'moveFocus',
        // enterKeyDirection: 'column',
      };
      this.onFocusedCellChanging = (e) => {
        e.isHighlighted = true;
      };

      this.enterKeyActionChanged = this.enterKeyActionChanged.bind(this);
      this.enterKeyDirectionChanged = this.enterKeyDirectionChanged.bind(this);
    

   const editOnKeyPressChanged =(e) => {
    setEditOnKeyPress({ editOnKeyPress: e.value });
    }
  
  const  enterKeyActionChanged = (e) =>{
      setEditOnKeyPress({ enterKeyAction: e.value });
    }
  
  const  enterKeyDirectionChanged =(e)=> {
      setEnteKeyDirectionr({ enterKeyDirection: e.value });
    }
        editOnKeyPressChanged = editOnKeyPressChanged.bind();
   
      return (
        <div id="data-grid-demo">
          <DataGrid
            dataSource={customers}
            keyExpr="ID"
            showBorders={true}
            onFocusedCellChanging={this.onFocusedCellChanging}>
            <KeyboardNavigation
              editOnKeyPress={this.state.editOnKeyPress}
              enterKeyAction={this.state.enterKeyAction}
              enterKeyDirection={this.state.enterKeyDirection} />
            <Paging enabled={false} />
            <Editing
              mode="batch"
              allowUpdating={true}
              allowDeleting={true}
              startEditAction="dblClick" />
            <Column dataField="Code" captifon="Code" width={70} />
            <Column dataField="options" caption="Code Name" width={125}>
            <Lookup dataSource={options} valueExpr="ID" displayExpr="Name" />
          </Column>
            {/* <Column dataField="CodeName" /> */}
            <Column dataField="Debit" />
            <Column dataField="Credit" width={170} />
            <Column dataField="Memo"  />
          </DataGrid>
          <div className="options">
            <div className="caption">Options</div>
            <div className="option-container">
              <div className="option check-box">
                <CheckBox text="Edit On Key Press"
                  value={this.state.editOnKeyPress}
                  onValueChanged={this.editOnKeyPressChanged} />
              </div>
              <div className="option">
                <span className="option-caption">Enter Key Action</span>
                <SelectBox className="select"
                  items={this.enterKeyActions}
                  inputAttr={keyActionLabel}
                  value={this.state.enterKeyAction}
                  onValueChanged={this.enterKeyActionChanged} />
              </div>
              <div className="option">
                <span className="option-caption">Enter Key Direction</span>
                <SelectBox className="select"
                  items={this.enterKeyDirections}
                  inputAttr={keyDirectionLabel}
                  value={this.state.enterKeyDirection}
                  onValueChanged={this.enterKeyDirectionChanged} />
              </div>
            </div>
          </div>
        </div>
      );
    
  }
 
export default Trial;