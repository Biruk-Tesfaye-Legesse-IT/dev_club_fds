import http from "../../helpers/client/api.client";

test("httpClient", () => {
    expect(http.get("/api/event/1")).toBe(1);
});