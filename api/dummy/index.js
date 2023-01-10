const blogs = [
    {
        "createdAt" : "THE BOT ERA",
        "description" : "Cannot reach the server at this moment. Please try again later!",
        "comments" : [{
            "name" : "Server Bot",
            "comment" : "Oh Snap! Server Under Maintainance!",
            "createdAt" : "THE BOT ERA!"
        },
        ]
    },
]

export const dummyData = (url = "") => {
    if (url.includes("blogs")) {
      return { data: blogs };
    }

    if(url.includes("slug")) {
        return {
            data : [
                {
                    "slug" : "loading",
                    "_id" : "loading"
                }
            ]
        }
    }
  
    return { data: [{}], error: true };
  };