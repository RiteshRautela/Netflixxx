// Logo used in Header component
export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

// Used in Log In page as the user avatar
export const USER_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wolf_%284394675343%29.jpg/1280px-Wolf_%284394675343%29.jpg";

// Background Image for Login component
export const BACK_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg";

// API configuration for TMDB requests
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
,  // Use Bearer Token
  },
};


// Log to check if API Key is loaded
console.log("TMDB API Key Loaded:", import.meta.env.VITE_TMDB_KEY);

// Image CDN URL for fetching movie posters
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

// Supported languages for the app
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
  { identifier: "fr", name: "French" },
  { identifier: "de", name: "German" },
  { identifier: "zh", name: "Chinese" },
  { identifier: "ar", name: "Arabic" },
  { identifier: "ru", name: "Russian" },
];

// OpenAI API Key (secured using environment variables)
export const OPEN_API_KEY = import.meta.env.VITE_OPENAI_KEY;

const BASE_URL = "https://your-image-hosting.com"; // ✅ Add this

export const SCREENSHOT = {
  "landing": `${BASE_URL}/screenshot/01-Landing.png`,
  "signin": `${BASE_URL}/screenshot/02-Signin.png`,
  "signup": `${BASE_URL}/screenshot/03-Signup.png`,
  "browse": `${BASE_URL}/screenshot/04-Browse.png`,
  "movieList": `${BASE_URL}/screenshot/05-Movie-List.png`,
  "shimmer": `${BASE_URL}/screenshot/06-Shimmer-loading.png`,
  "search": `${BASE_URL}/screenshot/07-Search.png`,
  "watch": `${BASE_URL}/screenshot/08-Watch.png`,
};

