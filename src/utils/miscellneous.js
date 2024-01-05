export const generateBarChartData = (data) => {
    const companyMissions = {};
    data.forEach((mission) => {
        companyMissions[mission.company] = (companyMissions[mission.company] || 0) + 1;
    });

    return Object.entries(companyMissions).map(([company, missionCount]) => ({ company, missionCount }));
};

export const generatePieChartData = (data) => {
    const companySuccesses = {};
    data.forEach((mission) => {
        if (mission.successful) {
            companySuccesses[mission.company] = (companySuccesses[mission.company] || 0) + 1;
        }
    });

    return Object.entries(companySuccesses).map(([company, successCount]) => ({ company, successCount }));
};

export const userLogin = (obj) => {
    if ((obj.email === 'rajat@gmail.com') && (obj.password === '123456')) {
        return { success: true }
    } else {
        return { success: false, message: 'Credential is incorrect' }
    }
}
