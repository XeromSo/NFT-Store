import React, { useEffect } from "react";
import { BiX } from "react-icons/bi";
import { MdAdd, MdOutlineList } from "react-icons/md";
import { UnderConstruction } from "~/components";
import { Avatar, Button, TextField } from "~/KIT";
import { nanoid } from "nanoid";

export default function PropertiesManagerModal({
  closeModal,
  onSave,
  savedProperties,
}) {
  const [properties, setProperties] = React.useState([]);
  const nameInputRef = React.useRef();
  const [newProperty, setNewProperty] = React.useState({
    name: "",
    value: "",
  });
  const handleChangeInput = (e, index) => {
    const { name, value } = e.target;
    const list = [...properties];
    list[index][name] = value;
    setProperties(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...properties];
    list.splice(index, 1);
    setProperties(list);

    // focus on the name input
    nameInputRef.current.focus();
  };

  const handleAddProperty = (e) => {
    e.preventDefault();

    if (newProperty.name === "" || newProperty.value === "") {
      return;
    }

    setProperties([...properties, { ...newProperty, id: nanoid() }]);
    setNewProperty({ name: "", value: "" });

    // focus on the name input
    nameInputRef.current.focus();
  };

  useEffect(() => {
    if (savedProperties) {
      setProperties(savedProperties);
    }
  }, [savedProperties]);
  return (
    <div className="flex column alignStart">
      <div className="flex column p4 relative">
        <Button
          onClick={closeModal}
          className="absolute icon"
          style={{ top: "1em", right: "1em" }}
        >
          <BiX size="1.5em" />
        </Button>
        <Avatar className="mainFilledBg rounded">
          <MdOutlineList size="1.5em" />
        </Avatar>
        <h5 className="mt2 fs-300">Properties Manager</h5>
        <p className="textSecondary fs-150">
          Properties show up underneath your item, are clickable, and can be
          filtered in your collection's sidebar.
        </p>
        <div className="grid col2 gap-2 mt4 mb1">
          <label className="flexGrow1">Name</label>
          <label className="flexGrow1">Value</label>
          {/* <div className="ml2" style={{ width: "4.4ch" }} /> */}
        </div>

        {properties.map((property, index) => (
          <div className="grid col2 alignCenter gap-2 mb2" key={property.id}>
            <TextField
              className="flexGrow1"
              placeholder="e.g. Color"
              value={property.name}
              name="name"
              onChange={(e) => {
                handleChangeInput(e, index);
              }}
            />
            <TextField
              className="flexGrow1"
              placeholder="e.g. Red"
              value={property.value}
              name="value"
              onChange={(e) => {
                handleChangeInput(e, index);
              }}
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
        ))}

        <form
          onSubmit={handleAddProperty}
          className="grid col2 alignCenter gap-2"
        >
          <TextField
            ref={nameInputRef}
            className="flexGrow1"
            placeholder="e.g. Color"
            name="name"
            required
            onChange={(e) => {
              setNewProperty({ ...newProperty, name: e.target.value });
            }}
            value={newProperty.name}
          />
          <TextField
            required
            className="flexGrow1"
            placeholder="e.g. Red"
            name="value"
            onChange={(e) => {
              setNewProperty({ ...newProperty, value: e.target.value });
            }}
            value={newProperty.value}
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
        </form>
      </div>

      <div className="flex alignCenter justifyBetween p1 w100 b bt1 mt6">
        <Button onClick={closeModal}>Cancel</Button>
        <Button
          className="contained"
          onClick={() => {
            onSave(properties);
            closeModal();
          }}
        >
          Save changes
        </Button>
      </div>
    </div>
  );
}
