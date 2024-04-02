

const notFounding = (req,res,next) => {
    const message = new Error(`We are not Founding : ${req.originalUrl}`);
    res.status(404);
    next(message);
}


const errorHandaler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err?.message,
        stack: err?.stack
    });
}

export {errorHandaler,notFounding};