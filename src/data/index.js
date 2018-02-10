const DATA = [
  {
    textAnnotations: [
      {
        locale: 'da',
        description:
          'Lyngby:\nLyngby Hovedgade 49A, 2\n2800 Lyngby\nLemvig:\nTeglgårdsvej 6A\n7620 Lemvig\nrils reiser\nwww.riisrejser.dk Telefon 70 11 47 11\n',
        boundingPoly: {
          vertices: [
            { x: 744, y: 175 },
            { x: 2702, y: 175 },
            { x: 2702, y: 1032 },
            { x: 744, y: 1032 }
          ]
        }
      },
      {
        description: 'Lyngby:',
        boundingPoly: {
          vertices: [{ x: 744, y: 175 }, { x: 995, y: 175 }, { x: 995, y: 247 }, { x: 744, y: 247 }]
        }
      },
      {
        description: 'Lyngby',
        boundingPoly: {
          vertices: [{ x: 746, y: 275 }, { x: 904, y: 275 }, { x: 904, y: 327 }, { x: 746, y: 327 }]
        }
      },
      {
        description: 'Hovedgade',
        boundingPoly: {
          vertices: [
            { x: 918, y: 275 },
            { x: 1177, y: 275 },
            { x: 1177, y: 326 },
            { x: 918, y: 326 }
          ]
        }
      },
      {
        description: '49A,',
        boundingPoly: {
          vertices: [
            { x: 1192, y: 276 },
            { x: 1294, y: 276 },
            { x: 1294, y: 323 },
            { x: 1192, y: 323 }
          ]
        }
      },
      {
        description: '2',
        boundingPoly: {
          vertices: [
            { x: 1311, y: 276 },
            { x: 1336, y: 276 },
            { x: 1336, y: 317 },
            { x: 1311, y: 317 }
          ]
        }
      },
      {
        description: '2800',
        boundingPoly: {
          vertices: [{ x: 749, y: 365 }, { x: 865, y: 365 }, { x: 865, y: 405 }, { x: 749, y: 405 }]
        }
      },
      {
        description: 'Lyngby',
        boundingPoly: {
          vertices: [
            { x: 881, y: 361 },
            { x: 1042, y: 361 },
            { x: 1042, y: 413 },
            { x: 881, y: 413 }
          ]
        }
      },
      {
        description: 'Lemvig:',
        boundingPoly: {
          vertices: [
            { x: 1582, y: 175 },
            { x: 1825, y: 175 },
            { x: 1825, y: 245 },
            { x: 1582, y: 245 }
          ]
        }
      },
      {
        description: 'Teglgårdsvej',
        boundingPoly: {
          vertices: [
            { x: 1580, y: 275 },
            { x: 1867, y: 275 },
            { x: 1867, y: 326 },
            { x: 1580, y: 326 }
          ]
        }
      },
      {
        description: '6A',
        boundingPoly: {
          vertices: [
            { x: 1884, y: 276 },
            { x: 1945, y: 276 },
            { x: 1945, y: 317 },
            { x: 1884, y: 317 }
          ]
        }
      },
      {
        description: '7620',
        boundingPoly: {
          vertices: [
            { x: 1586, y: 359 },
            { x: 1698, y: 364 },
            { x: 1696, y: 406 },
            { x: 1584, y: 401 }
          ]
        }
      },
      {
        description: 'Lemvig',
        boundingPoly: {
          vertices: [
            { x: 1713, y: 357 },
            { x: 1875, y: 364 },
            { x: 1873, y: 413 },
            { x: 1711, y: 406 }
          ]
        }
      },
      {
        description: 'rils',
        boundingPoly: {
          vertices: [
            { x: 1382, y: 782 },
            { x: 1740, y: 782 },
            { x: 1740, y: 945 },
            { x: 1382, y: 945 }
          ]
        }
      },
      {
        description: 'reiser',
        boundingPoly: {
          vertices: [
            { x: 1748, y: 778 },
            { x: 2702, y: 778 },
            { x: 2702, y: 951 },
            { x: 1748, y: 951 }
          ]
        }
      },
      {
        description: 'www.riisrejser.dk',
        boundingPoly: {
          vertices: [
            { x: 1378, y: 982 },
            { x: 1719, y: 982 },
            { x: 1719, y: 1032 },
            { x: 1378, y: 1032 }
          ]
        }
      },
      {
        description: 'Telefon',
        boundingPoly: {
          vertices: [
            { x: 1764, y: 982 },
            { x: 1905, y: 982 },
            { x: 1905, y: 1032 },
            { x: 1764, y: 1032 }
          ]
        }
      },
      {
        description: '70',
        boundingPoly: {
          vertices: [
            { x: 1934, y: 982 },
            { x: 1974, y: 982 },
            { x: 1974, y: 1032 },
            { x: 1934, y: 1032 }
          ]
        }
      },
      {
        description: '11',
        boundingPoly: {
          vertices: [
            { x: 1992, y: 982 },
            { x: 2033, y: 982 },
            { x: 2033, y: 1032 },
            { x: 1992, y: 1032 }
          ]
        }
      },
      {
        description: '47',
        boundingPoly: {
          vertices: [
            { x: 2052, y: 982 },
            { x: 2093, y: 982 },
            { x: 2093, y: 1032 },
            { x: 2052, y: 1032 }
          ]
        }
      },
      {
        description: '11',
        boundingPoly: {
          vertices: [
            { x: 2112, y: 982 },
            { x: 2152, y: 982 },
            { x: 2152, y: 1032 },
            { x: 2112, y: 1032 }
          ]
        }
      }
    ],
    fullTextAnnotation: {
      pages: [
        {
          property: { detectedLanguages: [{ languageCode: 'da' }] },
          width: 2846,
          height: 1152,
          blocks: [
            {
              property: { detectedLanguages: [{ languageCode: 'da' }] },
              boundingBox: {
                vertices: [
                  { x: 744, y: 175 },
                  { x: 1335, y: 175 },
                  { x: 1335, y: 414 },
                  { x: 744, y: 414 }
                ]
              },
              paragraphs: [
                {
                  property: { detectedLanguages: [Object] },
                  boundingBox: { vertices: [Object] },
                  words: [[Object], [Object], [Object], [Object], [Object], [Object], [Object]]
                }
              ],
              blockType: 'TEXT'
            },
            {
              property: { detectedLanguages: [{ languageCode: 'fo' }] },
              boundingBox: {
                vertices: [
                  { x: 1580, y: 175 },
                  { x: 1945, y: 175 },
                  { x: 1945, y: 414 },
                  { x: 1580, y: 414 }
                ]
              },
              paragraphs: [
                {
                  property: { detectedLanguages: [Object] },
                  boundingBox: { vertices: [Object] },
                  words: [[Object], [Object], [Object], [Object], [Object]]
                }
              ],
              blockType: 'TEXT'
            },
            {
              property: { detectedLanguages: [{ languageCode: 'no' }] },
              boundingBox: {
                vertices: [
                  { x: 1382, y: 778 },
                  { x: 2702, y: 778 },
                  { x: 2702, y: 951 },
                  { x: 1382, y: 951 }
                ]
              },
              paragraphs: [
                {
                  property: { detectedLanguages: [Object] },
                  boundingBox: { vertices: [Object] },
                  words: [[Object], [Object]]
                }
              ],
              blockType: 'TEXT'
            },
            {
              property: { detectedLanguages: [{ languageCode: 'pt-PT' }] },
              boundingBox: {
                vertices: [
                  { x: 1378, y: 982 },
                  { x: 2152, y: 982 },
                  { x: 2152, y: 1032 },
                  { x: 1378, y: 1032 }
                ]
              },
              paragraphs: [
                {
                  property: { detectedLanguages: [Object] },
                  boundingBox: { vertices: [Object] },
                  words: [[Object], [Object], [Object], [Object], [Object], [Object]]
                }
              ],
              blockType: 'TEXT'
            }
          ]
        }
      ],
      text:
        'Lyngby:\nLyngby Hovedgade 49A, 2\n2800 Lyngby\nLemvig:\nTeglgårdsvej 6A\n7620 Lemvig\nrils reiser\nwww.riisrejser.dk Telefon 70 11 47 11\n'
    }
  }
];

export default DATA;
