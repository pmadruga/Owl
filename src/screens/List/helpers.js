export function getGeneralDescriptionData(data) {
  return data[0].textAnnotations[0].description.split('\n').map(value => ({ key: value }));
}

export function getLocaleOfTranslation(data) {
  return data[0].textAnnotations[0].locale.toUpperCase();
}

/**
 * Sanitization of Google Cloud response data,
 * so that it removes the generic text recognition
 * and only includes detailed descriptions (with coordinates).
 * @param {object} data
 * @returns {object}
 */
export function getDetailedDescriptionData(data) {
  return data[0].textAnnotations[0].description
    .split('\n')
    .reverse()
    .map((word, index, array) => {
      return {
        text: word,
        position: {
          x: 0,
          y: (index + 1) / array.length
        },
        size: 0.1
      };
    });
}

function convertCoordsToArFormat({ coord, ref }) {
  return coord * 0.08 / ref;
}

/**
 * Normalizing height size
 * @param {object} param0
 */
function calculateFontSize({ value, fontSizeRefValue }) {
  const height = value.boundingPoly.vertices[3].y - value.boundingPoly.vertices[0].y;
  return height * 0.02 / fontSizeRefValue;
}
