import e from "express";
import { motherboardGetAPI } from "../api/dalysAPI/motherboardAPI.js";
import { memoryGetAPI } from "../api/dalysAPI/memoryAPI.js";
import { coolerGetAPI } from "../api/dalysAPI/coolerAPI.js";
import { caseGetAPI } from "../api/dalysAPI/caseAPI.js";
import { cpuGetAPI } from "../api/dalysAPI/cpuAPI.js";
import { gpusGetAPI } from "../api/dalysAPI/gpuAPI.js";
import { psuGetAPI } from "../api/dalysAPI/psuAPI.js";
import { storageGetAPI } from "../api/dalysAPI/storageAPI.js";

export const dalysAPIRouter = e.Router();

dalysAPIRouter.get('/', (req, res) => {
    return res.status(404).send('Not found');
});

dalysAPIRouter.get('/CPU', cpuGetAPI);
dalysAPIRouter.get('/Ausintuvai', coolerGetAPI);
dalysAPIRouter.get('/Pagrindines-plokstes', motherboardGetAPI);
dalysAPIRouter.get('/Atmintis', memoryGetAPI);
dalysAPIRouter.get('/Kietieji-diskai', storageGetAPI);
dalysAPIRouter.get('/Vaizdo-plokstes', gpusGetAPI);
dalysAPIRouter.get('/Maitinimo-blokai', psuGetAPI);
dalysAPIRouter.get('/Korpusai', caseGetAPI);