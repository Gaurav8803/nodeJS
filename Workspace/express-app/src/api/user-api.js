// employee routes
const status = require('http-status');

module.exports = (app,repo) => {
    app.post('/register', (req, res) => {
        repo.addUser(req.body)
            .then(user => { 
                return repo.updateToken(user.userEmail); }
            )
            .then(data => {
                res.status(status.CREATED).json({message: data})
             })
            .catch(
                err => {
                    res.json({ error: err});
                console.log(err); }
            );
    });
    app.post('/login', (req, res) => {
        const { body } = req;
        repo.checkUser(req.body.userEmail, req.body.userPassword)
            .then(user => { return repo.updateToken(req.body.userEmail); })
            .then(data => {
                console.log(data);
                res.status(status.OK).json({ access_token: data['userToken'] })
             })
            .catch(
                err => { console.log(err);
                res.status(status.OK).json({ 'message': 'failed'}) }
            );
    });
}