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
exports.getPosts = void 0;
const getPosts = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id }) {
    try {
        return yield fetch("https://jsonplaceholder.typicode.com/todos/" + id).then((response) => response.json());
    }
    catch (e) {
        console.log("myModule.getPosts: ", e);
        throw e;
    }
});
exports.getPosts = getPosts;
