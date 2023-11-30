import React from "react";
import grosconsoData from "../assets/optionsSelect/grosconso.json";

const GrosConso = ({
  selectedType,
  messageInfoGrosConso,
  selectedInterGrosConso,
  handleGrosConsoSelect,
  handleGrosConso,
  isAutreGrosConsoSelected,
  handleAutreGrosConso,
}) => {
  // Récupérer les options en fonction du selectedType
  const optionsData = grosconsoData[selectedType] || [];
  console.log("optionsData");
  console.log(optionsData);

  console.log("selectedType :" + selectedType);

  let content = (
    <>
      {(selectedType === "Chasse d'Eau 3/6 litres WC au sol" ||
        selectedType === "Chauffe-Eau blinde" ||
        selectedType === "Remplacer Meuble Vasque" ||
        selectedType === "Robinet Mitigeur" ||
        selectedType === "Vanne Radiateurs" ||
        selectedType === "WC au sol std") && (
        <div className="gros-conso">
          <h3>** Grosse(s) fourniture(s) à prévoir</h3>
          <h3>**********************************</h3>
          {messageInfoGrosConso !== "" && <p>{messageInfoGrosConso}</p>}

          {[1, 2, 3].map((lineNumber) => (
            <div key={lineNumber}>
              <select
                name={`grosconsoselect${lineNumber}`}
                id={`grosconsoselect${lineNumber}`}
                value={selectedInterGrosConso[lineNumber - 1]}
                onChange={(e) => {
                  handleGrosConsoSelect(e.target.value, lineNumber - 1);
                }}
              >
                <option value="">Gros Consommable</option>
                {optionsData.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
                <option value="Autre">Autre</option>
              </select>
              {isAutreGrosConsoSelected[lineNumber - 1] && (
                <input
                  type="text"
                  name={`autreGrosConso${lineNumber}`}
                  id={`autreGrosConso${lineNumber}`}
                  placeholder={`Entrez le gros consommable`}
                  onChange={(e) => {
                    handleAutreGrosConso(e.target.value, lineNumber - 1);
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {selectedType !== "Chasse d'Eau 3/6 litres WC au sol" &&
        selectedType !== "Chauffe-Eau blinde" &&
        selectedType !== "Remplacer Meuble Vasque" &&
        selectedType !== "Robinet Mitigeur" &&
        selectedType !== "Vanne Radiateurs" &&
        selectedType !== "WC au sol std" && (
          <div className="gros-conso">
            <h3>
              ** Grosse(s) fourniture(s) à prévoir (3 lignes de 300 car max)
            </h3>
            <h3>**********************************</h3>
            {messageInfoGrosConso !== "" && <p>{messageInfoGrosConso}</p>}
            {[1, 2, 3].map((lineNumber) => (
              <div key={lineNumber}>
                <input
                  type="text"
                  name={`grosconso${lineNumber}`}
                  id={`grosconso${lineNumber}`}
                  value={selectedInterGrosConso[lineNumber - 1]}
                  maxLength={300}
                  onChange={(e) => {
                    handleGrosConso(e.target.value, lineNumber - 1);
                  }}
                />
              </div>
            ))}
          </div>
        )}
    </>
  );

  return content;
};

export default GrosConso;
