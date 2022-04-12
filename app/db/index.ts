import HabitSchema from './schemas/HabitSchema';
import GoodsSchema from './schemas/GoodsSchema';
// Create realm
let Realm = null;

if (Realm === null) {
  Realm = require('realm');
}

let realm = new Realm({
  schema: [HabitSchema.schema, GoodsSchema.schema],
  schemaVersion: 1,
});

export default realm;
