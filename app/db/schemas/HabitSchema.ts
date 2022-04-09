class HabitSchema extends Realm.Object {}

HabitSchema.schema = {
  name: 'Habit',
  properties: {
    _id: 'string',
    name: 'string',
    type: 'string',
    multiple_goal: 'int',
    multiple_completed_today: 'int',
    combo: 'int',
    lastDateCompleted: 'date',
  },
  primaryKey: '_id',
};

export default HabitSchema;
