import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PetitConso from "../components/PetitConso";
import GrosConso from "../components/GrosConso";

import {
  setInterType,
  clearInterType,
  setInterNb,
  clearInterNb,
  setNomIntervenant,
  clearNomIntervenant,
  setInterDuree,
  clearInterDuree,
  setInterGestes,
  clearInterGestes,
  setInterPetitConso,
  clearInterPetitConso,
  setInterGrosConso,
  clearInterGrosConso,
  setInterAudio,
  clearInterAudio,
  setInterId,
  clearInterId,
  setInterAgence,
  clearInterAgence,
} from "../feature/interSelectedSlice";

import WriteDoc from "../components/WriteDoc";

const Home = () => {
  const [selectedType, setSelectedType] = useState(""); // Valeur locale de interType

  const [selectedNb, setSelectedNb] = useState("");

  const [selectedNomIntervenant, setSelectedNomIntervenant] = useState("");
  const [selectedInterDuree, setSelectedInterDuree] = useState("");
  const [selectedInterGestes, setSelectedInterGestes] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  // eslint-disable-next-line no-unused-vars
  const [selectedInterGestes1, setSelectedInterGestes1] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedInterGestes2, setSelectedInterGestes2] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedInterGestes3, setSelectedInterGestes3] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedInterGestes4, setSelectedInterGestes4] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedInterGestes5, setSelectedInterGestes5] = useState("");
  const [selectedInterPetitConso, setSelectedInterPetitConso] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  // eslint-disable-next-line no-unused-vars
  const [selectedInterPetitConso1, setSelectedInterPetitConso1] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedInterPetitConso2, setSelectedInterPetitConso2] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedInterPetitConso3, setSelectedInterPetitConso3] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedInterPetitConso4, setSelectedInterPetitConso4] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedInterPetitConso5, setSelectedInterPetitConso5] = useState("");
  const [selectedInterGrosConso, setSelectedInterGrosConso] = useState([
    "",
    "",
    "",
  ]);
  // eslint-disable-next-line no-unused-vars
  const [selectedInterGrosConso1, setSelectedInterGrosConso1] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedInterGrosConso2, setSelectedInterGrosConso2] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedInterGrosConso3, setSelectedInterGrosConso3] = useState("");
  const [selectedInterAudio, setSelectedInterAudio] = useState("");

  const [selectedId, setSelectedId] = useState("");
  const [selectedAgence, setSelectedAgence] = useState("");

  const dispatch = useDispatch();

  const [messageInfoDuree, setMessageInfoDuree] = useState("");
  const [messageInfoPetitConso, setMessageInfoPetitConso] = useState("");
  const [messageInfoGrosConso, setMessageInfoGrosConso] = useState("");
  const [messageInfoGestes, setMessageInfoGestes] = useState("");
  const [messageGenerate, setMessageGenerate] = useState("");
  useEffect(() => {
    // Défilement vers le haut de la page au chargement
    window.scrollTo(0, 0);
  }, []);

  const handleHome = () => {
    console.log("handleHome");

    // Réinitialisation des valeurs locales et du store
    setSelectedType("");
    setSelectedNb("");
    setSelectedNomIntervenant("");
    setSelectedInterDuree("");
    setSelectedInterPetitConso(["", "", "", "", ""]);
    setSelectedInterPetitConso1("");
    setSelectedInterPetitConso2("");
    setSelectedInterPetitConso3("");
    setSelectedInterPetitConso4("");
    setSelectedInterPetitConso5("");
    setSelectedInterGrosConso(["", "", ""]);
    setSelectedInterGrosConso1("");
    setSelectedInterGrosConso2("");
    setSelectedInterGrosConso3("");
    setSelectedInterGestes(["", "", "", "", ""]); // Réinitialisation des gestes
    setSelectedInterGestes1("");
    setSelectedInterGestes2("");
    setSelectedInterGestes3("");
    setSelectedInterGestes4("");
    setSelectedInterGestes5("");
    setSelectedInterAudio("");
    setSelectedId("");
    setSelectedAgence("");
    setMessageInfoDuree("");
    setMessageInfoPetitConso("");
    setMessageInfoGrosConso("");
    setMessageInfoGestes("");
    setMessageGenerate("");
    dispatch(clearInterType());
    dispatch(clearInterNb());

    dispatch(clearNomIntervenant());
    dispatch(clearInterDuree());
    dispatch(clearInterPetitConso());
    dispatch(clearInterGrosConso());
    dispatch(clearInterGestes());
    dispatch(clearInterAudio());
    dispatch(clearInterId());
    dispatch(clearInterAgence());
  };

  const handleTypeInter = (typeSelected) => {
    console.log("handleTypeInter :" + typeSelected);
    dispatch(setInterType(typeSelected));
    setSelectedType(typeSelected);
    switch (typeSelected) {
      case `Chasse d'Eau 3/6 litres WC au sol`:
        setMessageInfoDuree("RAS");
        setMessageInfoPetitConso("RAS");
        setMessageInfoGrosConso(`Matériel classique en stock dans le camion`);
        setMessageInfoGestes(
          `-	Remplacement du robinet de WC + ensemble mécanisme chasse d’eau `
        );
        break;
      case `Chauffe-Eau blinde`:
        setMessageInfoDuree(
          `(1,75h des 15L à 100L) – (2,25h des 150L à 200L) – (2,5h des 250 à 300L) `
        );
        setMessageInfoPetitConso(
          `(ex. -> ??? plâtre, renfort bois, fixation de part en part, groupe de sécu coudé, groupe de sécu réverso ??? )`
        );
        setMessageInfoGrosConso(
          `-	Gros matériel 95% du temps toujours en stock chez fournisseur (à vérifier par Boris tout de même avec la ref sur le site du fournisseur si c’est fait par un employé blicko)`
        );
        setMessageInfoGestes(`- Remplacement du chauffe-eau électrique
        - Bien valider l’alimentation électrique du chauffe-eau et si possible même en début de chantier !
        - Bien filmer les références du nouveau chauffe-eau dans la vfc. `);
        break;
      case `Remplacer Meuble Vasque`:
        setMessageInfoDuree("2H30min");
        setMessageInfoPetitConso("Wago ou domino");
        setMessageInfoGrosConso(
          `Stock bureau à vérifier ou à commander , Mitigeur stock camion`
        );
        setMessageInfoGestes(`-	Remplacement ou mise en place d’un meuble lavabo . (miroir ou pas )
        -	Sur la vfc, bien filmer la bonne tenu de l’ensemble, la bonne étanchéité des raccords et l’eau froide et chaude correctement branchés
        `);
        break;
      case `Robinet Mitigeur`:
        setMessageInfoDuree("20/30/40 minutes ");
        setMessageInfoPetitConso("cache trou, raccords olive ou tectite, … ");
        setMessageInfoGrosConso(`Matériel classique en stock dans le camion`);
        setMessageInfoGestes(`-	Remplacement du robinet. 
        -	Sur la vfc, bien filmer la bonne tenu de l’ensemble, la bonne étanchéité des raccords et l’eau froide et chaude correctement branchés
        `);
        break;
      case `Vanne Radiateurs`:
        setMessageInfoDuree("4 h");
        setMessageInfoPetitConso("RAS");
        setMessageInfoGrosConso(
          "Matériel classique dispo chez fournisseur Richardson"
        );
        setMessageInfoGestes(`-	Purge de l'installation . 
        -	Remplacement robinet simple et coude de réglage sur 1 radiateur cuisine . 
        -	 Remplacement robinet de réglage simple et coude de réglage sur 2 radiateur mezzanine. 
        -	Remplacement robinet simple et coude de réglage dans une chambre . 
        -	Remplacement robinet de réglage et coude de réglage dans sur 2 radiateurs du salon .
        `);
        break;
      case `WC au sol std`:
        setMessageInfoDuree("2,5h  ");
        setMessageInfoPetitConso(
          "ex : pipe std 90° avec manchon ou ZTT, fixations WC,… "
        );
        setMessageInfoGrosConso(
          `95% du temps toujours en stock chez fournisseur (à vérifier par Boris tout de même avec la ref sur le site du fournisseur si c’est fait par un blickoMan )`
        );
        setMessageInfoGestes(
          `-	Remplacement du wc complet (robinet WC y compris) avec reprise correcte de l’alimentation, remplacement de la pipe de wc ou au minimum du joint+collerette nicoll, bonne fixation au sol avec silicone translucide à la base de la cuvette si nécessité de renforcer la fixation de l’ensemble`
        );
        break;
      case `Autre`:
        setMessageInfoDuree("");
        setMessageInfoPetitConso("");
        setMessageInfoGrosConso("");
        setMessageInfoGestes("");
        break;
      default:
        break;
    }
  };

  const handleNbInter = (nbSelected) => {
    console.log("handleNbInter :" + nbSelected);
    dispatch(setInterNb(nbSelected));
    setSelectedNb(nbSelected);
  };

  const handleNomIntervenant = (nomSelected) => {
    console.log("handleNomIntervenant :" + nomSelected);
    dispatch(setNomIntervenant(nomSelected));
    setSelectedNomIntervenant(nomSelected);
  };

  const handleDureeInter = (dureeSelected) => {
    console.log("handleDureeInter :" + dureeSelected);
    dispatch(setInterDuree(dureeSelected));
    setSelectedInterDuree(dureeSelected);
  };

  const handlePetitConso = (petitconsoSelected, index) => {
    console.log("handlePetitConso :" + index + ":" + petitconsoSelected);
    const updatedPetitConso = [...selectedInterPetitConso];
    updatedPetitConso[index] = petitconsoSelected || ""; // Handle undefined values
    setSelectedInterPetitConso(updatedPetitConso);
    dispatch(setInterPetitConso(updatedPetitConso));
  };

  const handleGrosConso = (grosconsoSelected, index) => {
    console.log("handleGrosConso :" + index + ":" + grosconsoSelected);
    const updatedGrosConso = [...selectedInterGrosConso];
    updatedGrosConso[index] = grosconsoSelected || ""; // Handle undefined values
    setSelectedInterGrosConso(updatedGrosConso);
    dispatch(setInterGrosConso(updatedGrosConso));
  };

  const handlePetitConsoSelect = (petitconsoSelected, index) => {
    console.log("handlePetitConsoSelect :" + petitconsoSelected);
    const updatedInterPetitConso = [...selectedInterPetitConso];
    updatedInterPetitConso[index] = petitconsoSelected || "";

    dispatch(setInterPetitConso(updatedInterPetitConso));
    setSelectedInterPetitConso(updatedInterPetitConso);
  };

  const handleGrosConsoSelect = (grosconsoSelected, index) => {
    console.log("handleGrosConsoSelect :" + grosconsoSelected);

    const updatedInterGrosConso = [...selectedInterGrosConso];
    updatedInterGrosConso[index] = grosconsoSelected || "";

    dispatch(setInterGrosConso(updatedInterGrosConso));
    setSelectedInterGrosConso(updatedInterGrosConso);
  };

  const handleGestesInter = (gestesSelected, index) => {
    console.log("handleGestesInter :" + index + ":" + gestesSelected);
    const updatedGestes = [...selectedInterGestes];
    updatedGestes[index] = gestesSelected || "";
    setSelectedInterGestes(updatedGestes);
    dispatch(setInterGestes(updatedGestes));
  };

  const handleAudioInter = (audioSelected) => {
    console.log("handleAudioInter :" + audioSelected);
    dispatch(setInterAudio(audioSelected));
    setSelectedInterAudio(audioSelected);
  };

  const handleIdInter = (idSelected) => {
    console.log("handleIdInter :" + idSelected);
    dispatch(setInterId(idSelected));
    setSelectedId(idSelected);
  };

  const handleAgenceInter = (agenceSelected) => {
    console.log("handleAgenceInter :" + agenceSelected);
    dispatch(setInterAgence(agenceSelected));
    setSelectedAgence(agenceSelected);
  };

  let content = (
    <div className="home">
      <div className="home-title">
        <h1>CONSIGNES D'INTERVENTION</h1>
        <button onClick={handleHome}>
          <i className="fa-solid fa-house"></i>
        </button>
      </div>
      <div className="home-content">
        <div className="type-inter">
          <h2>**********************************</h2>
          <h3 className="priorite-saisie">
            &#9888; Sélectionner le type d'intervention EN PREMIER{" "}
          </h3>
          <h3>*************************************************</h3>
          <select
            name="typeinter"
            required
            id="typeinter"
            value={selectedType} // Utilisation de la valeur interType locale
            onChange={(e) => {
              handleTypeInter(e.target.value);
            }}
          >
            {" "}
            <option value="">Type intervention</option>
            <option value="Chasse d'Eau 3/6 litres WC au sol">
              Chasse d'eau standard avec RBT WC
            </option>
            <option value="Chauffe-Eau blinde">Chauffe-eau blinde</option>
            <option value="Remplacer Meuble Vasque">Meuble Vasque</option>
            <option value="Robinet Mitigeur">Robinet Mitigeur Classique</option>
            <option value="Vanne Radiateurs">Vanne Radiateurs</option>
            <option value="WC au sol std">WC au sol std</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div className="nb-inter">
          <h3>** Sélectionner le Nombre d'interventions</h3>
          <h3>**********************************</h3>
          <select
            name="nbinter"
            required
            id="nbinter"
            value={selectedNb} // Utilisation de la valeur interNb du store
            onChange={(e) => {
              handleNbInter(e.target.value);
            }}
          >
            {" "}
            <option value="">Nb d'intervention</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5 ou plus</option>
          </select>
        </div>

        <div className="nom-intervenant">
          <h3>** Sélectionner le Nom de l'intervenant</h3>
          <h3>**********************************</h3>
          <select
            name="nomintervenant"
            id="nomintervenant"
            required
            value={selectedNomIntervenant}
            onChange={(e) => {
              handleNomIntervenant(e.target.value);
            }}
          >
            {" "}
            <option value="">Nom Intervenant</option>
            <option value="N'importe">N'importe</option>
            <option value="Antho">Antho</option>
            <option value="Tonio">Tonio</option>
            <option value="Sous-Traitant">Sous-Traitant</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div className="duree-inter">
          <h3>
            ** Temps de travail standard à prévoir sur place (en heure exacte
            réel)
          </h3>
          <h3>**********************************</h3>

          {messageInfoDuree !== "RAS" && messageInfoDuree !== "" && (
            <p>NB: {messageInfoDuree}</p>
          )}

          <input
            type="text"
            name="dureeinter"
            required
            id="dureeinter"
            value={selectedInterDuree}
            maxLength={15}
            placeholder="Durée réelle"
            onChange={(e) => {
              handleDureeInter(e.target.value);
            }}
          />
        </div>

        {/* PETIT CONSOMMABLE */}

        <PetitConso
          selectedType={selectedType}
          messageInfoPetitConso={messageInfoPetitConso}
          selectedInterPetitConso={selectedInterPetitConso}
          handlePetitConsoSelect={handlePetitConsoSelect}
          handlePetitConso={handlePetitConso}
        />

        {/* GROS CONSOMMABLE */}

        <GrosConso
          selectedType={selectedType}
          messageInfoGrosConso={messageInfoGrosConso}
          selectedInterGrosConso={selectedInterGrosConso}
          handleGrosConsoSelect={handleGrosConsoSelect}
          handleGrosConso={handleGrosConso}
        />

        <div className="gestes-inter">
          <h3>** Gestes à effectuer (5 lignes de 100 car max)</h3>
          <h3>**********************************</h3>
          {messageInfoGestes !== "RAS" && messageInfoGestes !== "" && (
            <p>NB: {messageInfoGestes}</p>
          )}
          {[1, 2, 3, 4, 5].map((lineNumber) => (
            <div key={lineNumber}>
              <input
                type="text"
                name={`gestesinter${lineNumber}`}
                id={`gestesinter${lineNumber}`}
                value={selectedInterGestes[lineNumber - 1]}
                maxLength={100}
                onChange={(e) => {
                  handleGestesInter(e.target.value, lineNumber - 1);
                }}
              />
            </div>
          ))}
        </div>

        <div className="audio-inter">
          <h3>Audio nécessaire au dossier</h3>
          <h3>**********************************</h3>
          <select
            name="audiointer"
            id="audiointer"
            required
            value={selectedInterAudio}
            onChange={(e) => {
              handleAudioInter(e.target.value);
            }}
          >
            {" "}
            <option value="">Audio</option>
            <option value="NON">NON</option>
            <option value="OUI il est dans le dossier du client dans l’onglet « autre »">
              OUI il est dans le dossier du client dans l’onglet « autre »
            </option>
            {/* <option value="Autre">Autre</option> */}
          </select>
        </div>

        <div className="id-inter">
          <h3>Sélectionner l'Identifiant d'intervention (5 car max)</h3>
          <h3>**********************************</h3>
          <input
            type="text"
            name="idinter"
            id="idinter"
            required
            value={selectedId} // Utilisation de la valeur interId du store
            maxLength={5}
            minLength={3}
            placeholder="Id"
            onChange={(e) => {
              handleIdInter(e.target.value);
            }}
          />
        </div>

        <div className="agence-inter">
          <h3>Agence (12 car max)</h3>
          <h3>**********************************</h3>
          <input
            type="text"
            name="agenceinter"
            id="agenceinter"
            required
            value={selectedAgence}
            maxLength={12}
            placeholder="Agence"
            onChange={(e) => {
              handleAgenceInter(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="home-generate-doc">
        <WriteDoc
          selectedType={selectedType}
          selectedNb={selectedNb}
          selectedNomIntervenant={selectedNomIntervenant}
          selectedInterDuree={selectedInterDuree}
          selectedInterPetitConso={selectedInterPetitConso}
          selectedInterGrosConso={selectedInterGrosConso}
          selectedInterGestes={selectedInterGestes}
          selectedInterAudio={selectedInterAudio}
          selectedId={selectedId}
          selectedAgence={selectedAgence}
          messageInfoDuree={messageInfoDuree}
          messageInfoPetitConso={messageInfoPetitConso}
          messageInfoGrosConso={messageInfoGrosConso}
          messageInfoGestes={messageInfoGestes}
          messageGenerate={messageGenerate}
          setMessageGenerate={setMessageGenerate}
        />
      </div>
    </div>
  );

  return content;
};

export default Home;
