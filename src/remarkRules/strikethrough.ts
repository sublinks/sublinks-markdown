import { Root } from 'mdast';
import { visit } from 'unist-util-visit';

export default function strikethrough({ domain }: { domain: string }) {
  return function transformer(tree: Root) {
    visit(tree, 'paragraph', (node) => {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];

        if (child.type === 'text') {
          // Double Strikethrough | ~~text~~ -> <del>text</del>
          let regex = /~~([^~]*)~~/g;
          let result;
          while ((result = regex.exec(child.value)) !== null) {
            const beforeText = child.value.substring(0, result.index);
            const match = child.value.substring(
              result.index + 2,
              result.index + result[1].length + 2,
            );
            const afterText = child.value.substring(
              result.index + result[1].length + 4,
            );

            child.value = beforeText;
            node.children.splice(
              i + 1,
              0,
              {
                type: 'delete',
                children: [
                  {
                    type: 'text',
                    value: match,
                  },
                ],
              },
              {
                type: 'text',
                value: afterText,
              },
            );
          }

          // Single Strikethrough | ~text~ -> <del>text</del>
          regex = /~([^~]*)~/g;
          while ((result = regex.exec(child.value)) !== null) {
            const beforeText = child.value.substring(0, result.index);
            const match = child.value.substring(
              result.index + 1,
              result.index + result[1].length + 1,
            );
            const afterText = child.value.substring(
              result.index + result[1].length + 2,
            );

            child.value = beforeText;
            node.children.splice(
              i + 1,
              0,
              {
                type: 'delete',
                children: [
                  {
                    type: 'text',
                    value: match,
                  },
                ],
              },
              {
                type: 'text',
                value: afterText,
              },
            );
          }
        }
      }
    });
  };
}
