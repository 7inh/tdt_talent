import database from "src/database/database";
import { Profile } from "src/utils/types/tables.interface";
import { createProfile, updateProfile } from "./profile.mutation";
import { getProfileByAccountId } from "./profile.query";

const ProfileService = {
    query: {
        getProfileByAccountId: getProfileByAccountId,
    },
    mutation: {
        createProfile: async (
            profile: Omit<Profile, "id" | "created_at" | "updated_at" | "deleted_at">
        ) => {
            const trx = await database.transaction();
            try {
                const [newCreatedProfile] = await createProfile(trx, profile);
                trx.commit();

                return newCreatedProfile;
            } catch (error) {
                trx.rollback();
                throw error;
            }
        },
        updateProfile: async (
            profile: Omit<Profile, "created_at" | "updated_at" | "deleted_at">
        ) => {
            const trx = await database.transaction();
            try {
                const profile_id = profile.id;
                const [newCreatedProfile] = await updateProfile(trx, profile, profile_id);
                trx.commit();

                return newCreatedProfile;
            } catch (error) {
                console.log(error);
                trx.rollback();
                throw error;
            }
        },
    },
};

export default ProfileService;
