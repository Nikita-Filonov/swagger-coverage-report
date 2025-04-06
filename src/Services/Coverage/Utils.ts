export const getCoverageColor = (coverage: number): 'error' | 'success' | 'warning' => {
  if (coverage < 30) {
    return 'error';
  }

  if (coverage < 60) {
    return 'warning';
  }

  return 'success';
};
