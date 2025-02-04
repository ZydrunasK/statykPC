import e from "express";
import { motherboardGetAPI, motherboardGetStructureAPI } from "../api/dalysAPI/motherboardAPI.js";
import { memoryGetAPI, memoryGetStructureAPI } from "../api/dalysAPI/memoryAPI.js";
import { coolerGetAPI, coolerGetStructureAPI } from "../api/dalysAPI/coolerAPI.js";
import { caseGetAPI, caseGetStructureAPI } from "../api/dalysAPI/caseAPI.js";
import { cpuGetAPI, cpuGetStructureAPI } from "../api/dalysAPI/cpuAPI.js";
import { gpusGetAPI, gpusGetStructureAPI } from "../api/dalysAPI/gpuAPI.js";
import { psuGetAPI, psuGetStructureAPI } from "../api/dalysAPI/psuAPI.js";
import { storageGetAPI, storageGetStructureAPI } from "../api/dalysAPI/storageAPI.js";

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



dalysAPIRouter.get('/CPU/structure', cpuGetStructureAPI);
dalysAPIRouter.get('/Ausintuvai/structure', coolerGetStructureAPI);
dalysAPIRouter.get('/Pagrindines-plokstes/structure', motherboardGetStructureAPI);
dalysAPIRouter.get('/Atmintis/structure', memoryGetStructureAPI);
dalysAPIRouter.get('/Kietieji-diskai/structure', storageGetStructureAPI);
dalysAPIRouter.get('/Vaizdo-plokstes/structure', gpusGetStructureAPI);
dalysAPIRouter.get('/Maitinimo-blokai/structure', psuGetStructureAPI);
dalysAPIRouter.get('/Korpusai/structure', caseGetStructureAPI);