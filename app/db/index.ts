import HabitSchema from './schemas/HabitSchema';
// Create realm
let Realm = null;

if (Realm === null) {
  Realm = require('realm');
}

let realm = new Realm({ schema: [HabitSchema.schema], schemaVersion: 1 });

export default realm;
