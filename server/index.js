import e from "express";
import cors from 'cors';
import { homePage } from "./lib/homePage.js";
import { notFoundPage } from "./lib/notFoundPage.js";
import { notFoundResponse } from "./middleware/notFoundResponse.js";
import { fatalServerErrorResponse } from "./middleware/fatalServerErrorResponse.js";
import { registerPostAPI } from "./api/registerAPI.js";
import cookieParser from "cookie-parser";
import { loginGetAPI, loginPostAPI } from "./api/loginAPI.js";
import { getUserData } from "./middleware/getUserData.js";
import { logoutGetAPI } from "./api/logoutAPI.js";
import { profileGetApi } from "./api/profileAPI.js";
import { dalysAPIRouter } from "./router/dalysRouter.js";
import { userRoleCheck } from "./middleware/userRoleCheck.js";
import { submitPartAPI } from "./api/submitPartAPI.js";


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
app.post('/api/login', loginPostAPI);
app.get('/api/logout', logoutGetAPI);

// GET parts
app.use('/api/dalys', dalysAPIRouter)

app.get('/api/login', loginGetAPI);
app.get('/api/profile', userRoleCheck('user'), profileGetApi);

// POST new part
app.post('/api/submit-part', submitPartAPI)

app.get('*', notFoundPage);

app.use(notFoundResponse);
app.use(fatalServerErrorResponse);

app.listen(port, () => {
    console.log('SERVER: http://localhost:' + port);
});