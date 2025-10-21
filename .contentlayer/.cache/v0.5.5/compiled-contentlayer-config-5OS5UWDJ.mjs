// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import readingTime from "reading-time";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { remarkAlert } from "remark-github-blockquote-alert";
import { remarkExtractFrontmatter, remarkCodeTitles, remarkImgToJsx, extractTocHeadings } from "pliny/mdx-plugins/index.js";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeKatexNoTranslate from "rehype-katex-notranslate";
import rehypePrismPlus from "rehype-prism-plus";
import rehypePresetMinify from "rehype-preset-minify";
var root = process.cwd();
var isProduction = process.env.NODE_ENV === "production";
var icon = fromHtmlIsomorphic(
  `
  <span class="content-header-link">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 linkicon">
  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
  </svg>
  </span>
`,
  { fragment: true }
);
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, "")
  },
  path: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  },
  filePath: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFilePath
  },
  toc: { type: "json", resolve: (doc) => extractTocHeadings(doc.body.raw) }
};
var Event = defineDocumentType(() => ({
  name: "Event",
  filePathPattern: "events/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    endDate: { type: "date", required: false },
    time: { type: "string", required: false },
    eventType: { type: "enum", options: ["single", "multi-day", "all-day"], required: false },
    location: { type: "string", required: true },
    excerpt: { type: "string", required: false },
    image: { type: "string", required: false }
  },
  computedFields: {
    ...computedFields
  }
}));
var Gallery = defineDocumentType(() => ({
  name: "Gallery",
  filePathPattern: "gallery/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    image: { type: "string", required: true },
    link: { type: "string", required: true }
  },
  computedFields: {
    ...computedFields
  }
}));
var Partner = defineDocumentType(() => ({
  name: "Partner",
  filePathPattern: "partners/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true
    },
    logo: {
      type: "string",
      required: true
    },
    website: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var Career = defineDocumentType(() => ({
  name: "Career",
  filePathPattern: "careers/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    company: {
      type: "string",
      required: true
    },
    companyLogo: {
      type: "string",
      required: true
    },
    location: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    applicationDeadline: {
      type: "string",
      required: true
    },
    applicationLink: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    endDate: { type: "date", required: false },
    role: { type: "string", required: false },
    mentors: { type: "string", required: false },
    excerpt: { type: "string", required: false },
    image: { type: "string", required: false },
    external: { type: "string", required: false }
  },
  computedFields: {
    ...computedFields
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Event, Gallery, Partner, Career, Project],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [remarkExtractFrontmatter, remarkGfm, remarkCodeTitles, remarkMath, remarkImgToJsx, remarkAlert],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          headingProperties: {
            className: ["content-header"]
          },
          content: icon
        }
      ],
      rehypeKatex,
      rehypeKatexNoTranslate,
      [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
      rehypePresetMinify
    ]
  }
});
export {
  Career,
  Event,
  Gallery,
  Partner,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5OS5UWDJ.mjs.map
