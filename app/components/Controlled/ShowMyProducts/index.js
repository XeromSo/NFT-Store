import React, { useMemo } from 'react'
import { Product, SmallProduct } from "~/components";
import { Table, Avatar } from "~/KIT";

const comps = {
    grid: Product,
    list: SmallProduct,
  };
  const StoreProduct = ({ item, viewMode }) => {
    const Comp = comps[viewMode];
    return (
      <div
        className={`${
          viewMode === "grid"
            ? "span-3 span-6-sm span-12-xs"
            : "span-2 span-4-sm span-6-xs"
        }`}
      >
        <Comp navigateTo={`/nft/${item.id}`} item={item} />
      </div>
    );
  };
export default function Index({ data, selectedViewMode }) {
    if (selectedViewMode === "table") {
        const columns = [
          {
            Header: "Title",
            accessor: "title",
            ellipse: true,
            width: 260,
            maxWidth: 260,
            Cell: ({ row, value }) => {
              return (
                <div className="flex alignCenter">
                  <Avatar className="mr2 rounded" src={row.original.image} />
                  {value}
                </div>
              );
            },
          },
    
          {
            Header: "Creator",
            accessor: "creator",
            ellipse: true,
            width: 160,
            maxWidth: 160,
            Cell: ({ row, value }) => {
              return (
                <div className="flex alignCenter">
                  <Avatar className="mr2 small" src={row.original.avatar} />
                  {value}
                </div>
              );
            },
          },
          {
            // cellClassName: 'noWrapText',
            Header: "Current bid",
            accessor: "currentBid",
            ellipse: true,
            width: 160,
            maxWidth: 160,
          },
          {
            Header: "Likes",
            accessor: "likes",
            ellipse: true,
            width: 160,
            maxWidth: 160,
          },
        ];
    
        return (
          <div className="surface-1 shadow-2 radius-1">
            <Table data={data} columns={columns} />
          </div>
        );
      }
    
      const memoizedProducts = useMemo(() => {
        return data.length === 0 ? (
          <div
            className="w100 flex alignCenter justifyCenter"
            style={{ minHeight: "40vh" }}
          >
            No mahsol
          </div>
        ) : (
          data.map((item, index) => (
            <StoreProduct viewMode={selectedViewMode} item={item} key={index} />
          ))
        );
      }, [data, selectedViewMode]);
      return <div className="grid col12 gap-3 pl2 pr2">{memoizedProducts}</div>;
}
