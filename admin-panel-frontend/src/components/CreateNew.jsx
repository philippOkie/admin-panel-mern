import { useState } from "react";

const CreateNew = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [wheelSize, setWheelSize] = useState("");
  const [prize, setPrize] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleResetBtnClick = () => {
    setName("");
    setType("");
    setColor("");
    setWheelSize("");
    setPrize("");
    setId("");
    setDescription("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleWheelSizeChange = (e) => {
    setWheelSize(e.target.value);
  };

  const handlePrizeChange = (e) => {
    setPrize(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          required
          type="text"
          onChange={handleNameChange}
          placeholder="Name"
        />
        <input
          required
          type="text"
          onChange={handleTypeChange}
          placeholder="Type"
        />
        <input
          required
          type="text"
          onChange={handleColorChange}
          placeholder="Color"
        />
        <input
          required
          type="text"
          onChange={handleWheelSizeChange}
          placeholder="Wheel Size"
        />
        <input
          required
          type="text"
          onChange={handlePrizeChange}
          placeholder="Prize"
        />
        <input
          required
          type="text"
          onChange={handleIdChange}
          placeholder="ID(slug):XXXXXXXXXXXXX"
        />
        <textarea
          required
          type="text"
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <button onClick={handleSubmit} type="submit">
          save
        </button>
        <button type="reset" onClick={handleResetBtnClick}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
