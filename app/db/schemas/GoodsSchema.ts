class GoodsSchema extends Realm.Object {}

GoodsSchema.schema = {
  name: 'Goods',
  properties: {
    _id: 'string',
    gold: 'number',
    food: 'number',
    population: 'number',
  },
  primaryKey: '_id',
};

export default GoodsSchema;
