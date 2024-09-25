import { nanoid } from "nanoid";
import * as UrlModel from "../models/url.models.js";
import { CustomeError } from "../utils/Error.js";

export const generateShortUrl = (url) => {
  const shortId = nanoid(8);
  return UrlModel.createShortenUrl(shortId, url);
};

export const getToRedirectUrl = async (shortenId) => {
  const url = await UrlModel.getToRedirectUrl(shortenId);
  if (!url) {
    throw new CustomeError(400, "Shorten id is not found.");
  }
  return url;
};

export const updateUrl = async (shortUrlId, newUrl) => {
  try {
    await UrlModel.updateUrl(shortUrlId, newUrl);
  } catch (error) {
    throw new CustomeError(400, "Shorten id is not found.");
  }
};

export const deleteUrl = async (shortUrlId) => {
  try {
    await UrlModel.deleteUrl(shortUrlId);
  } catch (error) {
    throw new CustomeError(400, "Shorten id is not found.");
  }
};

export const getStat = async (shortUrlId) => {
  try {
    const statData = await UrlModel.getStat(shortUrlId);
    return statData;
  } catch (error) {
    throw new CustomeError(400, "Shorten id is not found.");
  }
};
