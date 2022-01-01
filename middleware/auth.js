const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
    const immortality = req.headers.authorization;

    if (!immortality) {
        return res.status(301).json({
            success: 0,
            message: "Access Denied! Unauthorized User.",
        });
    }
    try {
        await jwt.verify(immortality, "Iam With Allah", { algorithms: 'HS256' }, (err, decoded) => {
            if (err) {
                if(err.name == "JsonWebTokenError"){
                    return res.status(302).json({
                        success: 0,
                        message: "Invalid Token...",
                    });
                }
            } else {
               next();
            }
        });
    }catch (error){
        return res.status(400).json({
            success: 0,
            message: error.message,
        });
    }
}