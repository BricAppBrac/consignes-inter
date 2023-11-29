import React from "react";

const PetitConso = ({
  selectedType,
  messageInfoPetitConso,
  selectedInterPetitConso,
  handlePetitConsoSelect,
  handlePetitConso,
}) => {
  let content = (
    <React.Fragment>
      {selectedType === "Remplacer Meuble Vasque" && (
        <div className="petit-conso">
          <h3>** Petit consommable un peu spécial</h3>
          <h3>**********************************</h3>
          {messageInfoPetitConso !== "RAS" && messageInfoPetitConso !== "" && (
            <p>NB: {messageInfoPetitConso}</p>
          )}
          {[1, 2, 3, 4, 5].map((lineNumber) => (
            <div key={lineNumber}>
              <select
                name={`petitconsoselect${lineNumber}`}
                id={`petitconsoselect${lineNumber}`}
                value={selectedInterPetitConso[lineNumber - 1]}
                onChange={(e) => {
                  handlePetitConsoSelect(e.target.value, lineNumber - 1);
                }}
              >
                {" "}
                <option value="">Petit Consommable</option>
                <option value="Wago">Wago</option>
                <option value="Domino">Domino </option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          ))}
        </div>
      )}

      {selectedType !== "Remplacer Meuble Vasque" && (
        <div className="petit-conso">
          <h3>** Petit consommable un peu spécial (5 lignes de 300 car max)</h3>
          <h3>**********************************</h3>
          {messageInfoPetitConso !== "RAS" && messageInfoPetitConso !== "" && (
            <p>NB: {messageInfoPetitConso}</p>
          )}
          {[1, 2, 3, 4, 5].map((lineNumber) => (
            <div key={lineNumber}>
              <input
                type="text"
                name={`petitconso${lineNumber}`}
                id={`petitconso${lineNumber}`}
                value={selectedInterPetitConso[lineNumber - 1]}
                maxLength={500}
                onChange={(e) => {
                  handlePetitConso(e.target.value, lineNumber - 1);
                }}
              />
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
  return content;
};

export default PetitConso;
