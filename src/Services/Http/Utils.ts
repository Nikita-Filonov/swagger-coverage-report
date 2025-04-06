const isInformational = (code: number): boolean => code >= 100 && code < 200;

const isSuccess = (code: number): boolean => code >= 200 && code < 300;

const isRedirect = (code: number): boolean => code >= 300 && code < 400;

const isClientError = (code: number): boolean => code >= 400 && code < 500;

const isServerError = (code: number): boolean => code >= 500 && code < 600;

export const getStatusCodeColor = (code: number): 'error' | 'success' | 'warning' => {
  if (isInformational(code) || isSuccess(code)) {
    return 'success';
  }

  if (isRedirect(code)) {
    return 'warning';
  }

  if (isClientError(code) || isServerError(code)) {
    return 'error';
  }

  return 'success';
};
