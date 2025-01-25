const { GoogleGenerativeAI } = require("@google/generative-ai");

export class geminiLibrary {
    constructor() {

    }

    async generateCode(prompt: string) {

        let secret_key = process.env.GEMINI_API_KEY;
        const genAI = new GoogleGenerativeAI(secret_key);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        let new_prompt: string = `Generate separate HTML, CSS, and JavaScript code based on the following prompt: ${prompt}. Ensure that: Ensure the following: Every HTML element must have a unique class or ID. Do not apply CSS directly to tags like body, header, nav, or others. CSS must exclusively use these unique classes or IDs to style elements, avoiding generic tag-based selectors entirely. The HTML should be semantic, well-structured, and follow best practices for accessibility and readability. JavaScript must be modular and provide interactivity or functionality as described in the prompt. Label the output clearly as HTML, CSS, and JavaScript, ensuring the code is clean, modular, and adheres to the guidelines. Generate CSS for the following HTML structure, ensuring that styles are applied using classes and IDs assigned to each element. Avoid directly styling HTML tags like 'body', 'header', 'nav', etc.CSS Guidelines: Use a consistent naming convention for classes (e.g., 'page-header', 'section-title'). Consider using a CSS preprocessor (like Sass or Less) for better organization and maintainability. Ensure the CSS is well-formatted and easy to read.`
        console.log('new_prompt: ', new_prompt);

        // const result = await model.generateContent(prompt);
        // console.log('result: ', result);

        let result = {
            response: {
                "candidates": [
                    {
                        "content": {
                            "parts": [
                                {
                                    "text": "This code creates a dark-themed landing page with vibrant color accents for a finance news website.  It uses HTML for structure, CSS for styling, and a bit of JavaScript for a simple animation.  Note that this is a basic example and would require further development for a fully functional website.  You'll need to replace placeholder content and integrate with your actual backend systems for login/registration functionality.\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Finance News</title>\n    <style>\n        body {\n            background-color: #1e1e1e; /* Dark background */\n            color: #eee;\n            font-family: sans-serif;\n            margin: 0;\n            padding: 0;\n            overflow-x: hidden; /* Prevent horizontal scroll on animation */\n        }\n\n        header {\n            background-color: #282828;\n            padding: 20px;\n            text-align: center;\n        }\n\n        header button {\n            background-color: #ff6347; /* Vibrant orange */\n            color: white;\n            padding: 10px 20px;\n            border: none;\n            border-radius: 5px;\n            margin: 0 10px;\n            cursor: pointer;\n            transition: background-color 0.3s;\n        }\n\n        header button:hover {\n            background-color: #ff8c69;\n        }\n\n\n        .hero {\n            background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('https://source.unsplash.com/1600x900/?finance,money'); /* Replace with your image */\n            background-size: cover;\n            background-position: center;\n            color: white;\n            text-align: center;\n            padding: 100px 0;\n        }\n\n        .hero h1 {\n            font-size: 3em;\n            margin-bottom: 20px;\n            text-shadow: 2px 2px 4px #000;\n        }\n\n        .hero p {\n            font-size: 1.2em;\n            margin-bottom: 30px;\n            text-shadow: 1px 1px 2px #000;\n        }\n\n        .cta-button {\n            background-color: #4CAF50; /* Vibrant green */\n            color: white;\n            padding: 15px 30px;\n            border: none;\n            border-radius: 5px;\n            font-size: 1.2em;\n            cursor: pointer;\n            transition: background-color 0.3s;\n        }\n\n        .cta-button:hover {\n            background-color: #66bb6a;\n        }\n\n        .section {\n            padding: 50px 0;\n            text-align: center;\n        }\n\n        .section h2 {\n            color: #ff9800; /* Vibrant orange */\n            margin-bottom: 20px;\n        }\n\n        .section p {\n            margin-bottom: 30px;\n            line-height: 1.6;\n        }\n\n        /* Simple animation */\n        .animated-text {\n            animation: glow 1s ease-in-out infinite alternate;\n        }\n\n        @keyframes glow {\n            0% {\n                text-shadow: 0 0 5px #ff6347;\n            }\n            100% {\n                text-shadow: 0 0 20px #ff6347;\n            }\n        }\n    </style>\n</head>\n<body>\n    <header>\n        <h1>Finance News</h1>\n        <div>\n            <button>Login</button>\n            <button>Register</button>\n            <button>About Us</button>\n        </div>\n    </header>\n\n    <section class=\"hero\">\n        <h1 class=\"animated-text\">Stay Updated. Invest Smarter.</h1>\n        <p>Your one-stop source for the latest financial news and insights.</p>\n        <button class=\"cta-button\">Explore Now</button>\n    </section>\n\n    <section class=\"section\">\n        <h2>Market Insights</h2>\n        <p>Get in-depth analysis and expert opinions on current market trends.</p>\n    </section>\n\n    <section class=\"section\">\n        <h2>Investment Strategies</h2>\n        <p>Discover proven strategies to help you manage your investments effectively.</p>\n    </section>\n\n    <footer>\n        <p>&copy; 2023 Finance News. All rights reserved.</p>\n    </footer>\n</body>\n</html>\n```\n\nRemember to replace `\"https://source.unsplash.com/1600x900/?finance,money\"` with a URL to your actual hero image.  This example uses Unsplash as a placeholder; make sure you have the rights to use any image you choose.  You would also need to implement the actual functionality behind the \"Login,\" \"Register,\" and \"Explore Now\" buttons.  This would typically involve connecting to a backend system and handling user authentication and data retrieval.\n"
                                }
                            ],
                            "role": "model"
                        },
                        "finishReason": "STOP",
                        "citationMetadata": {
                            "citationSources": [
                                {
                                    "startIndex": 432,
                                    "endIndex": 585,
                                    "uri": "https://www.rethinkdb.cloud/2020/08/17/rethinkdb-chat-socketio.html"
                                },
                                {
                                    "startIndex": 1118,
                                    "endIndex": 1323,
                                    "uri": "https://github.com/YasheshRay/ASSIGNMENT_3"
                                },
                                {
                                    "startIndex": 1589,
                                    "endIndex": 1829,
                                    "uri": "https://github.com/Kavinthangavel/FrontEnd"
                                },
                                {
                                    "startIndex": 1628,
                                    "endIndex": 1866,
                                    "uri": "https://github.com/Titus0406/mywebsite"
                                },
                                {
                                    "startIndex": 2154,
                                    "endIndex": 2359,
                                    "uri": "https://github.com/WillC33/QuickQuiz",
                                    "license": "mit"
                                },
                                {
                                    "startIndex": 2212,
                                    "endIndex": 2431,
                                    "uri": "https://github.com/MykhailoHablevych/HTML_CSS_JS"
                                }
                            ]
                        },
                        "avgLogprobs": -0.09730858669812936
                    }
                ],
                "usageMetadata": {
                    "promptTokenCount": 44,
                    "candidatesTokenCount": 1255,
                    "totalTokenCount": 1299
                },
                "modelVersion": "gemini-1.5-flash"
            }
        }

        return result;
    }
}