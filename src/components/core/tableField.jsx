import React from "react";

function TableField({ data, column }) {
  return (
    <div className="container">
      <table className="table mt-3">
        <thead>
          <tr>
            {column &&
              column.map((item, index) => (
                <TableHeadItem item={item} key={index} />
              ))}
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((item, index) => (
              <TableRowItem item={item} column={column} key={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

const TableRowItem = ({ item, column }) => {
  return (
    <tr>
      {column &&
        column.map((columnItem, index) => {
          return <td key={index}>{item[`${columnItem.value}`]}</td>;
        })}
    </tr>
  );
};

TableField.defaultProps = {
  data: "",
  column: "",
};

export default TableField;
