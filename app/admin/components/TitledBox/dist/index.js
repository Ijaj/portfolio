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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var material_1 = require("@mui/material");
function TitledBox(_a) {
    var title = _a.title, children = _a.children, boxProps = __rest(_a, ["title", "children"]);
    return (React.createElement(material_1.Box, __assign({}, boxProps, { sx: { position: 'relative', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 3, mt: 4 } }),
        React.createElement(material_1.Typography, { variant: "subtitle1", sx: {
                position: 'absolute',
                top: 0,
                left: 16,
                transform: 'translateY(-50%)',
                backgroundColor: 'background.paper',
                px: 1,
                fontWeight: 'bold'
            } },
            title,
            ' '),
        children));
}
exports["default"] = TitledBox;
