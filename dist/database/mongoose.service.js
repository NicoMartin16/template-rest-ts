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
class MoongoseService {
    constructor() {
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
            // useFindAndModify: false,
        };
        this.conecction = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect('');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL21vbmdvb3NlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBK0I7QUFHL0IsTUFBTSxlQUFlO0lBQXJCO1FBRVksb0JBQWUsR0FBRztZQUN0QixlQUFlLEVBQUUsSUFBSTtZQUNyQixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLHdCQUF3QixFQUFFLElBQUk7WUFDOUIsMkJBQTJCO1NBQzlCLENBQUM7UUFNRixlQUFVLEdBQUcsR0FBUyxFQUFFO1lBQ3BCLElBQUk7Z0JBQ0QsTUFBTSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUU1QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUEsQ0FBQTtJQUVMLENBQUM7SUFiRyxXQUFXO1FBQ1AsT0FBTyxrQkFBUSxDQUFBO0lBQ25CLENBQUM7Q0FXSiJ9