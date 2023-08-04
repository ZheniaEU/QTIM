export function generateRandomImageUrl(): string {
   const randomNum = Math.floor(Math.random() * 10000) + 1;
   return "https://loremflickr.com/640/480/?random=" + randomNum;
}
