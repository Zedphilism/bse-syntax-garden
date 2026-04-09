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
        header: "JetBrains Mono",
        body: "IBM Plex Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F0FDF8",      // mint-50    — fresh morning garden
          lightgray: "#CCFBEE",  // emerald-100 — soft borders
          gray: "#34D399",       // emerald-400 — muted UI, graph links
          darkgray: "#065F46",   // emerald-900 — body text
          dark: "#022C22",       // deep forest — headings
          secondary: "#059669",  // emerald-600 — links
          tertiary: "#10B981",   // emerald-500 — hover
          highlight: "rgba(5, 150, 105, 0.10)",
          textHighlight: "#A7F3D0AA",
        },
        darkMode: {
          light: "#050E0A",      // forest floor — page background
          lightgray: "#0D2118",  // deep moss   — borders
          gray: "#1A4535",       // dark canopy — muted UI
          darkgray: "#86EFAC",   // green-300   — body text
          dark: "#DCFCE7",       // green-100   — headings
          secondary: "#4ADE80",  // emerald-400 — links (bioluminescent)
          tertiary: "#86EFAC",   // green-300   — hover
          highlight: "rgba(74, 222, 128, 0.08)",
          textHighlight: "#14532D99",
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
