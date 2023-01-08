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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("node:fs");
var cheerio_1 = require("cheerio");
var constant_1 = require("../src/constant");
var fetchArticleList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(constant_1.CONSTANTS.github.ARTICLE_LIST_META_URL)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = (_a.sent());
                return [2 /*return*/, data];
            case 3:
                err_1 = _a.sent();
                throw err_1;
            case 4: return [2 /*return*/];
        }
    });
}); };
var getCodePoint = function (emoji) {
    var _a;
    return (_a = emoji.codePointAt(0)) === null || _a === void 0 ? void 0 : _a.toString(16).toUpperCase();
};
var getFluentEmojiUrl = function (upperCaseEmojiName) {
    var firstStrUpperSpaceCase = upperCaseEmojiName.charAt(0).toUpperCase() +
        upperCaseEmojiName.slice(1).toLowerCase();
    var lowerSnakeCase = upperCaseEmojiName.toLowerCase().replaceAll(" ", "_");
    var url = "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/".concat(encodeURI(firstStrUpperSpaceCase), "/3D/").concat(lowerSnakeCase, "_3d.png");
    return url;
};
var getMicrosoftTeamsEmojiUrl = function (upperCaseEmojiName) { return __awaiter(void 0, void 0, void 0, function () {
    var lowerHyphenCase, url, res, html, $, imageUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                lowerHyphenCase = upperCaseEmojiName.toLowerCase().replaceAll(" ", "-");
                url = "https://emojipedia.org/microsoft-teams/1.0/".concat(lowerHyphenCase);
                return [4 /*yield*/, fetch(url)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.text()];
            case 2:
                html = _a.sent();
                $ = (0, cheerio_1.load)(html);
                imageUrl = $(".vendor-set-emoji-image").children("img").attr("src");
                return [2 /*return*/, imageUrl];
        }
    });
}); };
var downloadFromImageUrl = function (url, name) { return __awaiter(void 0, void 0, void 0, function () {
    var imageRes, savePath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1: return [4 /*yield*/, (_a.sent()).arrayBuffer()];
            case 2:
                imageRes = _a.sent();
                savePath = "public/assets/".concat(name, ".png");
                fs.writeFileSync(savePath, Buffer.from(imageRes), "binary");
                return [2 /*return*/];
        }
    });
}); };
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var articleList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchArticleList()];
            case 1:
                articleList = _a.sent();
                // eslint-disable-next-line @typescript-eslint/naming-convention
                articleList.forEach(function (_a) {
                    var emoji = _a.emoji, is_published = _a.is_published;
                    return __awaiter(void 0, void 0, void 0, function () {
                        var codePoint, emojiDataSourceRes, emojiDataSource, hit, lowerSnakeCase, imageUrl, error_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!is_published)
                                        return [2 /*return*/];
                                    codePoint = getCodePoint(emoji);
                                    return [4 /*yield*/, fetch(constant_1.CONSTANTS.emoji.DATA_SOURCE)];
                                case 1:
                                    emojiDataSourceRes = _b.sent();
                                    return [4 /*yield*/, emojiDataSourceRes.json()];
                                case 2:
                                    emojiDataSource = (_b.sent());
                                    hit = emojiDataSource.find(function (item) { return item.unified === codePoint; });
                                    if (!hit)
                                        return [2 /*return*/];
                                    lowerSnakeCase = hit.name.toLowerCase().replaceAll(" ", "_");
                                    _b.label = 3;
                                case 3:
                                    _b.trys.push([3, 5, , 6]);
                                    return [4 /*yield*/, getMicrosoftTeamsEmojiUrl(hit.name)];
                                case 4:
                                    imageUrl = _b.sent();
                                    if (!imageUrl)
                                        imageUrl = getFluentEmojiUrl(hit.name);
                                    if (!imageUrl)
                                        return [2 /*return*/];
                                    downloadFromImageUrl(imageUrl, lowerSnakeCase);
                                    return [3 /*break*/, 6];
                                case 5:
                                    error_1 = _b.sent();
                                    console.error(error_1);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    });
                });
                return [2 /*return*/];
        }
    });
}); };
main();
