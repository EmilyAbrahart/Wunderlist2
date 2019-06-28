// VARIABLES
// Colors
export const color_light = "#ffffff";
export const color_dark = "#1a2035";
export const color_primary = "#31364a";
export const color_secondary = "#219ea4";
export const color_positive = "#c3e88d";
export const color_neutral = "#ffed8d";
export const color_negative = "#eb5372";
export const color_subtle = "#d3d3d3";
export const color_transparent = "rgba(0,0,0,0)";
export const shadow = "0px 4px 4px rgba(0, 0, 0, 0.3)";

// Fonts
export const title_font = "'Philosopher', sans-serif";
export const header_font = "'Roboto', sans-serif;";
export const text_font = "";

//Media Queries
export const mobile = "(max-device-width : 480px)";
export const tablet = "(max-device-width : 1024px)";

// FUNCTIONS
// Flexbox
export const FlexFunc = (direction, justifyC, alignI) => {
  return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};

// Button styling
export const Button = (backgroundColor, color) => {
  return `
  background-color: ${backgroundColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: ${color};
  cursor: pointer;
  font-weight: bold;
  border: 1px solid ${color}};
  outline: none;
  font-family: ${text_font};
  box-sizing: border-box;
  

  &:hover {
    color: ${backgroundColor};
    background-color: ${color};
    border-color:${backgroundColor};
  }
  `;
};

export const Input = (width) => {
    return `
    width: ${width};
    border-radius: 1rem;
    border: none;
    outline: none;
    text-align: center;
    font-size: 0.8rem;
    height: 1.5rem;
    border: none;

     &:focus {
       box-shadow: ${shadow};
     }
    `
}