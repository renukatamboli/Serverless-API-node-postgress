const db = require("./models");
const user = require("./models/user");
const syncDB = require("./syncDB");


module.exports.create = async (event) => {
  const user = db.User;
  await syncDB();  
  await user.create({...JSON.parse(event.body)});
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: "User created",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.getOne = async (event) => {
  const user = db.User;
  await syncDB();  
  const result = await user.findOne({ where:{"id": event.pathParameters.id} });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: result,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.getAll = async (event) => {
  const user = db.User;
  await syncDB();  
  const result = await user.findAll();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: result,
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports.delete = async (event) => {
  const user = db.User;
  await syncDB();  
  await user.destroy({ where:{"id": event.pathParameters.id} });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "User Deleted",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.update = async (event) => {
  const user = db.User;
  await syncDB();  
  const result = await user.update({...JSON.parse(event.body)},{ where:{"id": event.pathParameters.id} });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "User Updated",
        input: event,
      },
      null,
      2
    ),
  };
};
