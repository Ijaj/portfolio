"use strict";
exports.__esModule = true;
exports.CustomHTML = void 0;
var core_1 = require("@tiptap/core");
exports.CustomHTML = core_1.Node.create({
    name: 'customHTML',
    group: 'block',
    atom: true,
    addAttributes: function () {
        return {
            content: {
                "default": ''
            }
        };
    },
    parseHTML: function () {
        return [
            {
                tag: 'custom-html'
            }
        ];
    },
    renderHTML: function (_a) {
        var HTMLAttributes = _a.HTMLAttributes;
        return ['div', { dangerouslySetInnerHTML: { __html: HTMLAttributes.content } }];
    },
    addCommands: function () {
        var _this = this;
        return {
            insertCustomHTML: function (html) {
                return function (_a) {
                    var commands = _a.commands;
                    return commands.insertContent({
                        type: _this.name,
                        attrs: { content: html }
                    });
                };
            }
        };
    }
});
