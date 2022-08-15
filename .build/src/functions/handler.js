"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasanTest = void 0;
const hasanTest = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }, null, 2),
    };
};
exports.hasanTest = hasanTest;
//# sourceMappingURL=handler.js.map