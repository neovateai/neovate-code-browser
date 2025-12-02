/**
 * Diff calculation utility functions
 * Provides safe text diff processing functionality
 */

export interface DiffContent {
  readonly oldContent: string;
  readonly newContent: string;
}

/**
 * Safely calculate file diff content
 * Handles different scenarios for new files and modified files
 *
 * @param oldStr - Original content, empty string means new file
 * @param newStr - New content
 * @returns Diff content object
 */
export const computeDiffContent = (
  oldStr?: string | null,
  newStr?: string | null,
): DiffContent => {
  try {
    // Unified input handling - only accept string type
    const safeOldStr = typeof oldStr === 'string' ? oldStr : '';
    const safeNewStr = typeof newStr === 'string' ? newStr : '';

    return {
      oldContent: safeOldStr,
      newContent: safeNewStr,
    };
  } catch (error) {
    console.error('Failed to compute diff content:', error);
    // Unified error fallback strategy: return empty strings
    return { oldContent: '', newContent: '' };
  }
};

/**
 * Validate if diff content is valid
 */
export const isValidDiffContent = (diff: DiffContent): boolean => {
  return (
    diff &&
    typeof diff.oldContent === 'string' &&
    typeof diff.newContent === 'string'
  );
};

/**
 * Calculate diff statistics
 */
export const getDiffStats = (diff: DiffContent) => {
  if (!isValidDiffContent(diff)) {
    return { isNewFile: false, isDelete: false, hasChanges: false };
  }

  const isNewFile = diff.oldContent === '';
  const isDelete = diff.newContent === '';
  const hasChanges = diff.oldContent !== diff.newContent;

  return { isNewFile, isDelete, hasChanges };
};
