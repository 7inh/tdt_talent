import admin from "../../config/firebase-config";

class Helper {
    async decodeToken(token: string) {
        return await admin.auth().verifyIdToken(token);
    }
}

export default new Helper();
