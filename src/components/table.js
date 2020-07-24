import BootstrapTable from "react-bootstrap-table-next";
import React from "react";
import linkedin_data from "../linkedin_output.json";
import indeed_data from "../indeed_output.json";
import ToolkitProvider, {
  Search,
  ColumnToggle
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
const { SearchBar } = Search;
const { ToggleList } = ColumnToggle;

function linkFormatter(cell, row) {
  return (
    <span>
      <a href={cell} target="_blank">
        🔗 Link
      </a>
    </span>
  );
}
const defaultSorted = [
  {
    dataField: "date",
    order: "desc"
  }
];

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.source === "linkedin" ? linkedin_data : indeed_data;
    // console.log(this.props.source);
    return (
      <div>
        <ToolkitProvider
          keyField="id"
          data={data.data}
          columns={columns}
          search
          columnToggle
        >
          {props => (
            <div>
              <SearchBar
                {...props.searchProps}
                placeholder={"Search for " + data.data.length + " items..."}
              />
              <div />
              {/* <ToggleList
            btnClassName="list-btn-custom-class"
            { ...props.columnToggleProps } /> */}
              <BootstrapTable
                bootstrap4
                {...props.baseProps}
                pagination={paginationFactory()}
                caption={"latest update on: " + data.time}
                defaultSorted={defaultSorted}
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default Table;

// export default () => (
//   <div>
//     <ToolkitProvider
//       keyField="id"
//       data={data.data}
//       columns={columns}
//       search
//       columnToggle
//     >
//       {props => (
//         <div>
//           <SearchBar
//             {...props.searchProps}
//             placeholder={"Search for " + data.data.length + " items..."}
//           />
//           <div />
//           {/* <ToggleList
//             btnClassName="list-btn-custom-class"
//             { ...props.columnToggleProps } /> */}
//           <BootstrapTable
//             bootstrap4
//             {...props.baseProps}
//             pagination={paginationFactory()}
//             caption={"latest update on: " + data.time}
//             defaultSorted={defaultSorted}
//           />
//         </div>
//       )}
//     </ToolkitProvider>
//   </div>
// );

const columns = [
  {
    dataField: "title",
    text: "Title",
    sort: true
  },
  {
    dataField: "company",
    text: "Company",
    sort: true
  },
  {
    dataField: "place",
    text: "Place",
    sort: true
  },
  {
    dataField: "date",
    text: "Date",
    sort: true
  },
  {
    dataField: "senorityLevel",
    text: "Level",
    sort: true
  },
  {
    dataField: "employmentType",
    text: "Type",
    sort: true
  },
  {
    dataField: "link",
    text: "Link",
    sort: true,
    formatter: linkFormatter
  },
  {
    dataField: "industries",
    text: "Industries",
    sort: true
  }
];

// export default () =>
//   <BootstrapTable keyField='query' data={ data.data } columns={ columns } />
