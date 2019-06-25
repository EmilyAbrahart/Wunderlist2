// VARIABLES
// Colors
export const color_light = "#ffffff";
export const color_primary = "#31364a";
export const color_secondary = "#89ddfb";
export const color_positive = "#c3e88d";
export const color_neutral = "#ffed8d";
export const color_negative = "#eb5372";
export const color_subtle = "#d3d3d3";
export const color_transparent = "rgba(0,0,0,0)";
export const shadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

// Fonts
export const header_font = "'Dancing Script', cursive";
export const text_font = "'Hind Siliguri', sans-serif";

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
  border: 2px solid ${color}};
  outline: none;
  font-family: ${text_font};
  

  &:hover {
    color: ${backgroundColor};
    background-color: ${color};
    border: 2px solid ${backgroundColor};
  }
  `;
};

export const Priority = () => {
    return 
}