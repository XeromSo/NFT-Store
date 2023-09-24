import React, { useState } from "react";
import { Tabs, Tab, Button } from "~/KIT";
import { BsTable, BsGridFill, BsGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineFilterList } from "react-icons/md";
import { Title, ShowMyProducts, UnderConstruction } from "~/components";
import { FAKE_NFTS } from "~/store/defaults";
import { useAppContext } from "~/context/appContext";

export default function Index() {
  const [selectedViewMode, setSelectedViewMode] = useState("list");
  const appCtx = useAppContext();
  const handleOpenUnderConstruction = () => {
    appCtx.ModalsManager.show(UnderConstruction)
  };
  return (
    <div className="flex column">
      <div className="flex alignCenter justifyBetween p3">
        <Title title="On sale items" color="warning" />
        {/* <h4 className="fontBold fs-400">Owned items</h4> */}
        <div className="flex alignCenter">
          <Tabs
            value={selectedViewMode}
            onChange={(value) => setSelectedViewMode(value)}
          >
            <Tab
              style={{ padding: "0.4em" }}
              label={<BsTable />}
              value="table"
            />
            <Tab
              style={{ padding: "0.4em" }}
              label={<BsGridFill />}
              value="grid"
            />
            <Tab
              style={{ padding: "0.4em" }}
              label={<BsGrid3X3GapFill />}
              value="list"
            />
          </Tabs>
          <Button
            onClick={handleOpenUnderConstruction}
            startIcon={<MdOutlineFilterList size="1.4em" />}
            className="outlined ml2"
          >
            Filter
          </Button>
        </div>
      </div>

      <ShowMyProducts data={FAKE_NFTS} selectedViewMode={selectedViewMode} />
    </div>
  );
}
