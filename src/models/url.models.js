import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const createShortenUrl = (shortUrlId, redirectUrl) => {
  return client.url.create({
    data: {
      shortUrlId,
      redirectUrl,
    },
  });
};

export const getToRedirectUrl = async (shortUrlId) => {
  return client.url.update({
    data: {
      vistedTimes: {
        increment: 1,
      },
    },
    where: {
      shortUrlId,
    },
  });
};

export const updateUrl = (shortUrlId, newUrl) => {
  return client.url.update({
    data: {
      redirectUrl: newUrl,
    },
    where: {
      shortUrlId,
    },
  });
};

export const deleteUrl = (shortUrlId) => {
  return client.url.delete({
    where: {
      shortUrlId,
    },
  });
};

export const getStat = async (shortUrlId) => {
  return client.url.findUnique({
    where: {
      shortUrlId,
    },
  });
};
