const blogs = [
    {
        "createdAt" : "THE BOT ERA",
        "description" : "Cannot reach the server at this moment. Please try again later!",
        "comments" : [{
            "name" : "Server Bot",
            "comment" : "Oh Snap! Server Under Maintainance!"
        },
        ]
    },
]

export const dummyData = (url = "") => {
    if (url.includes("blogs")) {
      return { data: blogs };
    }
  
    return { data: null, error: true };
  };