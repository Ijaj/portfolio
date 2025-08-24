'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import { useState } from 'react';
import {
  Paper,
  Box,
  Toolbar,
  Button,
  ButtonGroup,
  Divider,
  Typography,
  TextField,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme
} from '@mui/material';
import {
  FormatBold,
  FormatItalic,
  FormatStrikethrough,
  FormatListBulleted,
  FormatListNumbered,
  Code,
  Title,
  Subject,
  Article,
  ExpandMore,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';

// Import languages for syntax highlighting
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';

// Register languages
const lowlight = createLowlight(common);
lowlight.register({ html, css, js });

const TiptapEditor = ({
  description: htmlContent,
  setDescription: setHtmlContent
}: {
  description: string;
  setDescription: (value: string) => void;
}) => {
  const theme = useTheme();
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  // const [htmlContent, setHtmlContent] = useState('');
  const [showOutput, setShowOutput] = useState(true);

  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight
      })
    ],
    immediatelyRender: false,
    content: '<p>Start typing description here...</p>',
    onUpdate: ({ editor }) => {
      setHtmlContent(editor.getHTML());
    }
  });

  if (!editor) {
    return null;
  }

  const toggleHtmlMode = () => {
    if (isHtmlMode) {
      // Switch from HTML to visual mode
      editor.commands.setContent(htmlContent);
      setIsHtmlMode(false);
    } else {
      // Switch from visual to HTML mode
      setHtmlContent(editor.getHTML());
      setIsHtmlMode(true);
    }
  };

  const handleHtmlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHtmlContent(e.target.value);
  };

  const toolbarButtons = [
    {
      icon: <FormatBold />,
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
      label: 'Bold'
    },
    {
      icon: <FormatItalic />,
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
      label: 'Italic'
    },
    {
      icon: <FormatStrikethrough />,
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike'),
      label: 'Strike'
    }
  ];

  const headingButtons = [
    {
      icon: <Title />,
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive('heading', { level: 1 }),
      label: 'H1'
    },
    {
      icon: <Subject />,
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive('heading', { level: 2 }),
      label: 'H2'
    },
    {
      icon: <Article />,
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: editor.isActive('paragraph'),
      label: 'P'
    }
  ];

  const listButtons = [
    {
      icon: <FormatListBulleted />,
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList'),
      label: 'Bullet List'
    },
    {
      icon: <FormatListNumbered />,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList'),
      label: 'Numbered List'
    },
    {
      icon: <Code />,
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: editor.isActive('codeBlock'),
      label: 'Code Block'
    }
  ];

  return (
    <Box>
      <Paper elevation={3} sx={{ overflow: 'hidden' }}>
        {/* Toolbar */}
        <Toolbar
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderBottom: `1px solid ${theme.palette.divider}`,
            flexWrap: 'wrap',
            gap: 1,
            minHeight: 'auto !important',
            py: 1
          }}
        >
          {/* Text Formatting */}
          <ButtonGroup size="small" variant="outlined" sx={{ mr: 1 }}>
            {toolbarButtons.map((btn, index) => (
              <Button
                key={index}
                onClick={btn.action}
                variant={btn.isActive ? 'contained' : 'outlined'}
                color={btn.isActive ? 'primary' : 'inherit'}
                title={btn.label}
                sx={{ minWidth: 40 }}
              >
                {btn.icon}
              </Button>
            ))}
          </ButtonGroup>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* Headings */}
          <ButtonGroup size="small" variant="outlined" sx={{ mr: 1 }}>
            {headingButtons.map((btn, index) => (
              <Button
                key={index}
                onClick={btn.action}
                variant={btn.isActive ? 'contained' : 'outlined'}
                color={btn.isActive ? 'primary' : 'inherit'}
                title={btn.label}
                sx={{ minWidth: 50, fontSize: '0.75rem' }}
              >
                {btn.label}
              </Button>
            ))}
          </ButtonGroup>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* Lists and Code */}
          <ButtonGroup size="small" variant="outlined" sx={{ mr: 1 }}>
            {listButtons.map((btn, index) => (
              <Button
                key={index}
                onClick={btn.action}
                variant={btn.isActive ? 'contained' : 'outlined'}
                color={btn.isActive ? 'primary' : 'inherit'}
                title={btn.label}
                sx={{ minWidth: 40 }}
              >
                {btn.icon}
              </Button>
            ))}
          </ButtonGroup>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* HTML/Visual Toggle */}
          <FormControlLabel
            control={<Switch checked={isHtmlMode} onChange={toggleHtmlMode} color="primary" />}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {isHtmlMode ? <VisibilityOff /> : <Visibility />}
                {isHtmlMode ? 'HTML' : 'Visual'}
              </Box>
            }
            sx={{ ml: 2 }}
          />
        </Toolbar>

        {/* Editor Content */}
        <Box
          sx={{
            minHeight: 400,
            backgroundColor: theme.palette.background.paper
          }}
        >
          {isHtmlMode ? (
            <TextField
              multiline
              fullWidth
              value={htmlContent}
              onChange={handleHtmlChange}
              placeholder="Enter your HTML code here..."
              variant="standard"
              slotProps={{
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
              }}
              sx={{
                '& .MuiInputBase-root': {
                  minHeight: 400
                }
              }}
            />
          ) : (
            <Box
              sx={{
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
                    border: `1px solid ${theme.palette.divider}`
                  },
                  '& code': {
                    backgroundColor: theme.palette.action.hover,
                    borderRadius: (theme.shape.borderRadius as number) / 2,
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
              }}
            >
              <EditorContent editor={editor} />
            </Box>
          )}
        </Box>
      </Paper>

      {/* Output Preview */}
      <Box sx={{ mt: 3 }}>
        <Accordion expanded={showOutput} onChange={() => setShowOutput(!showOutput)}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderBottom: `1px solid ${theme.palette.divider}`
            }}
          >
            <Typography variant="h6" component="h3">
              HTML Output
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <Card variant="outlined">
              <CardContent>
                <Box
                  component="pre"
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    p: 2,
                    fontSize: '0.85rem',
                    fontFamily: 'monospace',
                    overflow: 'auto',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all',
                    maxHeight: 300,
                    color: theme.palette.text.primary
                  }}
                >
                  <code>{isHtmlMode ? htmlContent : editor.getHTML()}</code>
                </Box>
              </CardContent>
            </Card>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default TiptapEditor;
