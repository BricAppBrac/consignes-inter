import React from "react";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import PizZip from "pizzip";

const WriteDoc = ({
  selectedType,
  selectedNb,
  selectedNomIntervenant,
  selectedInterDuree,
  selectedInterPetitConso,
  selectedInterGrosConso,
  selectedInterGestes,
  selectedInterAudio,
  selectedId,
  selectedAgence,
  messageInfoDuree,
  messageInfoPetitConso,
  messageInfoGrosConso,
  messageInfoGestes,
  messageGenerate,
  setMessageGenerate,
}) => {
  console.log("WriteDoc");
  console.log("interType :" + selectedType);
  console.log("interNb :" + selectedNb);
  console.log("nomIntervenant :" + selectedNomIntervenant);
  console.log("dureeInter :" + selectedInterDuree);
  console.log("petitconsoInter :" + selectedInterPetitConso);
  console.log("grosconsoInter :" + selectedInterGrosConso);
  console.log("gestesInter :" + selectedInterGestes);
  console.log("audioInter :" + selectedInterAudio);
  console.log("interId :" + selectedId);
  console.log("interAgence :" + selectedAgence);
  console.log("messageInfoDuree :" + messageInfoDuree);
  console.log("messageInfoPetitConso :" + messageInfoPetitConso);
  console.log("messageInfoGrosConso :" + messageInfoGrosConso);
  console.log("messageInfoGestes :" + messageInfoGestes);

  const generateDoc = async () => {
    console.log("generateDoc");
    let missingDataMessage = "";
    // Traitement de la saisie incomplète

    if (!selectedType) {
      missingDataMessage += "Type d'intervention manquant * ";
    }

    if (!selectedNb) {
      missingDataMessage += "Nombre d'interventions manquant * ";
    }

    if (!selectedNomIntervenant) {
      missingDataMessage += "Nom de l'intervenant manquant * ";
    }

    if (!selectedInterDuree) {
      missingDataMessage += "Durée de l'intervention manquante * ";
    }

    if (
      selectedInterGestes.join() === ["", "", "", "", ""].join() ||
      selectedInterGestes.length === 0
    ) {
      missingDataMessage += "Gestes d'intervention manquants * ";
    }

    if (!selectedInterAudio) {
      missingDataMessage += "Information audio manquante * ";
    }

    if (!selectedId) {
      missingDataMessage += "Identifiant d'intervention manquant * ";
    }

    if (!selectedAgence) {
      missingDataMessage += "Agence manquante * ";
    }

    if (missingDataMessage !== "") {
      console.warn("Missing data for document generation");
      console.log(missingDataMessage);
      setMessageGenerate(missingDataMessage);
      missingDataMessage = "";
      return; // Arrêter la génération du document
    } else {
      setMessageGenerate("Veuillez enregistrer le fichier généré");
      missingDataMessage = "";
    }

    try {
      const response = await fetch("/consignestrame.docx");
      const data = await response.arrayBuffer();

      const zip = new PizZip(data);
      const doc = new Docxtemplater();
      doc.loadZip(zip);

      // const gestesProperties = selectedInterGestes.map((geste, index) => ({
      //   [`interGestes${index + 1}`]: geste !== undefined ? geste : "",
      // }));

      const gestesProperties = Array.from({ length: 5 }, (_, index) => ({
        [`interGestes${index + 1}`]: selectedInterGestes[index] || "",
      }));

      const petitconsoProperties = Array.from({ length: 5 }, (_, index) => ({
        [`interPetitConso${index + 1}`]: selectedInterPetitConso[index] || "",
      }));

      const grosconsoProperties = Array.from({ length: 3 }, (_, index) => ({
        [`interGrosConso${index + 1}`]: selectedInterGrosConso[index] || "",
      }));

      const defaultValues = {
        interType: selectedType || "Erreur Type",
        interNb: selectedNb || "Erreur Nb",
        nomIntervenant: selectedNomIntervenant || "Erreur Nom Intervenant",
        interDuree: selectedInterDuree || "Erreur Durée",

        interAudio: selectedInterAudio || "Erreur Audio",
        interId: selectedId || "Erreur ID",
        interAgence: selectedAgence || "Erreur Agence",
        messageInfoDuree: messageInfoDuree,
        messageInfoPetitConso: messageInfoPetitConso,
        messageInfoGrosConso: messageInfoGrosConso,
        messageInfoGestes: messageInfoGestes,
      };

      const docData = {
        ...defaultValues,
        ...Object.assign({}, ...petitconsoProperties),
        ...Object.assign({}, ...grosconsoProperties),
        ...Object.assign({}, ...gestesProperties),
      };

      doc.setData(docData);

      try {
        doc.render();
        const output = doc.getZip().generate({ type: "blob" });

        const fileName = `consignes_intervention_${selectedId}.docx`;
        console.log("fileName");
        console.log(fileName);

        saveAs(output, fileName);
      } catch (error) {
        console.error("Erreur lors de la génération du document", error);
      }
    } catch (error) {
      console.error("Erreur lors du chargement du modèle", error);
    }
  };

  return (
    <div className="inter-generate-content">
      <div className="generate-message">
        {messageGenerate !== "" && <p>&#9888; {messageGenerate} </p>}
      </div>
      <h2>Génération du Document Word</h2>
      <h2>***************************</h2>

      <div className="inter-generate">
        <button onClick={generateDoc}>
          Cliquer pour générer le document Word
        </button>
      </div>
    </div>
  );
};

export default WriteDoc;
