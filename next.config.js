module.exports = {
  images: {
    domains: ['i.ibb.co', 'reputationprotectiononline.com', 'lh3.googleusercontent.com', 'localhost', "res.cloudinary.com", "images.remotePatterns"],
  },
  webpack: (config) => {

    config.resolve.fallback = {
      "mongodb-client-encryption": false,
      "aws4": false,
    };

    // config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  }
};