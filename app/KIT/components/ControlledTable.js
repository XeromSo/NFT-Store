import React from "react";
import {
  useTable,
  usePagination,
  TableInstance,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  Row,
} from "react-table";
import Button from "./Button";
import MySelect from "./Select";
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
  MdSearch,
} from "react-icons/md";
import TextField from "./TextField";
// import { AriaOnChangeProps, OnChangeValue } from "react-select";

// interface ControlledTableProps extends React.ComponentPropsWithoutRef<"table"> {
//   columns: Array<object>;
//   data: Array<object>;
//   pageCount?: number | null | undefined;
//   onPageChange?: (page: { pageIndex: number; pageSize: number }) => void;
//   onSortChange?: () => void;
//   loading?: boolean;
//   showPagination?: boolean;
// }
const ControlledTable = React.forwardRef(
  (
    {
      columns,
      data,
      pageCount: controlledPageCount,
      loading,
      onPageChange,
      onSortChange,
      showPagination,
    },
    ref
  ) => {
    const defaultColumn = React.useMemo(
      () => ({
        // Default Filter UI
        Filter: DefaultColumnFilter,
      }),
      []
    );
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      //   rows,
      //global filter
      preGlobalFilteredRows,
      setGlobalFilter,

      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      // Get the state from the instance
      state: {
        pageIndex,
        pageSize,

        // for global filter
        globalFilter,

        // for sortBy
        sortBy,
      },
    } = useTable(
      {
        columns,
        data,

        // global filter
        defaultColumn,

        initialState: { pageIndex: 0 },

        manualPagination: true,
        manualSortBy: true,
        manualFilters: true,
        autoResetPage: false,
        pageCount: controlledPageCount,
      },
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination
    );

    // React.useEffect(() => {
    //   if (onSearchData) onSearchData(rows);
    // }, [globalFilter]);

    React.useEffect(() => {
      if (onSortChange) {
        onSortChange(sortBy);
      }
    }, [onSortChange, sortBy]);
    React.useEffect(() => {
      if (onPageChange) {
        onPageChange({ pageIndex, pageSize });
      }
    }, [onPageChange, pageIndex, pageSize]);

    return (
      <div className="nft-table-wrapper">
        <GlobalFilter
          //   size={size}
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <table ref={ref} {...getTableProps()}>
          <thead>
            {headerGroups.map(
              (headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(
                    (column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        <div
                          className={`flex
                            ${
                              column.isSorted
                                ? column.isSortedDesc
                                  ? "primary"
                                  : "primary"
                                : ""
                            }
                             ${
                               column.align === "right"
                                 ? "rowReverse"
                                 : column.align === "center"
                                 ? "justifyCenter"
                                 : ""
                             }`}
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " 🔽"
                                : " 🔼"
                              : ""}
                          </span>
                        </div>
                      </th>
                    )
                  )}
                </tr>
              )
            )}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(
                    (cell) => {
                      return (
                        <td
                          title={cell.column.ellipse ? cell.value : ""}
                          className={`textAlign ${
                            cell.column.align || "left"
                          } ${cell.column.ellipse ? "tblEllipsisText" : ""} ${
                            cell.column.cellClassName || ""
                          }
                              ${
                                cell.column.sticky
                                  ? "stickyCell s3-card-base"
                                  : ""
                              }
                              `}
                          style={{
                            width: cell.column.width || "auto",
                            minWidth: cell.column.minWidth || "auto",
                            maxWidth: cell.column.maxWidth,
                          }}
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    }
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
        <Pagination
          // size={size}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          gotoPage={gotoPage}
          nextPage={nextPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageSize={pageSize}
          previousPage={previousPage}
          pageOptions={pageOptions}
          setPageSize={setPageSize}
          // paginationClassName={paginationClassName}
        />
      </div>
    );
  }
);

ControlledTable.defaultProps = {
  showPagination: true,
  loading: false,
};
const Pagination = ({
  pageSize,
  setPageSize,
  pageOptions,
  pageIndex,
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  //   paginationClassName,
  canNextPage,
  pageCount,
}) => {
  //
  //     return {
  //         label: pageSize,
  //         value: pageSize,
  //     }
  //     // (
  //     //     <option key={pageSize} value={pageSize}>
  //     //         Show {pageSize}
  //     //     </option>
  //     // )
  // }))

  const _options = [5, 10, 20, 30, 40, 50].map((pageSize) => {
    return {
      label: String(pageSize),
      value: pageSize,
    };
  });
  return (
    <div className={`flex alignCenter justifyBetween p1 pl4`}>
      <div className="flex alignCenter m mr2">
        <label className="textSecondary fs-200">Rows per page:</label>
        <MySelect
          style={{ width: "8em" }}
          className="ml1 small"
          // openPanelToTop
          // noOptionTitle=""
          // variant="text"
          // inputProps={{
          //   size: 'small',
          //   className: 'pt0 pb0 tbl-pag-select',
          //   type: 'number'
          //   // borderStyle: {
          //   //   border: 0,
          //   // },
          // }}
          value={pageSize}
          options={_options}
          onChange={(e) => {
            setPageSize(e.value);
          }}
        />
      </div>

      <div className="flex alignCenter borderBoxSize">
        {/*Page{' '}*/}
        <label className="textSecondary m mr2 dNoneXs fs-200">
          Page <span className="text">{pageIndex + 1}</span> of{" "}
          {pageOptions.length}
          {/*// pageOptions.length*/}
        </label>
        <Button
          title="Go to first page"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <MdFirstPage />
        </Button>
        <Button
          title="Previous page"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          <MdChevronLeft />
        </Button>
        <Button title="Next page" onClick={nextPage} disabled={!canNextPage}>
          <MdChevronRight />
        </Button>
        <Button
          //   className="dNoneXs small"
          title="Go to last page"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <MdLastPage />
        </Button>
      </div>
    </div>
  );
};

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  //   size,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 160);

  return (
    <div className="p4 flex alignCenter">
      <TextField
        startIcon={<MdSearch size={"1.3em"} />}
        className={`p pt0`}
        // style={{ maxWidth: size === "small" ? "12em" : "" }}
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} items..`}
      />
    </div>
  );
};

const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;

  return (
    <input
      className="form-control"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};
export default ControlledTable;
