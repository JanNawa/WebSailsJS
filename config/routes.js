module.exports.routes = {
  "/": { view: "pages/homepage" },
  // Retrieve data
  "GET /viewData398": "AppController.viewData398",
  "GET /viewDataByID398": "AppController.viewDataByID398",
  // Add data
  "GET /addData398": { view: "pages/addData398" },
  "POST /addData398": "AppController.addData398",
  // Update data
  "GET /updateData398": { view: "pages/updateData398" },
  "POST /updateData398": "AppController.updateData398",
  // Delete data
  "GET /deleteData398": { view: "pages/deleteData398" },
  "POST /deleteData398": "AppController.deleteData398",
  };