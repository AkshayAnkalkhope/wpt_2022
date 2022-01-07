const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/connection").prototype);
const dbinfo = {
  host: "localhost",
  User: "root",
  password: "cdac",
  database: "wptexam",
};

const addMessege = async (messege) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `Insert into Message values(?)`;
  await connection.queryAsync(sql, [message.messagebody]);
  await connection.endasync();
};
const messege = {
  messegebody: "Hello everyone! i am Akshay Ankalkhope",
};

const showMessege = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = "select * from MESSAGE";
  let list = await connection.queryAsync(sql);
  console.log(list);
  await connection.endAsync();
  return list;
};
showMessege();
