import Realm from 'realm';
import HabitSchema from './schemas/HabitSchema';
// Create realm
let realm = new Realm({ schema: [HabitSchema], schemaVersion: 1 });

export default realm;
