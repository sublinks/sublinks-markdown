import { Root } from 'mdast';
import { visit } from 'unist-util-visit';

export default function relativeLinks({ domain }: { domain: string }) {
  return function transformer(tree: Root) {
    visit(tree, 'paragraph', (node) => {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];

        if (child.type === 'text') {
          // Relative Community Links | !com@ins -> [!com@ins](https://dom/c/com@ins)
          let regex = /!([a-zA-Z0-9]+)@([a-zA-Z0-9.]+)/g;
          let result;
          while ((result = regex.exec(child.value)) !== null) {
            const beforeText = child.value.substring(0, result.index);
            const match = child.value.substring(
              result.index,
              result.index + result[0].length,
            );
            const afterText = child.value.substring(
              result.index + result[0].length,
            );

            child.value = beforeText;
            node.children.splice(
              i + 1,
              0,
              {
                type: 'link',
                url: `${domain}/c/${result[1]}@${result[2]}`,
                title: null,
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

          // Relative User Links | @per@ins -> [@per@ins](https://dom/u/per@ins)
          regex = /@([a-zA-Z0-9]+)@([a-zA-Z0-9.]+)/g;
          while ((result = regex.exec(child.value)) !== null) {
            const beforeText = child.value.substring(0, result.index);
            const match = child.value.substring(
              result.index,
              result.index + result[0].length,
            );
            const afterText = child.value.substring(
              result.index + result[0].length,
            );

            child.value = beforeText;
            node.children.splice(
              i + 1,
              0,
              {
                type: 'link',
                url: `${domain}/u/${result[1]}@${result[2]}`,
                title: null,
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

          // Com links to rel links | https://ins/c/com -> [!com@ins](https://dom/c/com@ins)
          regex =
            /((?:https?:\/\/|)([a-zA-Z0-9.]+)\/c\/([a-zA-Z0-9]+))(?:\s|$)/g;

          while ((result = regex.exec(child.value)) !== null) {
            const beforeText = child.value.substring(0, result.index);
            const match = child.value.substring(
              result.index,
              result.index + result[1].length,
            );
            const afterText = child.value.substring(
              result.index + result[1].length,
            );

            child.value = beforeText;
            node.children.splice(
              i + 1,
              0,
              {
                type: 'link',
                url: `${domain}/c/${result[3]}@${result[2]}`,
                title: null,
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

          // Per links to rel links | https://ins/u/per -> [@per@ins](https://dom/u/per@ins)
          regex =
            /((?:https?:\/\/|)([a-zA-Z0-9.]+)\/u\/([a-zA-Z0-9]+))(?:\s|$)/g;

          while ((result = regex.exec(child.value)) !== null) {
            const beforeText = child.value.substring(0, result.index);
            const match = child.value.substring(
              result.index,
              result.index + result[1].length,
            );
            const afterText = child.value.substring(
              result.index + result[1].length,
            );

            child.value = beforeText;
            node.children.splice(
              i + 1,
              0,
              {
                type: 'link',
                url: `${domain}/u/${result[3]}@${result[2]}`,
                title: null,
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

        // TODO: Edit link elements
        // link to community -> relative link to community
        // /c/programming@programming.dev -> relative link to community
        // same for users
      }
    });
  };
}
