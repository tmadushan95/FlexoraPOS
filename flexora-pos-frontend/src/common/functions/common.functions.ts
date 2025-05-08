import { AppOptions } from "../types/common.types";

/**
 * Retrieves the application options, including the version, environment, and API URL.
 * This function reads values from environment variables and returns them as an `AppOptions` object.
 */
export const GetAppOptions = (): AppOptions => {
  const appOptions = {
    AppName: process.env.REACT_APP_NAME,
    Version: process.env.REACT_APP_VERSION,
    APIURL: process.env.REACT_APP_ROOT_API_URL,
  } as AppOptions;

  // Optional: You can throw an error if any required environment variable is missing
  if (!appOptions.Version || !appOptions.AppName || !appOptions.APIURL) {
    throw new Error(
      "Missing required environment variables for application options."
    );
  }

  return appOptions;
};
