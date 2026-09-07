/**
 * The HTS One brand mark — declared ONCE, for every surface that draws it.
 *
 * The logo was previously six separate string literals across the sidebars, the
 * landing page's stylesheet and the two auth pages, each repeating the path and
 * the aspect ratio. That is how a logo ends up half-updated: the sidebar changes,
 * the signup page does not, and the mismatch is only visible to the people
 * deciding whether to trust the product.
 *
 * # WHY THIS IS A LOCAL FILE AND NOT THE S3 URL
 *
 * The S3 original (HTS+Logo.png) is 100% OPAQUE — it has an alpha channel, but
 * every pixel in it is solid, with a dark navy rgb(30,37,47) background baked
 * into the image. That background is what showed as a dark block behind the
 * logo in the expanded sidebar, and no CSS can remove a background that is part
 * of the picture.
 *
 * It also silently breaks the masked usages, which is the less obvious half: a
 * CSS mask keys on ALPHA, so a fully opaque image masks nothing away and the
 * element paints as a solid gradient rectangle rather than the mark.
 *
 * This file is the same artwork with that background keyed out and the edge
 * pixels un-premultiplied, so glyph edges carry no dark halo. Being local also
 * removes the CORS requirement the masks would otherwise have had.
 *
 * TO GO BACK TO S3: upload a logo WITH A TRANSPARENT BACKGROUND to the bucket
 * and point this constant at it. Nothing else has to change — every surface
 * reads the logo from here.
 */
export const BRAND_LOGO_URL = '/hts-logo-transparent.png';

/**
 * The mark's true aspect ratio, from the asset itself (1525 x 688).
 *
 * The call sites used to hardcode `914 / 412` — which is the same shape to three
 * decimal places, so the widths did not have to change. Kept as a number rather
 * than a magic pair so a future logo of a different shape is one edit, not five.
 */
export const BRAND_LOGO_ASPECT = 1525 / 688;

/**
 * The mark as a CSS mask, for the surfaces that recolour it with a gradient
 * rather than rendering the PNG's own colours. Only the alpha channel is used.
 */
export const BRAND_LOGO_MASK = `url('${BRAND_LOGO_URL}') left center / contain no-repeat`;
