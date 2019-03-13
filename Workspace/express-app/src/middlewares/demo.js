// app.use(middleware)

const demo=(req,res,next) => {
    console.log('demo middleware');
    next();
}

module.exports = { demo };

