"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

function stripAfterLastDash(str) {
  const lastDashIndex = str.lastIndexOf("-");
  if (lastDashIndex === -1) {
    // No dash found, return the original string
    return str;
  }
  return str.substring(0, lastDashIndex);
}

function randomlyServeVariation(pages) {
  const variations = pages.filter((page) => {
    const slug = page.attributes?.slug || "";
    // Extracting the base part of the slug
    const baseSlug = stripAfterLastDash(slug);
    // Creating a dynamic pattern using the base slug
    const slugPattern = new RegExp(`^${baseSlug}-[a-zA-Z]$`);

    return slugPattern.test(slug);
  });

  return variations[Math.floor(Math.random() * variations.length)];
}

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  /**
   * Example 1: Modifying a Strapi controller function
   *
   * If you need to modify the input or output of a pre-defined Strapi controller method,
   * write a method of the same name, and use `super` to call the parent method.
   * */
  async find(ctx) {
    // Call the default parent controller action
    const result = await super.find(ctx);

    const filter = ctx.query?.filters?.slug;

    // Specific condition for allowing A/B Testing if $startsWith is being used and result contains more than 1 item
    if (
      Object.keys(filter).includes("$startsWith") &&
      result?.data?.length > 1
    ) {
      return { ...result, data: randomlyServeVariation(result.data) };
    }

    return result;
  },
}));
