import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
//import rehypeHighlight from 'rehype-highlight';
//import remarkHeadingId from 'remark-heading-id';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import strikethrough from './remarkRules/strikethrough.js';
import relativeLinks from './remarkRules/relativeLinks.js';
import { unified } from 'unified';

const remarkRules = [relativeLinks, strikethrough];
const rehypeRules: any[] = [];

export async function mdToHtml(md: string, domain: string) {
  // Convert md to AST with remark
  const remarkProcessor = unified().use(remarkParse);

  // Apply custom remark rules
  let remarkProcessorCustom;

  for (const rule of remarkRules) {
    if (remarkProcessorCustom) {
      remarkProcessorCustom = remarkProcessorCustom.use(rule, { domain });
    } else {
      remarkProcessorCustom = remarkProcessor.use(rule, { domain });
    }
  }

  // If no custom rules, use default remark processor
  remarkProcessorCustom = remarkProcessorCustom ?? remarkProcessor;

  // Convert to rehype
  const rehypeProcessor = remarkProcessorCustom
    .use(remarkRehype)
    .use(rehypeAutolinkHeadings);

  // Apply custom rehype rules
  let rehypeProcessorCustom;

  for (const rule of rehypeRules) {
    if (rehypeProcessorCustom) {
      rehypeProcessorCustom = rehypeProcessorCustom.use(rule, { domain });
    } else {
      rehypeProcessorCustom = rehypeProcessor.use(rule, { domain });
    }
  }

  // If no custom rules, use default rehype processor
  rehypeProcessorCustom = rehypeProcessorCustom ?? rehypeProcessor;

  // Convert to html
  rehypeProcessorCustom = rehypeProcessorCustom
    .use(rehypeStringify)
    .process(md);

  return String(await rehypeProcessorCustom);
}
