'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("@tiptap/react");
var starter_kit_1 = require("@tiptap/starter-kit");
var extension_code_block_lowlight_1 = require("@tiptap/extension-code-block-lowlight");
var lowlight_1 = require("lowlight");
var react_2 = require("react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
// Import languages for syntax highlighting
var xml_1 = require("highlight.js/lib/languages/xml");
var css_1 = require("highlight.js/lib/languages/css");
var javascript_1 = require("highlight.js/lib/languages/javascript");
// Register languages
var lowlight = lowlight_1.createLowlight(lowlight_1.common);
lowlight.register({ html: xml_1["default"], css: css_1["default"], js: javascript_1["default"] });
var TiptapEditor = function (_a) {
    var htmlContent = _a.description, setHtmlContent = _a.setDescription;
    var theme = material_1.useTheme();
    var _b = react_2.useState(false), isHtmlMode = _b[0], setIsHtmlMode = _b[1];
    // const [htmlContent, setHtmlContent] = useState('');
    var _c = react_2.useState(true), showOutput = _c[0], setShowOutput = _c[1];
    var editor = react_1.useEditor({
        extensions: [
            starter_kit_1["default"],
            extension_code_block_lowlight_1["default"].configure({
                lowlight: lowlight
            })
        ],
        immediatelyRender: false,
        content: '<p>Start typing description here...</p>',
        onUpdate: function (_a) {
            var editor = _a.editor;
            setHtmlContent(editor.getHTML());
        }
    });
    if (!editor) {
        return null;
    }
    var toggleHtmlMode = function () {
        if (isHtmlMode) {
            // Switch from HTML to visual mode
            editor.commands.setContent(htmlContent);
            setIsHtmlMode(false);
        }
        else {
            // Switch from visual to HTML mode
            setHtmlContent(editor.getHTML());
            setIsHtmlMode(true);
        }
    };
    var handleHtmlChange = function (e) {
        setHtmlContent(e.target.value);
    };
    var toolbarButtons = [
        {
            icon: React.createElement(icons_material_1.FormatBold, null),
            action: function () { return editor.chain().focus().toggleBold().run(); },
            isActive: editor.isActive('bold'),
            label: 'Bold'
        },
        {
            icon: React.createElement(icons_material_1.FormatItalic, null),
            action: function () { return editor.chain().focus().toggleItalic().run(); },
            isActive: editor.isActive('italic'),
            label: 'Italic'
        },
        {
            icon: React.createElement(icons_material_1.FormatStrikethrough, null),
            action: function () { return editor.chain().focus().toggleStrike().run(); },
            isActive: editor.isActive('strike'),
            label: 'Strike'
        }
    ];
    var headingButtons = [
        {
            icon: React.createElement(icons_material_1.Title, null),
            action: function () { return editor.chain().focus().toggleHeading({ level: 1 }).run(); },
            isActive: editor.isActive('heading', { level: 1 }),
            label: 'H1'
        },
        {
            icon: React.createElement(icons_material_1.Subject, null),
            action: function () { return editor.chain().focus().toggleHeading({ level: 2 }).run(); },
            isActive: editor.isActive('heading', { level: 2 }),
            label: 'H2'
        },
        {
            icon: React.createElement(icons_material_1.Article, null),
            action: function () { return editor.chain().focus().setParagraph().run(); },
            isActive: editor.isActive('paragraph'),
            label: 'P'
        }
    ];
    var listButtons = [
        {
            icon: React.createElement(icons_material_1.FormatListBulleted, null),
            action: function () { return editor.chain().focus().toggleBulletList().run(); },
            isActive: editor.isActive('bulletList'),
            label: 'Bullet List'
        },
        {
            icon: React.createElement(icons_material_1.FormatListNumbered, null),
            action: function () { return editor.chain().focus().toggleOrderedList().run(); },
            isActive: editor.isActive('orderedList'),
            label: 'Numbered List'
        },
        {
            icon: React.createElement(icons_material_1.Code, null),
            action: function () { return editor.chain().focus().toggleCodeBlock().run(); },
            isActive: editor.isActive('codeBlock'),
            label: 'Code Block'
        }
    ];
    return (React.createElement(material_1.Box, null,
        React.createElement(material_1.Paper, { elevation: 3, sx: { overflow: 'hidden' } },
            React.createElement(material_1.Toolbar, { sx: {
                    backgroundColor: theme.palette.background.paper,
                    borderBottom: "1px solid " + theme.palette.divider,
                    flexWrap: 'wrap',
                    gap: 1,
                    minHeight: 'auto !important',
                    py: 1
                } },
                React.createElement(material_1.ButtonGroup, { size: "small", variant: "outlined", sx: { mr: 1 } }, toolbarButtons.map(function (btn, index) { return (React.createElement(material_1.Button, { key: index, onClick: btn.action, variant: btn.isActive ? 'contained' : 'outlined', color: btn.isActive ? 'primary' : 'inherit', title: btn.label, sx: { minWidth: 40 } }, btn.icon)); })),
                React.createElement(material_1.Divider, { orientation: "vertical", flexItem: true, sx: { mx: 1 } }),
                React.createElement(material_1.ButtonGroup, { size: "small", variant: "outlined", sx: { mr: 1 } }, headingButtons.map(function (btn, index) { return (React.createElement(material_1.Button, { key: index, onClick: btn.action, variant: btn.isActive ? 'contained' : 'outlined', color: btn.isActive ? 'primary' : 'inherit', title: btn.label, sx: { minWidth: 50, fontSize: '0.75rem' } }, btn.label)); })),
                React.createElement(material_1.Divider, { orientation: "vertical", flexItem: true, sx: { mx: 1 } }),
                React.createElement(material_1.ButtonGroup, { size: "small", variant: "outlined", sx: { mr: 1 } }, listButtons.map(function (btn, index) { return (React.createElement(material_1.Button, { key: index, onClick: btn.action, variant: btn.isActive ? 'contained' : 'outlined', color: btn.isActive ? 'primary' : 'inherit', title: btn.label, sx: { minWidth: 40 } }, btn.icon)); })),
                React.createElement(material_1.Divider, { orientation: "vertical", flexItem: true, sx: { mx: 1 } }),
                React.createElement(material_1.FormControlLabel, { control: React.createElement(material_1.Switch, { checked: isHtmlMode, onChange: toggleHtmlMode, color: "primary" }), label: React.createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5 } },
                        isHtmlMode ? React.createElement(icons_material_1.VisibilityOff, null) : React.createElement(icons_material_1.Visibility, null),
                        isHtmlMode ? 'HTML' : 'Visual'), sx: { ml: 2 } })),
            React.createElement(material_1.Box, { sx: {
                    minHeight: 400,
                    backgroundColor: theme.palette.background.paper
                } }, isHtmlMode ? (React.createElement(material_1.TextField, { multiline: true, fullWidth: true, value: htmlContent, onChange: handleHtmlChange, placeholder: "Enter your HTML code here...", variant: "standard", slotProps: {
                    input: {
                        disableUnderline: true,
                        sx: {
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            p: 2,
                            minHeight: 400,
                            alignItems: 'flex-start',
                            '& textarea': {
                                minHeight: '360px !important'
                            }
                        }
                    }
                }, sx: {
                    '& .MuiInputBase-root': {
                        minHeight: 400
                    }
                } })) : (React.createElement(material_1.Box, { sx: {
                    '& .ProseMirror': {
                        outline: 'none',
                        padding: 2,
                        minHeight: 360,
                        fontFamily: theme.typography.body1.fontFamily,
                        fontSize: theme.typography.body1.fontSize,
                        lineHeight: theme.typography.body1.lineHeight,
                        color: theme.palette.text.primary,
                        '& p': {
                            margin: '1em 0',
                            '&:first-of-type': { marginTop: 0 },
                            '&:last-of-type': { marginBottom: 0 }
                        },
                        '& h1': {
                            fontSize: theme.typography.h4.fontSize,
                            fontWeight: theme.typography.h4.fontWeight,
                            margin: '0.67em 0',
                            color: theme.palette.text.primary
                        },
                        '& h2': {
                            fontSize: theme.typography.h5.fontSize,
                            fontWeight: theme.typography.h5.fontWeight,
                            margin: '0.83em 0',
                            color: theme.palette.text.primary
                        },
                        '& ul, & ol': {
                            paddingLeft: '2em',
                            margin: '1em 0'
                        },
                        '& li': {
                            margin: '0.5em 0'
                        },
                        '& strong': {
                            fontWeight: theme.typography.fontWeightBold
                        },
                        '& em': {
                            fontStyle: 'italic'
                        },
                        '& pre': {
                            backgroundColor: theme.palette.action.hover,
                            borderRadius: theme.shape.borderRadius,
                            color: theme.palette.text.primary,
                            fontFamily: 'monospace',
                            margin: '1.5rem 0',
                            padding: '0.75rem 1rem',
                            whiteSpace: 'pre-wrap',
                            border: "1px solid " + theme.palette.divider
                        },
                        '& code': {
                            backgroundColor: theme.palette.action.hover,
                            borderRadius: theme.shape.borderRadius / 2,
                            color: theme.palette.text.primary,
                            fontFamily: 'monospace',
                            padding: '0.25rem 0.5rem',
                            fontSize: '0.9em'
                        },
                        '& pre code': {
                            backgroundColor: 'transparent',
                            padding: 0,
                            fontSize: '0.85rem'
                        }
                    }
                } },
                React.createElement(react_1.EditorContent, { editor: editor }))))),
        React.createElement(material_1.Box, { sx: { mt: 3 } },
            React.createElement(material_1.Accordion, { expanded: showOutput, onChange: function () { return setShowOutput(!showOutput); } },
                React.createElement(material_1.AccordionSummary, { expandIcon: React.createElement(icons_material_1.ExpandMore, null), sx: {
                        backgroundColor: theme.palette.background.paper,
                        borderBottom: "1px solid " + theme.palette.divider
                    } },
                    React.createElement(material_1.Typography, { variant: "h6", component: "h3" }, "HTML Output")),
                React.createElement(material_1.AccordionDetails, { sx: { p: 0 } },
                    React.createElement(material_1.Card, { variant: "outlined" },
                        React.createElement(material_1.CardContent, null,
                            React.createElement(material_1.Box, { component: "pre", sx: {
                                    backgroundColor: theme.palette.background["default"],
                                    border: "1px solid " + theme.palette.divider,
                                    borderRadius: 1,
                                    p: 2,
                                    fontSize: '0.85rem',
                                    fontFamily: 'monospace',
                                    overflow: 'auto',
                                    whiteSpace: 'pre-wrap',
                                    wordBreak: 'break-all',
                                    maxHeight: 300,
                                    color: theme.palette.text.primary
                                } },
                                React.createElement("code", null, isHtmlMode ? htmlContent : editor.getHTML())))))))));
};
exports["default"] = TiptapEditor;
