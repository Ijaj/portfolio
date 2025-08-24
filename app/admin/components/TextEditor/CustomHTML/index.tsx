import { Node } from '@tiptap/core';

export const CustomHTML = Node.create({
  name: 'customHTML',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      content: {
        default: ''
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: 'custom-html'
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { dangerouslySetInnerHTML: { __html: HTMLAttributes.content } }];
  },

  addCommands() {
    return {
      insertCustomHTML:
        (html) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { content: html }
          });
        }
    };
  }
});
