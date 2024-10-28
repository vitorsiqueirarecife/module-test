"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
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
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockUser),
        });
        (0, __1.getPosts)({ id: 1 }).then((data) => {
            expect(data).toBe(mockUser);
        });
    });
    test("should throw a network error on wrong URL", () => __awaiter(void 0, void 0, void 0, function* () {
        global.fetch.mockImplementationOnce(() => {
            return Promise.reject(new Error("Network error"));
        });
        yield expect((0, __1.getPosts)({ id: 1 })).rejects.toThrow("Network error");
    }));
});
