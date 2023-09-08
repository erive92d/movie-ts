// export const rateStars = (rating) => {
//   let rounded = Math.floor(rating);
//   const rateIcon = "★";
//   let array = [];
//   for (let i = 0; i < rounded; i++) {
//     array.push(rateIcon);
//   }
//   return array;
// };

export const rateStars = (rating: number): string[] => {
    const rounded: number = Math.floor(rating);
    const rateIcon: string = "★";
    const array: string[] = [];
    for (let i: number = 0; i < rounded; i++) {
      array.push(rateIcon);
    }
  
    return array;
  };