import { getPosts } from "..";

describe("myModule test", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should find a user", () => {
    const mockUser = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockUser),
    });

    getPosts({ id: 1 }).then((data) => {
      expect(data).toBe(mockUser);
    });
  });

  test("should throw a network error on wrong URL", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() => {
      return Promise.reject(new Error("Network error"));
    });

    await expect(getPosts({ id: 1 })).rejects.toThrow("Network error");
  });
});
