module.exports = Object.freeze({
    INSERT : 'insert into contact(fname,lname,email,phone,message) values($1,$2,$3,$4,$5)',
    VIEW : 'select * from contact'
});