import { createSlice } from "@reduxjs/toolkit";

const interSelectedSlice = createSlice({
  name: "interSelectedStore",
  initialState: {
    interType: null,
    interNb: null,
    nomIntervenant: null,
    interDuree: null,
    interPetitConso: [],
    interGrosConso: [],
    interGestes: [],
    interMessage:
      "VFC à envoyer SUR LE MOMENT !! + ajuster votre horaire d’arrivée SVP messieurs 🙏🏻🙏🏻🙏🏻🙏🏻", // Non utilisé, en dur dans la trame
    interAudio: null,
    interId: null,
    interAgence: null,
  },
  reducers: {
    setInterType: (state, action) => {
      state.interType = action.payload;
    },
    clearInterType: (state) => {
      state.interType = null;
    },

    setInterNb: (state, action) => {
      state.interNb = action.payload;
    },
    clearInterNb: (state) => {
      state.interNb = null;
    },
    setNomIntervenant: (state, action) => {
      state.nomIntervenant = action.payload;
    },
    clearNomIntervenant: (state) => {
      state.nomIntervenant = null;
    },
    setInterDuree: (state, action) => {
      state.interDuree = action.payload;
    },
    clearInterDuree: (state) => {
      state.interDuree = null;
    },

    setInterPetitConso: (state, action) => {
      state.interPetitConso = action.payload;
    },
    clearInterPetitConso: (state) => {
      state.interPetitConso = [];
    },
    setInterGrosConso: (state, action) => {
      state.interGrosConso = action.payload;
    },
    clearInterGrosConso: (state) => {
      state.interGrosConso = [];
    },
    setInterGestes: (state, action) => {
      state.interGestes = action.payload;
    },
    clearInterGestes: (state) => {
      state.interGestes = [];
    },

    setInterAudio: (state, action) => {
      state.interAudio = action.payload;
    },
    clearInterAudio: (state) => {
      state.interAudio = null;
    },
    setInterId: (state, action) => {
      state.interId = action.payload;
    },
    clearInterId: (state) => {
      state.interId = null;
    },
    setInterAgence: (state, action) => {
      state.interAgence = action.payload;
    },
    clearInterAgence: (state) => {
      state.interAgence = null;
    },
  },
});

export const {
  setInterType,
  setInterNb,
  setNomIntervenant,
  setInterDuree,
  clearInterType,
  clearInterNb,
  clearNomIntervenant,
  clearInterDuree,
  setInterPetitConso,
  clearInterPetitConso,
  setInterGrosConso,
  clearInterGrosConso,
  setInterGestes,
  clearInterGestes,
  setInterAudio,
  setInterId,
  setInterAgence,
  clearInterAudio,
  clearInterId,
  clearInterAgence,
} = interSelectedSlice.actions;
export default interSelectedSlice.reducer;
