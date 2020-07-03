module.exports = {
    // GET ALL
    viewData398: function (req398, res398) {
        const sqlSelectAll398 = "SELECT * FROM jobs398"
        // var rawResult = await sails.sendNativeQuery(sqlSelectAll398);
        // sails.log(rawResult);
        sails.sendNativeQuery(sqlSelectAll398, function (err, rawResult398) {
            let jobs398 = [];
            for (let [key, value] of Object.entries(rawResult398.rows)) {
                let job398 = {};
                for (let [k, v] of Object.entries(value)) {
                    job398[k] = v;
                }
                jobs398.push(job398);
            }
            if (!jobs398) {
                res398.send("Cannot find anything to show!")
            }
            if (jobs398) {
                res398.view("\\pages\\viewData398", { jobs398: jobs398 })
            }
        });
    },
    // GET ONE BY ID
    viewDataByID398: function (req398, res398) {
        const jobID398 = req398.param('jobID398');
        const partID398 = parseInt(req398.param('partID398'));
        const sqlSelectOne398 = "SELECT * FROM jobs398 WHERE jobID398 = '" + jobID398 + "' AND partID398 = " + partID398;

        sails.sendNativeQuery(sqlSelectOne398, function (err, rawResult398) {
            var length398 = rawResult398.rows.length;
            if (length398 == 0) {
                res398.send("jobID398: " + jobID398 + " with " + "partID398: " + partID398 + " do not exist, can't retrieve data.");
            } else {
                var job398 = {};
                for (let [key, value] of Object.entries(rawResult398.rows)) {
                    for (let [k, v] of Object.entries(value)) {
                        job398[k] = v;
                    }
                }
                res398.view("\\pages\\viewDataByID398", { job398: job398 });
            }
        });
    },
    // ADD DATA
    addData398: function (req398, res398) {
        const jobID398 = req398.body.jobID398;
        const partID398 = parseInt(req398.body.partID398);
        const qty398 = parseInt(req398.body.qty398);

        const sqlSelectOne398 = "SELECT * FROM jobs398 WHERE jobID398 = '" + jobID398 + "' AND partID398 = " + partID398;
        sails.sendNativeQuery(sqlSelectOne398, async function (err, rawResult398) {
            var length398 = rawResult398.rows.length;
            if (length398 != 0) {
                res398.send({
                    code: "400",
                    message: "jobID398: " + jobID398 + " with " + "partID398: " + partID398 + " already exist, can't add data"
                })
            } else {
                const sqlInsert398 = "INSERT INTO jobs398 VALUES ('" + jobID398 + "', " + partID398 + ", " + qty398 + ")";
                await sails.sendNativeQuery(sqlInsert398);
                res398.redirect("/viewData398");
            }
        });
    },
    // UPDATE DATA
    updateData398: function (req398, res398) {
        const jobID398 = req398.body.jobID398;
        const partID398 = parseInt(req398.body.partID398);
        const qty398 = parseInt(req398.body.qty398);

        const sqlSelectOne398 = "SELECT * FROM jobs398 WHERE jobID398 = '" + jobID398 + "' AND partID398 = " + partID398;
        sails.sendNativeQuery(sqlSelectOne398, async function (err, rawResult398) {
            var length398 = rawResult398.rows.length;
            if (length398 != 0) {
                const sqlUpdate398 = "UPDATE jobs398 SET qty398 = " + qty398 + " WHERE jobID398 = '" + jobID398 + "' AND partID398 = " + partID398;
                await sails.sendNativeQuery(sqlUpdate398);
                res398.redirect("/viewData398");
            } else {
                res398.send({
                    code: "400",
                    message: "jobID398: " + jobID398 + " with " + "partID398: " + partID398 + " do not exist, can't update data"
                })
            }
        });
    },
    // DELETE DATA
    deleteData398: function (req398, res398) {
        const jobID398 = req398.body.jobID398;
        const partID398 = parseInt(req398.body.partID398);

        const sqlSelectOne398 = "SELECT * FROM jobs398 WHERE jobID398 = '" + jobID398 + "' AND partID398 = " + partID398;
        sails.sendNativeQuery(sqlSelectOne398, async function (err, rawResult398) {
            var length398 = rawResult398.rows.length;
            if (length398 != 0) {
                const sqlUpdate398 = "DELETE FROM jobs398 WHERE jobID398 = '" + jobID398 + "' AND partID398 = " + partID398;
                await sails.sendNativeQuery(sqlUpdate398);
                res398.redirect("/viewData398");
            } else {
                res398.send({
                    code: "400",
                    message: "jobID398: " + jobID398 + " with " + "partID398: " + partID398 + " do not exist, can't delete data"
                })
            }
        });
    }
}