import ApplicantDataService from "../services/applicant/applicant.service";

test("getPlayer", () => {
    expect(ApplicantDataService.getPlayer(1)).toBe(1);
});

jest.mock("../../helpers/client/api.client", () => {
    return {
        get: jest.fn(() => {
            return {
                data: {
                    id: 1,
                    name: "test"
                    
                }
            };
        })
    };
});


it('ApplicantDataService.getAllApplicants', async () => {
    const eventID = 1;
    const applicants = await ApplicantDataService.getAllApplicants(eventID);
    expect(applicants.length).toBe(1);
    expect(applicants[0].id).toBe(1);
    expect(applicants[0].name).toBe("test");
});

it('ApplicantDataService.approveApplicant', async () => {
    const eventID = 1;
    const applicantID = 1;
    const response = await ApplicantDataService.approveApplicant(eventID, applicantID);
    expect(response.data.id).toBe(1);
    expect(response.data.name).toBe("test");
});

it.apply(this, [
    "getAllApplicants",
    "getPlayer",
    "approveApplicant",
    "disapproveApplicant"
].map(method => {
    return () => {
        expect(ApplicantDataService[method]).toBeDefined();
    };
}));

    