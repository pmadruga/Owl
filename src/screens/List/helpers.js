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
  return data[0].textAnnotations.slice(1).map((value, index, array) => {
    const xxRefValue = array[array.length - 1].boundingPoly.vertices[0].x;
    const yyRefValue = array[array.length - 1].boundingPoly.vertices[0].y;
    const fontSizeRefValue =
      array[0].boundingPoly.vertices[3].y - array[0].boundingPoly.vertices[0].y;
    const text = value.description;
    const xx = convertCoordsToArFormat({
      coord: value.boundingPoly.vertices[0].x,
      ref: xxRefValue
    });
    const yy = convertCoordsToArFormat({
      coord: array[array.length - index - 1].boundingPoly.vertices[0].y,
      ref: yyRefValue
    });
    const size = calculateFontSize({ value, fontSizeRefValue });
    return {
      text,
      position: {
        x: xx,
        y: -index / 20,
        z: 0
      },
      size
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
