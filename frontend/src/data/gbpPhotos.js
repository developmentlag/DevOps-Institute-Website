// Photographs supplied from the Powai Google Business Profile.
// gbp-4 is the full batch under the pendant lights (the block under each H1).
// gbp-5 is the glass-door campus entrance with the postgraduate Cloud & DevOps sign
// (shown beside the map). The other eight are the student-life gallery.
// Alt text describes the scene. It does not name anyone in the photo.

const BASE = "/campus/gbp";

function photo({ id, width, height, smallWidth, alt }) {
  const large = (ext) => `${BASE}/${id}.${ext}`;
  const small = (ext) => `${BASE}/${id}-800.${ext}`;
  const set = (ext) =>
    smallWidth
      ? `${small(ext)} ${smallWidth}w, ${large(ext)} ${width}w`
      : `${large(ext)} ${width}w`;
  return {
    id,
    alt,
    width,
    height,
    jpg: large("jpg"),
    webp: large("webp"),
    avif: large("avif"),
    jpgSrcSet: set("jpg"),
    webpSrcSet: set("webp"),
    avifSrcSet: set("avif"),
  };
}

const PHOTOS = {
  "gbp-1": photo({
    id: "gbp-1",
    width: 1080,
    height: 1350,
    smallWidth: 640,
    alt: "DevOps classroom batch at DevOps Institute Powai campus, Mumbai, with students working on laptops",
  }),
  "gbp-2": photo({
    id: "gbp-2",
    width: 900,
    height: 1600,
    smallWidth: 450,
    alt: "Students in a DevOps classroom lab at DevOps Institute Powai campus, Mumbai",
  }),
  "gbp-3": photo({
    id: "gbp-3",
    width: 1080,
    height: 1350,
    smallWidth: 640,
    alt: "Wide view of a DevOps classroom batch at DevOps Institute Powai campus, Mumbai, under pendant lights",
  }),
  "gbp-4": photo({
    id: "gbp-4",
    width: 1080,
    height: 1350,
    smallWidth: 640,
    alt: "DevOps classroom batch at DevOps Institute Powai campus, Mumbai, with the full batch at desks under pendant lights",
  }),
  "gbp-5": photo({
    id: "gbp-5",
    width: 830,
    height: 1164,
    smallWidth: 570,
    alt: "Campus entrance at DevOps Institute Powai, Mumbai, with Postgraduate Program in Cloud and DevOps signage on the glass door",
  }),
  "gbp-6": photo({
    id: "gbp-6",
    width: 1600,
    height: 900,
    smallWidth: 800,
    alt: "DevOps classroom batch group photo at DevOps Institute Powai campus, Mumbai",
  }),
  "gbp-7": photo({
    id: "gbp-7",
    width: 1354,
    height: 900,
    smallWidth: 800,
    alt: "Students holding cloud and DevOps certificates at DevOps Institute Powai campus, Mumbai",
  }),
  "gbp-8": photo({
    id: "gbp-8",
    width: 900,
    height: 1600,
    smallWidth: 450,
    alt: "Large DevOps classroom batch at DevOps Institute Powai campus, Mumbai, working on laptops",
  }),
  "gbp-9": photo({
    id: "gbp-9",
    width: 800,
    height: 800,
    alt: "Students in a DevOps classroom at DevOps Institute Powai campus, Mumbai",
  }),
  "gbp-10": photo({
    id: "gbp-10",
    width: 816,
    height: 1440,
    smallWidth: 454,
    alt: "Student thank-you portrait at DevOps Institute Powai campus, Mumbai",
  }),
};

export const GBP_HERO = PHOTOS["gbp-4"];
export const GBP_ENTRANCE = PHOTOS["gbp-5"];

export const GBP_GALLERY = [
  PHOTOS["gbp-1"],
  PHOTOS["gbp-3"],
  PHOTOS["gbp-8"],
  PHOTOS["gbp-2"],
  PHOTOS["gbp-6"],
  PHOTOS["gbp-7"],
  PHOTOS["gbp-9"],
  PHOTOS["gbp-10"],
];

// Hero first so the primary image in JSON-LD is the classroom batch.
export const GBP_PHOTOS = [GBP_HERO, GBP_ENTRANCE, ...GBP_GALLERY];
