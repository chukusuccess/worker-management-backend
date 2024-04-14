import * as mongoose from 'mongoose';

export interface Mitarbeiter {
  firstName: string;
  lastName: string;
  email: string;
  broughtByLvl1: mongoose.Types.ObjectId;
  supervisor?: mongoose.Types.ObjectId;
  lvl2?: number;
  lvl3?: number;
  superCommission: boolean;
  street: string;
  city: string;
  iban: string;
}

export const MitarbeiterSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    broughtByLvl1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Worker',
      default: null,
    },
    supervisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Worker',
      default: null,
    },
    lvl2: { type: Number, default: 0 },
    lvl3: { type: Number, default: 0 },
    superCommission: { type: Boolean, default: false },
    street: String,
    city: String,
    iban: String,
  },
  { collection: 'workers' },
);
