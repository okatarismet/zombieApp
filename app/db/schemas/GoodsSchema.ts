class GoodsSchema extends Realm.Object {}

GoodsSchema.schema = {
  name: 'Goods',
  properties: {
    _id: 'string',
    gold: 'int',
    food: 'int',
    population: 'int',
    habitFoodConstant: 'int',
  },
  primaryKey: '_id',
};

export default GoodsSchema;
