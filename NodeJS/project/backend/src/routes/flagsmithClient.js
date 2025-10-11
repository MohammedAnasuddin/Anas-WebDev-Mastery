import Flagsmith from 'flagsmith-nodejs';

const flagsmith = new Flagsmith({
    environmentID: process.env.FLAGSMITH_ENVIRONMENT_ID,
    // Caching options can be configured here
});

export const getFlagsForUser = async (user) => {
    if (!user) {
        return flagsmith.getEnvironmentFlags();
    }
    return flagsmith.getIdentityFlags(user._id.toString(), { email: user.mail });
};

export default flagsmith;