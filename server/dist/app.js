"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./Routes/user.routes"));
const test_routes_1 = __importDefault(require("./Routes/test.routes"));
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.usages();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3005);
    }
    usages() {
        this.app.use((0, cors_1.default)({
            origin: process.env.CLIENT_URL,
            methods: ["GET", "POST"],
            credentials: true
        }));
    }
    routes() {
        this.app.use('/users', user_routes_1.default);
        this.app.use(test_routes_1.default);
    }
    listen() {
        this.app.listen(this.app.get('port'));
        console.log(`Server works on PORT ${this.app.get('port')}`);
    }
}
exports.App = App;
