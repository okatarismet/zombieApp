class HabitSchema extends Realm.Object {}

HabitSchema.schema = {
  name: 'Habit',
  properties: {
    _id: 'string',
    name: 'string',
    type: 'string',
    frequency: 'int',
    combo: 'int',
    lastDateCompleted: 'date',
  },
  primaryKey: '_id',
};

export default HabitSchema;
