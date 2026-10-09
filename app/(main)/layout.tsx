import { APP_ID, IS_WAITLIST_ENABLED, THEME } from "@/constants";
import type { Metadata, Viewport } from "next";

import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { TelemetryDeckAnalytics } from "@/components/telemetrydeck_analytics/telemetrydeck_analytics";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import { VercelAnalytics } from "@/components/vercel_analytics/vercel_analytics";
import { VercelSpeedInsights } from "@/components/vercel_speed_insights/vercel_speed_insights";
import "@/global.css";
import { ThemeProvider } from "@/providers/theme_provider";

const TELEMETRYDECK_APP_ID = process.env.NEXT_PUBLIC_TELEMETRYDECK_APP_ID;
const DEPLOYMENT_HOST =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (DEPLOYMENT_HOST ? `https://${DEPLOYMENT_HOST}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  /**
   * `title` and `description` are visible in search results.
   * Recommended length for title is max 60 characters.
    * Recommended length for description is max 160 characters.
    */
  title: "Row Games",
  description:
    "Play Nim, Connect 4, and Tic Tac Toe against friends or three levels of Siri. Track your stats and revisit every match in Row Games.",

  /**
   * Info inside `openGraph` and `twitter` is used to show rich previews
   * on social media when someone shares a link to your website.
   *
   * AppView comes with a tool to help you generate an Open Graph image,
   * run the dev server and go to `http://localhost:3000/open-graph-builder`.
   */
  openGraph: {
    title: "Row Games",
    description:
      "Play Nim, Connect 4, and Tic Tac Toe against friends or three levels of Siri. Track your stats and revisit every match in Row Games.",
    type: "website",
    images: [
      {
        url: "/og-preview.png",
        width: 1280,
        height: 720,
        alt: "Row Games icon with Nim gameplay shown on an iPhone.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Row Games",
    description:
      "Three classic games, four ways to play. Take on a friend or Siri in Nim, Connect 4, and Tic Tac Toe.",
    images: ["/og-preview.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={THEME}>
      <head>
        {/* This makes Safari on iOS show the App Store download banner */}
        {!IS_WAITLIST_ENABLED && (
          <meta name="apple-itunes-app" content={`app-id=${APP_ID}`} />
        )}

        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
        <meta name="google-site-verification" content="Qz7Az6ij-BaMWp__SY5nWL06-tlqgWaRuG95t6HlmtA" />

        <ThemeStyle />
        <MaterialSymbolsLink />
      </head>
      <body>
        <ThemeProvider>
          {!IS_WAITLIST_ENABLED && (
            <Navbar
              icon={<AppIcon src="/favicon.png" />}
              appName="Row Games"
              links={[
                { label: "Games", href: "#games" },
                // Uncomment the line below once you're ready to start using Release Notes
                // { label: "Release Notes", href: "/release-notes" },
                { label: "Support", href: "/support" },
              ]}
              action={<DownloadActionButton />}
            />
          )}

          {children}

          {/*
            There is also a <MultiColumnFooter> component available
            in case you need more space for links.
          */}
          <CompactFooter
            appIcon={
              <AppIcon
                src="/favicon.png"
              />
            }
            appIconHref="/"
            links={[
              { label: "Games", href: "/#games" },
              { label: "Support", href: "/support" },
              { label: "Privacy Policy", href: "/privacy" },
              {
                label: "Terms of Use",
                href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
                external: true,
              },
            ]}
            footnoteLeading={`© ${new Date().getFullYear()}. All rights reserved.`}
            footnoteTrailing={
              // I'd appreciate if you leave this link here, but feel free to remove it, no hard feelings :)
              <>
                Website is built with{" "}
                <a target="_blank" href="https://appview.dev">
                  AppView
                </a>
              </>
            }
          />
        </ThemeProvider>
        
        {TELEMETRYDECK_APP_ID && (
          <TelemetryDeckAnalytics
            appID={TELEMETRYDECK_APP_ID}
            clientUser="anonymous"
          />
        )}
        <VercelAnalytics />
        <VercelSpeedInsights />
      </body>
    </html>
  );
}
