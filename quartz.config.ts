import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "BSE Syntax Garden",
    pageTitleSuffix: " | BSE Syntax Garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "Zedphilism.github.io/bse-syntax-garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Exo",
        body: "Atkinson Hyperlegible",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F8FAFC",      // slate-50  — page background
          lightgray: "#E2E8F0",  // slate-200 — borders, dividers
          gray: "#94A3B8",       // slate-400 — graph links, muted UI
          darkgray: "#475569",   // slate-600 — body text
          dark: "#1E293B",       // slate-800 — headings, bold
          secondary: "#2563EB",  // blue-600  — links, active states
          tertiary: "#3B82F6",   // blue-500  — hover
          highlight: "rgba(37, 99, 235, 0.08)",
          textHighlight: "#DBEAFE88",
        },
        darkMode: {
          light: "#0F172A",      // slate-900 — page background
          lightgray: "#1E293B",  // slate-800 — borders
          gray: "#475569",       // slate-600 — muted UI
          darkgray: "#CBD5E1",   // slate-300 — body text
          dark: "#F1F5F9",       // slate-100 — headings
          secondary: "#60A5FA",  // blue-400  — links
          tertiary: "#93C5FD",   // blue-300  — hover
          highlight: "rgba(96, 165, 250, 0.1)",
          textHighlight: "#1E3A5F88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
