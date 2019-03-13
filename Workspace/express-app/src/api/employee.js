// employee routes
const status = require('http-status');

module.exports = (app,repo) => {
    app.post('/employee', (req, res) => {
        repo.addEmployee(req.body)
            .then(data => {
                res.status(status.CREATED).json({message:data})
             })
            .catch(err => res.json({ error: err}));
    });

app.get('/employee/:id?', (req, res) => {
    if(req.params['id']) {
        //find by id
        repo.getEmployeeById(req.params['id'])
        .then(emp => {
            if(!emp) res.status(status.No_CONTENT).send()
            else res.json(emp);
        })
        .catch(err => res.status(status.NO_CONTENT).send())
    } else {
        // get all employees
        repo.getEmployee()
            .then(emp => res.json(emp))
            .catch(err => res.status(status.NO_CONTENT).send())
    }
});

app.delete('/employee/:id?', (req, res) => {
    repo.removeEmployeeById(req.params['id'])
        .then(emp => {
            if(!emp) res.status(status.No_CONTENT).send()
            else res.status(status.OK).json(emp);
        })
        .catch(err => res.status(status.NO_CONTENT).send())
    });

}