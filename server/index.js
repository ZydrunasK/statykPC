import e from "express";
import cors from 'cors';
import { homePage } from "./lib/homePage.js";
import { notFoundPage } from "./lib/notFoundPage.js";
import { notFoundResponse } from "./middleware/notFoundResponse.js";
import { fatalServerErrorResponse } from "./middleware/fatalServerErrorResponse.js";
import { registerPostAPI } from "./api/registerAPI.js";

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
}));


app.get('/', homePage);

app.post('/api/register', registerPostAPI);
// app.post('/api/login', loginPostAPI);
// app.get('/api/logout', logoutPostAPI);

// app.get('/api/postGetAPI',);
// app.post('/api/postPostAPI',);
// app.put('/api/postPutAPI',);
// app.delete('/api/postDelteAPI',);

app.get('*', notFoundPage);

app.use(notFoundResponse);
app.use(fatalServerErrorResponse);

app.listen(port, () => {
    console.log('SERVER: http://localhost:' + port);
});