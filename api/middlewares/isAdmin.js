const isAdmin = async(req, res, next) => {
    try {
        const { user } = req.body;
        if (user.isAdmin){
            next()
        } else {
            res.status(401).send("Nicht Autorisiert");
        }

    } catch (err) {
        console.error(err);
        res.status(500).send("Ein Fehler ist aufgetreten.");
    }
}

module.exports = isAdmin;