const pool = require("../config/pgcon");
const DBS = require('../db/dbs');

exports.land = (req, res) => {
    res.status(200).send({address:"Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US",phone:"+1 800 1236879",email:"info@ideops.com",token:"ESD-5k2-AMD"});
};

exports.viewContacts = (req, res) => {
    pool.query(
        DBS.VIEW,
        [],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: "cannot provide this service at this time" });
            } else {
                if (results.rowCount > 0) {
                    res.status(200).json({ contacts: results.rows });
                } else {
                    res.status(400).json({ message: "Validation error" });
                }
            }
        }
    );
};

exports.addContact = (req, res) => {

    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;
    var token = req.body.token;

    pool.query(
        DBS.INSERT,
        [fname, lname, email, phone,message],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: "cannot provide this service at this time" });
            } else {
                if (results.rowCount > 0) {
                    res.status(200).json({ message: "done" });
                } else {
                    res.status(400).json({ message: "Validation error" });
                }
            }
        }
    );
};