"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("./database/mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const dontenvResult = dotenv_1.default.config();
if (dontenvResult.error) {
    throw dontenvResult.error;
}
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
const mongoService = mongoose_1.default;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.status(200).json({
        msg: 'ok',
        routes: 'get'
    });
});
app.listen(port, () => {
    console.log('servidor corriendo en el puerto ' + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixnREFBd0I7QUFDeEIsbUVBQWtEO0FBQ2xELG9EQUE0QjtBQUM1QixNQUFNLGFBQWEsR0FBRyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RDLElBQUcsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUNwQixNQUFNLGFBQWEsQ0FBQyxLQUFLLENBQUM7Q0FDN0I7QUFLRCxNQUFNLEdBQUcsR0FBd0IsSUFBQSxpQkFBTyxHQUFFLENBQUE7QUFDMUMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUE7QUFLN0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdkIsTUFBTSxZQUFZLEdBQUcsa0JBQWUsQ0FBQztBQUNyQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztBQUVoQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO0lBQ3pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNoQjtRQUNJLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLEtBQUs7S0FDaEIsQ0FDSixDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUM7QUFHSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUMxRCxDQUFDLENBQUMsQ0FBQSJ9