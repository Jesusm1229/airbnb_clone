/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
          "ucarecdn.com",
          "cdn.buymeacoffee.com",
          "res.cloudinary.com",
          "imgur.com",
          "i.imgur.com",
          "cutt.ly",
          "activity-graph.herokuapp.com",
          "i.scdn.co",
          "images.unsplash.com",
          "m.media-amazon.com", 
          "imagekit.io",
          "ik.imagekit.io",
        ],
      },
      typescript: {
        ignoreBuildErrors: false,
      },
}

module.exports = nextConfig;
