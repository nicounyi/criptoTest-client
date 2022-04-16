import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

const SearchBar = () => {
  const [selectedType, setSelectedType] = useState("type");
  const [search, setSearch] = useState("");
  const router = useRouter();

  const change = (e) => {
    setSelectedType(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    search.length > 0 && selectedType !== "type" &&
    router.push({
      pathname: `${selectedType}/`,
      query: { search },
  });
  };

  return (
    <>
      <div className="input-group">
        <span className="input-group-text p-1">
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectedType}
            onChange={change}
          >
            <option defaultValue value={"type"}>
              Buscar por...
            </option>
            <option value="block">Bloque</option>
            <option value="transactions">Transacciones</option>
            <option value="address">Address</option>
          </select>
        </span>
        <input
          type="text"
          className="form-control"
          onKeyPress={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="search"
          onClick={handleSubmit}
        >
          Buscar
        </button>
      </div>
    </>
  );
};

export default SearchBar;
