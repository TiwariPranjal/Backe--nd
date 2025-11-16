const asyncHandlerr = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    };
};

export { asyncHandlerr };


// const asyncHandlerrr = (fn) => (req, res, next) => {
//     Promise.resolve(fn(req, res, next))
//         .catch(next);
// };

// export { asyncHandlerrr };




// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };
// export {asyncHandler}