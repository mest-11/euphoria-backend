import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

// create upload middleware
export const localUpload = multer({ dest: "euphoria" });

export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY, 
        relativePath: "/euphoria/*"
    })
});