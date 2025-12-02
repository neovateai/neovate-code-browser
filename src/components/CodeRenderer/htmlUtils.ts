/**
 * HTML style cleanup utility
 * Only cleans background color related styles, preserves syntax highlighting colors
 */

/**
 * Clean background color styles from HTML, preserve foreground colors and other styles
 * Only removes background-color and background properties, preserves color and other styles
 */
export const cleanHtmlStyles = (html: string): string => {
  try {
    // Only remove background related styles, preserve foreground colors and other styles
    return html
      .replace(/background-color:[^;"']*;?\s*/gi, '')
      .replace(/background:[^;"']*;?\s*/gi, '')
      .replace(/style=["'](\s*;?\s*)["']/gi, '') // Remove empty style attributes
      .replace(/style=["'](\s*;?\s*)*["']/gi, '') // Remove style attributes containing only semicolons and spaces
      .trim();
  } catch (error) {
    console.error('Failed to clean HTML styles:', error);
    return html;
  }
};
