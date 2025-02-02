module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.course-api.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "https://dummyjson.com/",
        port: "",
        pathname: "/products",
      },
    ],
  },
};
