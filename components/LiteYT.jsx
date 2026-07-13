"use client";

import "lite-youtube-embed";

/**
 * Thin wrapper around <lite-youtube>.
 *
 * The video id is a prop, never a hardcoded constant. When no id is supplied
 * (or it is an empty string) the component renders nothing, so callers can
 * safely mount it before a walkthrough film exists and fall back to their own
 * still-image treatment.
 */
export default function LiteYT({
  videoid = "",
  title = "NorthWind Sanctuary walkthrough",
}) {
  const id = typeof videoid === "string" ? videoid.trim() : "";

  if (!id) return null;

  return (
    <div className="w-full h-full">
      <lite-youtube
        videoid={id}
        playlabel={title}
        class="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      ></lite-youtube>
    </div>
  );
}
