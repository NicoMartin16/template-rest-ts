"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const dontenvResult = dotenv_1.default.config();
if (dontenvResult.error) {
    throw dontenvResult.error;
}
class MoongoseService {
    constructor() {
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
            // useFindAndModify: false,
        };
        this.conecction = () => __awaiter(this, void 0, void 0, function* () {
            const uri = process.env.DB_CNN;
            try {
                yield mongoose_1.default
                    .connect(uri, this.mongooseOptions);
                console.log('Base online');
            }
            catch (error) {
                console.log(error);
                throw new Error("Error al arrancar el servidor de la bd");
            }
        });
        this.conecction();
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MoongoseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kYXRhYmFzZS9tb25nb29zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUErQjtBQUMvQixvREFBNEI7QUFDNUIsTUFBTSxhQUFhLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QyxJQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDcEIsTUFBTSxhQUFhLENBQUMsS0FBSyxDQUFDO0NBQzdCO0FBR0QsTUFBTSxlQUFlO0lBV2pCO1FBUlEsb0JBQWUsR0FBRztZQUN0QixlQUFlLEVBQUUsSUFBSTtZQUNyQixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLHdCQUF3QjtZQUN4Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLDJCQUEyQjtTQUM5QixDQUFDO1FBVUYsZUFBVSxHQUFHLEdBQVMsRUFBRTtZQUNwQixNQUFNLEdBQUcsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN2QyxJQUFJO2dCQUNELE1BQU0sa0JBQVE7cUJBQ1IsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7YUFFOUI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7YUFFN0Q7UUFDTCxDQUFDLENBQUEsQ0FBQTtRQW5CRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLGtCQUFRLENBQUE7SUFDbkIsQ0FBQztDQWdCSjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==