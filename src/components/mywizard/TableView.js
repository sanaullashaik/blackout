import React, { useState } from "react";
import { Table, Button, Row, Col } from "antd";
import { CSVLink } from "react-csv";
import { csvData, csvHeaders, tableColumns } from "../utility/mockData";

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const TableView = () => {
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectedRowKeys(selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <Row>
        <Col></Col>
      </Row>
      <Table
        rowSelection={rowSelection}
        columns={tableColumns}
        dataSource={data}
        scroll={{ x: 1500, y: 300 }}
      />
      <div style={{ marginLeft: "10%" }}>
        <CSVLink
          data={csvData}
          headers={csvHeaders}
          filename="BlackoutExport.csv"
        >
          <Button
            type="primary"
            onClick={handleClick}
            disabled={!hasSelected}
            loading={loading}
          >
            Download me
          </Button>
        </CSVLink>
        <span style={{ marginLeft: "8%" }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
    </div>
  );
};

export default TableView;
