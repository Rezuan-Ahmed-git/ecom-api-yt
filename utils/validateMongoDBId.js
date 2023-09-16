const mongoose = require('mongoose');

//TODO: Try to implement next time
//This function doesn't work
const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error('This id is not valid or not Found');
};
module.exports = validateMongoDbId;
