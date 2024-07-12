module.exports = middleware => {
    return (req, res, next) => {
        // Verifica se req.user está definido e se possui a propriedade admin
        if(req.user && req.user.admin){
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuário não é administrador.')
        }
    }
}
