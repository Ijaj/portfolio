'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (_) try {
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
var material_1 = require("@mui/material");
var TitledBox_1 = require("../components/TitledBox");
var TextEditor_1 = require("../components/TextEditor");
var Edit_1 = require("@mui/icons-material/Edit");
function AdminDashboard() {
    var _this = this;
    // Global Settings
    var _a = react_1.useState(''), siteTitle = _a[0], setSiteTitle = _a[1];
    var _b = react_1.useState(''), pp = _b[0], setPp = _b[1];
    // Hero Section
    var _c = react_1.useState(''), heroTitle = _c[0], setHeroTitle = _c[1];
    var _d = react_1.useState(''), heroText = _d[0], setHeroText = _d[1];
    // About Section
    var _e = react_1.useState(''), aboutTitle = _e[0], setAboutTitle = _e[1];
    var _f = react_1.useState(''), aboutText = _f[0], setAboutText = _f[1];
    var _g = react_1.useState([{ title: 'title 1', value: 1 }]), aboutCards = _g[0], setAboutCards = _g[1];
    var _h = react_1.useState(0), aboutProjCompleted = _h[0], setAboutProjCompleted = _h[1];
    var _j = react_1.useState(0), aboutExperience = _j[0], setAboutExperience = _j[1];
    var _k = react_1.useState(0), aboutExperienceSelf = _k[0], setAboutExperienceSelf = _k[1];
    var _l = react_1.useState(0), aboutTech = _l[0], setAboutTech = _l[1];
    var _m = react_1.useState({
        git: '',
        linkedin: '',
        twitter: ''
    }), aboutLinks = _m[0], setAboutLinks = _m[1];
    // Other sections
    var _o = react_1.useState([]), education = _o[0], setEducation = _o[1];
    var _p = react_1.useState([]), skills = _p[0], setSkills = _p[1];
    var _q = react_1.useState([]), projects = _q[0], setProjects = _q[1];
    // UI State
    var _r = react_1.useState([]), files = _r[0], setFiles = _r[1];
    var _s = react_1.useState([]), mediaList = _s[0], setMediaList = _s[1];
    var _t = react_1.useState(), currentAboutCardEditIndex = _t[0], setCurrentAboutCardEditIndex = _t[1];
    var handleFileChange = function (e) {
        setFiles(__spreadArrays(e.target.files));
    };
    var handleUpload = function () { return __awaiter(_this, void 0, void 0, function () {
        var formData, res_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (files.length === 0) {
                        alert('Please select at least one file first');
                        return [2 /*return*/];
                    }
                    formData = new FormData();
                    files.forEach(function (file) {
                        formData.append('files', file);
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post('http://localhost:5000/upload-multiple', formData, {
                            headers: { 'Content-Type': 'multipart/form-data' }
                        })];
                case 2:
                    res_1 = _a.sent();
                    setMediaList(function (prev) { return __spreadArrays(prev, res_1.data); });
                    setFiles([]);
                    alert('Files uploaded successfully!');
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    alert('Upload failed');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    function addNewAboutCard() {
        var newCard = { title: '', value: 0 };
        setAboutCards(function (prev) { return __spreadArrays(prev, [newCard]); });
        setCurrentAboutCardEditIndex(aboutCards.length); // Index of the new card
    }
    function updateAboutCard(index, field, value) {
        if (field === 'value' && value === '')
            return;
        setAboutCards(function (prev) {
            var _a;
            var newArray = __spreadArrays(prev);
            newArray[index] = __assign(__assign({}, newArray[index]), (_a = {}, _a[field] = value, _a));
            return newArray;
        });
    }
    // Helper function to get all data when needed (for API calls, etc.)
    var getAllData = function () { return ({
        siteTitle: siteTitle,
        pp: pp,
        heroTitle: heroTitle,
        heroText: heroText,
        aboutTitle: aboutTitle,
        aboutText: aboutText,
        aboutCards: aboutCards,
        aboutProjCompleted: aboutProjCompleted,
        aboutExperience: aboutExperience,
        aboutExperienceSelf: aboutExperienceSelf,
        aboutTech: aboutTech,
        aboutLinks: aboutLinks,
        education: education,
        skills: skills,
        projects: projects
    }); };
    return (React.createElement(material_1.Box, { sx: { p: 3 } },
        React.createElement(material_1.Grid, { container: true, spacing: 3 },
            React.createElement(material_1.Grid, { size: { xs: 12 } },
                React.createElement(TitledBox_1["default"], { title: "Global Settings" },
                    React.createElement(material_1.FormControl, { fullWidth: true, variant: "outlined" },
                        React.createElement(material_1.InputLabel, { htmlFor: "site-title" }),
                        React.createElement(material_1.TextField, { variant: "outlined", id: "site-title", value: siteTitle, label: "Site Title", onChange: function (e) { return setSiteTitle(e.target.value); } })))),
            React.createElement(material_1.Grid, { size: { xs: 12 } },
                React.createElement(TitledBox_1["default"], { title: "Hero Section" },
                    React.createElement(material_1.Grid, { container: true, spacing: 3 },
                        React.createElement(material_1.Grid, { size: { xs: 12 } },
                            React.createElement(material_1.FormControl, { fullWidth: true, variant: "outlined" },
                                React.createElement(material_1.InputLabel, { htmlFor: "hero-title" }),
                                React.createElement(material_1.TextField, { id: "hero-title", value: heroTitle, label: "Hero Title", onChange: function (e) { return setHeroTitle(e.target.value); } }))),
                        React.createElement(material_1.Grid, { size: { xs: 12 } },
                            React.createElement(TextEditor_1["default"], { description: heroText, setDescription: setHeroText }))))),
            React.createElement(material_1.Grid, { size: { xs: 12 } },
                React.createElement(TitledBox_1["default"], { title: "About Section" },
                    React.createElement(material_1.Grid, { container: true, spacing: 3 },
                        React.createElement(material_1.Grid, { size: { xs: 12 } },
                            React.createElement(material_1.FormControl, { fullWidth: true, variant: "outlined" },
                                React.createElement(material_1.InputLabel, { htmlFor: "about-title" }),
                                React.createElement(material_1.TextField, { id: "about-title", value: aboutTitle, label: "About Title", onChange: function (e) { return setAboutTitle(e.target.value); } }))),
                        React.createElement(material_1.Grid, { size: { xs: 12 } },
                            React.createElement(TextEditor_1["default"], { description: aboutText, setDescription: setAboutText })),
                        React.createElement(material_1.Grid, { size: { xs: 12 } },
                            React.createElement(TitledBox_1["default"], { title: "Cards" },
                                React.createElement(material_1.List, null, aboutCards.map(function (cardData, index) { return (React.createElement(material_1.ListItem, { key: index },
                                    React.createElement(material_1.Stack, { spacing: 3, direction: 'row', sx: { width: '100%' } },
                                        React.createElement(material_1.FormControl, { fullWidth: true },
                                            React.createElement(material_1.TextField, { value: aboutCards[index].title, onChange: function (e) { return updateAboutCard(index, 'title', e.target.value); }, disabled: currentAboutCardEditIndex !== index, label: "Card Title" })),
                                        React.createElement(material_1.FormControl, { fullWidth: true },
                                            React.createElement(material_1.TextField, { type: "number", value: aboutCards[index].value, onChange: function (e) { return updateAboutCard(index, 'value', Number.parseInt(e.target.value)); }, disabled: currentAboutCardEditIndex !== index, label: "Card Value" })),
                                        React.createElement(material_1.Button, { variant: "outlined", onClick: function () { return setCurrentAboutCardEditIndex(index); } },
                                            React.createElement(Edit_1["default"], null)),
                                        React.createElement(material_1.IconButton, null,
                                            React.createElement(Edit_1["default"], null))))); })),
                                React.createElement(material_1.Button, { variant: "outlined", onClick: addNewAboutCard, sx: { mt: 2 } }, "Add New Card")))))))));
}
exports["default"] = AdminDashboard;
