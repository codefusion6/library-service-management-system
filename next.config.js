module.exports = {
  images: {
    domains: ['i.ibb.co', 'reputationprotectiononline.com', 'lh3.googleusercontent.com', 'localhost', "res.cloudinary.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false,
      "aws4": false
    };

    return config;
  }
};