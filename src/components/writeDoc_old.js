import React from "react";
import { useSelector } from "react-redux";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import JSZip from "jszip";

const WriteDoc = () => {
  const interType = useSelector((state) => state.interType);
  const interNb = useSelector((state) => state.interNb);
  const interId = useSelector((state) => state.interId);

  const generateDoc = () => {
    console.log("generateDoc");
    // Charger le modèle de fichier Word
    fetch("/consignestrame.docx")
      .then((response) => response.arrayBuffer())
      .then((data) => {
        // Loguer le contenu du fichier récupéré
        console.log("Contenu du fichier récupéré :", data);
        // Créer un objet zip à partir des données du modèle
        const zip = new JSZip();
        zip.loadAsync(data).then((zip) => {
          // Initialiser le document avec les données du modèle
          const doc = new Docxtemplater();
          doc.loadZip(zip);

          // Remplacer les occurrences de texte dans le document
          doc.setData({
            interType: interType,
            interNb: interNb,
            interId: interId,
          });

          try {
            // Générer le document final
            doc.render();
            const output = doc.getZip().generate({ type: "blob" });

            // Utiliser l'interId dans le nom du fichier
            const fileName = `consignes_intervention_${interId}.docx`;

            // Télécharger le document
            saveAs(output, fileName);
          } catch (error) {
            console.error("Erreur lors de la génération du document", error);
          }
        });
      })
      .catch((error) => {
        console.error("Erreur lors du chargement du modèle", error);
      });
  };

  return (
    <div className="inter-generate-content">
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
