import React, { useEffect } from "react";
import { BiX } from "react-icons/bi";
import { MdAdd, MdBarChart, MdOutlineList, MdStarRate } from "react-icons/md";
import { UnderConstruction } from "~/components";
import { Avatar, Button, TextField } from "~/KIT";
import { nanoid } from "nanoid";

export default function LevelsStatManagerModal({
  closeModal,
  mode,
  onSave,
  savedState,
}) {
  const [form, setForm] = React.useState([]);
  const nameInputRef = React.useRef();
  const [newItem, setNewItem] = React.useState({
    name: "",
    value: 3,
    of: 5,
  });
  const handleChangeInput = (e, index) => {
    const { name, value } = e.target;
    const list = [...form];
    list[index][name] = value;
    setForm(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...form];
    list.splice(index, 1);
    setForm(list);

    // focus on the name input
    nameInputRef.current.focus();
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (newItem.name === "" || newItem.value === "" || newItem.of === "") {
      return;
    }

    setForm([...form, { ...newItem, id: nanoid() }]);
    setNewItem({ name: "", value: 3, of: 5 });

    // focus on the name input
    nameInputRef.current.focus();
  };

  useEffect(() => {
    if (savedState) {
      setForm(savedState);
    }
  }, [savedState]);

  const label = mode === "levels" ? "Levels" : "Stat";
  return (
    <div className="flex column alignStart">
      <div className="flex column relative">
        <div className="flex column p4 pb0">
          <Button
            onClick={closeModal}
            className="absolute icon"
            style={{ top: "1em", right: "1em" }}
          >
            <BiX size="1.5em" />
          </Button>
          <Avatar className="mainFilledBg rounded">
            {mode === "stats" ? (
              <MdBarChart size="1.5em" />
            ) : (
              <MdStarRate size="1.5em" />
            )}
            {/* <MdOutlineList size="1.5em" /> */}
          </Avatar>
          <h5 className="mt2 fs-300">{label} Manager</h5>
          <p className="textSecondary fs-150">
            {label} show up underneath your item, are clickable, and can be
            filtered in your collection's sidebar.
          </p>

          
        <div className="grid col2 gap-2 mt4">
          <label className="flexGrow1">Name</label>
          <label className="flexGrow1">Value</label>
        </div>
        </div>
        <div
          className="flex column overflowYAuto p4 pt2"
          style={{ maxHeight: "65vh" }}
        >
          {form.map((_item, index) => (
            <div className="grid col2 alignCenter gap-2 mb2" key={_item.id}>
              <TextField
                className="flexGrow1"
                placeholder="e.g. Color"
                value={_item.name}
                name="name"
                onChange={(e) => {
                  handleChangeInput(e, index);
                }}
              />
              {/* <TextField
              className="flexGrow1"
              placeholder="e.g. Red"
              value={property.value}
              name="value"
              onChange={(e) => {
                handleChangeInput(e, index);
              }}
              endIcon={
                
              }
            /> */}

              <div className="flexGrow1 flex alignCenter">
                <TextField
                  required
                  inputParentStyle={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  //   className="flexGrow1"
                  placeholder="e.g. 3"
                  name="value"
                  onChange={(e) => {
                    handleChangeInput(e, index);
                  }}
                  value={_item.value}
                  type="number"
                  endIcon={<div className="mainFilledBgButton p2 textSecondary">Of</div>}
                />

                <TextField
                  inputParentStyle={{
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderLeft: 0,
                  }}
                  // className="flexGrow1"
                  placeholder="e.g. 5"
                  name="of"
                  onChange={(e) => {
                    handleChangeInput(e, index);
                  }}
                  value={_item.of}
                  type="number"
                  endIcon={
                    <Button
                      style={{ height: "3.6ch", width: "3.6ch" }}
                      onClick={() => {
                        handleRemoveClick(index);
                      }}
                      className="icon m1"
                    >
                      <BiX size="1.5em" />
                    </Button>
                  }
                />
              </div>
            </div>
          ))}

          <form
            onSubmit={handleAddItem}
            className="grid col2 alignCenter gap-2"
          >
            <TextField
              ref={nameInputRef}
              className="flexGrow1"
              placeholder="e.g. Speed"
              name="name"
              required
              onChange={(e) => {
                setNewItem({ ...newItem, name: e.target.value });
              }}
              value={newItem.name}
            />
            <div className="flexGrow1 flex alignCenter">
              <TextField
                required
                inputParentStyle={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                //   className="flexGrow1"
                placeholder="e.g. 3"
                name="value"
                onChange={(e) => {
                  setNewItem({ ...newItem, value: e.target.value });
                }}
                value={newItem.value}
                type="number"
                endIcon={<div className="mainFilledBgButton p2 textSecondary">Of</div>}
              />

              <TextField
                inputParentStyle={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderLeft: 0,
                }}
                // className="flexGrow1"
                // placeholder="e.g. Red"
                name="of"
                onChange={(e) => {
                  setNewItem({ ...newItem, of: e.target.value });
                }}
                value={newItem.of}
                type="number"
                endIcon={
                  <Button
                    style={{ height: "3.6ch", width: "3.6ch" }}
                    type="submit"
                    className="icon mainFilledBgButton m1"
                  >
                    <MdAdd size="1.5em" />
                  </Button>
                }
              />
            </div>
          </form>
        </div>
      </div>

      <div className="flex alignCenter justifyBetween p1 w100 b bt1">
        <Button onClick={closeModal}>Cancel</Button>
        <Button
          className="contained"
          onClick={() => {
            onSave(form);
            closeModal();
          }}
        >
          Save changes
        </Button>
      </div>
    </div>
  );
}
