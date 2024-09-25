import * as UrlServices from "../services/url.services.js";

export const generateShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }
    const shortId = await UrlServices.generateShortUrl(url);
    res.status(201).json({
      success: true,
      shortenId: shortId.shortUrlId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getToRedirectUrl = async (req, res) => {
  try {
    const { shortId } = req.params;
    if (!shortId) {
      return res.status(400).json({
        success: false,
        error: "Short id is required.",
      });
    }
    const entry = await UrlServices.getToRedirectUrl(shortId);
    res.redirect(entry.redirectUrl);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message,
    });
  }
};

export const updateUrl = async (req, res) => {
  try {
    const { shortId } = req.params;
    const { url } = req.body;
    if (!url || !shortId) {
      return res.status(400).json({ error: "URL/Short Id is required" });
    }
    await UrlServices.updateUrl(shortId, url);
    res.status(200).json({
      success: true,
      message: "Url updated.",
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message,
    });
  }
};

export const deleteUrl = async (req, res) => {
  try {
    const { shortId } = req.params;
    if (!shortId) {
      return res.status(400).json({
        success: false,
        error: "Short id is required.",
      });
    }
    await UrlServices.deleteUrl(shortId);
    res.status(204).json({
      success: true,
      message: "Url deleted.",
    });
  } catch (error) {
    res.status(error.statusCode).json({
      success: false,
      error: error.message,
    });
  }
};

export const getStat = async (req, res) => {
  try {
    const { shortId } = req.params;
    if (!shortId) {
      return res.status(400).json({
        success: false,
        error: "Short id is required.",
      });
    }
    const stat = await UrlServices.getStat(shortId);
    res.status(200).json({
      success: true,
      visited: stat.vistedTimes,
    });
  } catch (error) {
    res.status(error.statusCode);
  }
};
