import e from "express";
import cors from 'cors';
import { homePage } from "./lib/homePage.js";
import { notFoundPage } from "./lib/notFoundPage.js";
import { notFoundResponse } from "./middleware/notFoundResponse.js";
import { fatalServerErrorResponse } from "./middleware/fatalServerErrorResponse.js";
import { registerPostAPI } from "./api/registerAPI.js";
import { motherboardGetAPI } from "./api/motherboardsAPI.js";
import { memoryGetAPI } from "./api/memoryAPI.js";
import cookieParser from "cookie-parser";
import { loginGetAPI, loginPostAPI } from "./api/loginAPI.js";
import { getUserData } from "./middleware/getUserData.js";
import { logoutGetAPI } from "./api/logoutAPI.js";


const app = e();
const port = 5123;

app.use(e.json({
    type: 'application/json',
}));
app.use(e.urlencoded({
    extended: true,
}));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(cookieParser());
app.use(getUserData);

app.get('/', homePage);

app.post('/api/register', registerPostAPI);
app.get('/api/MotherBoard', motherboardGetAPI);
app.get('/api/Memory', memoryGetAPI);
app.post('/api/login', loginPostAPI);
app.get('/api/logout', logoutGetAPI);

app.get('/api/login', loginGetAPI);


app.get('*', notFoundPage);

app.use(notFoundResponse);
app.use(fatalServerErrorResponse);

app.listen(port, () => {
    console.log('SERVER: http://localhost:' + port);
});