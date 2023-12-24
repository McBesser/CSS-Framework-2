class CSSF {
  constructor(settings = {}) {
    this.prefix = settings.prefix || 'cssf';
    this.alias = Object.assign(
      {
        'flex': 'd_flex--f-d_row--f-w_wrap--f-jc_start--f-ac_stretch--f-ai_stretch'
      },
      settings.alias || {}
    );
    this.shorts = Object.assign(
      {
        'm': 'margin',
        'my': ['margin-top', 'margin-bottom'],
        'mx': ['margin-left', 'margin-right'],
        'mt': 'margin-top',
        'mr': 'margin-right',
        'mb': 'margin-bottom',
        'ml': 'margin-left',
        'p': 'padding',
        'py': ['padding-top', 'padding-bottom'],
        'px': ['padding-left', 'padding-right'],
        'pt': 'padding-top',
        'pr': 'padding-right',
        'pb': 'padding-bottom',
        'pl': 'padding-left',
        'w': 'width',
        'h': 'height',
        'c': 'color',
        'bg': 'background',
        'bg-c': 'background-color',
        'br': 'border',
        'br-t': 'border-top',
        'br-r': 'border-right',
        'br-b': 'border-bottom',
        'br-l': 'border-left',
        'br-r': 'border-radius',
        'br-t-r': ['border-top-left-radius', 'border-top-right-radius'],
        'br-r-r': ['border-top-left-radius', 'border-bottom-left-radius'],
        'br-b-r': ['border-bottom-left-radius', 'border-bottom-right-radius'],
        'br-l-r': ['border-top-left-radius', 'border-bottom-left-radius'],
        'br-tl-r': 'border-top-left-radius',
        'br-tr-r': 'border-top-right-radius',
        'br-bl-r': 'border-bottom-left-radius',
        'br-br-r': 'border-bottom-right-radius',
        'bpm': 'media',
        'bpc': 'container',
        't': 'top',
        'r': 'right',
        'l': 'left',
        'b': 'bottom',
        'f': 'flex',
        'f-d': 'flex-direction',
        'f-w': 'flex-wrap',
        'f-jc': 'justify-content',
        'f-ai': 'align-items',
        'f-ac': 'align-content',
        'f-as': 'align-self',
        'g': 'grid',
        'd': 'display',
        'ca': '+',
        'cs': '-',
        'cm': '*',
        'cd': '/',
        'start': 'flex-start',
        'end': 'flex-end',
        'between': 'space-between',
        'around': 'space-around',
      },
      settings.shorts || {}
    );

    document.addEventListener('DOMContentLoaded', () => {
      this.initialize();
      this.observeDOMChanges();
    });
  }

  initialize() {
    this.cssClasses = this.getCssClasses();
    this.styles = this.getStyles(this.cssClasses);
    this.applyStylesToDOM(this.styles);
  }

  observeDOMChanges() {
    const observer = new MutationObserver(() => {
      this.initialize();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });
  }

  getCssClasses() {
    const allElements = document.querySelectorAll('[class]');
    const uniqueCssClassesArray = [];

    allElements.forEach((element) => {
      const classesArray = element.classList.value.split(' ');
      const prefixedClasses = classesArray
        .filter((className) => className.startsWith(this.prefix + '--'))
        .map((className) => className.substring(this.prefix.length + 2));

      prefixedClasses.forEach((cssClass) => {
        if (!uniqueCssClassesArray.includes(cssClass)) {
          uniqueCssClassesArray.push(cssClass);
        }
      });
    });

    return uniqueCssClassesArray;
  }

  getStyles(cssClasses) {
    let data = [];
    cssClasses.forEach((cssClass, cssClassIndex) => {
      const cssClassUse = cssClass;
      cssClass = this.alias[cssClass] ? this.alias[cssClass] : cssClass;
      const parts = cssClass.split('--');
      let query = '';
      let styles = '';
      styles += `.${this.prefix}--${cssClassUse}{`;
      parts.forEach((part, partIndex) => {
        const subParts = part.split('_');
        const convertedSubPartsData = [];
        subParts.forEach((subPart, subPartIndex) => {
          convertedSubPartsData.push(this.convertSubPartData(subPart));
        });
        const mainInstruction = convertedSubPartsData.shift();
        const instructions = convertedSubPartsData;
        if (mainInstruction.property === 'media' || mainInstruction.property === 'container') {
          let calc = 0;
          if (instructions.length > 0 && (instructions[0].number && instructions[0].unit)) {
            const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
            properties.forEach((property) => {
              query += `@${property}(min-width: `;
              calc = this.calculateValues(calc, 'px', '+', mainInstruction.number, mainInstruction.unit);
              instructions.forEach((instruction, instructionIndex) => {
                calc = this.calculateValues(calc, 'px', instruction.property, instruction.number, instruction.unit);
              });
              query += `${calc}px)`;
            });
          } else {
            const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
            properties.forEach((property) => {
              query += `@${property}(min-width: ${mainInstruction.number}${mainInstruction.unit})`;
            });
          }
        } else {
          if (instructions.length > 0 && (instructions[0].number && instructions[0].unit)) {
            const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
            properties.forEach((property) => {
              styles += `${property}: calc(${mainInstruction.number}${mainInstruction.unit}`;
              instructions.forEach((instruction, instructionIndex) => {
                styles += ` ${instruction.property} ${instruction.number}${instruction.unit}`;
              });
              styles += `) !important;`;
            });
          } else if (instructions.length > 0 && mainInstruction.number && mainInstruction.unit) {
            const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
            styles += `${properties[0]}: ${mainInstruction.number}${mainInstruction.unit} `;
            instructions.forEach((instruction, instructionIndex) => {
              styles += ` ${instruction.property}`;
            });
            styles += ` !important;`;
          } else if (instructions.length > 0) {
            const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
            styles += `${properties[0]}: `;
            instructions.forEach((instruction, instructionIndex) => {
              styles += instruction.property?` ${instruction.property}`:` ${instruction.number}${instruction.unit}`;
            });
            styles += ` !important;`;
          } else {
            const properties = Array.isArray(mainInstruction.property) ? mainInstruction.property : [mainInstruction.property];
            properties.forEach((property) => {
              styles += `${property}: ${mainInstruction.number}${mainInstruction.unit} !important;`;
            });
          }
        }
      });
      styles += `}`;
      data.push(query !== '' ? `${query}{${styles}}` : styles);
    });
    return data;
  }

  convertSubPartData(subPart) {
    if (subPart.startsWith('var')) {
      const propertyName = this.shorts[subPart.substring(3)] || subPart.substring(3);
      return {
        property: `var(-${propertyName})`,
        number: null,
        unit: null
      };
    }
     
    let regex = /(\D*[A-Za-z]+)(-?\d+)(\D*)/;
    let matches = subPart.match(regex);

    if (!matches || matches.length !== 4) {
       
       regex = /(-?\d+)(\D*)/;
       matches = subPart.match(regex);
       if (!matches || matches.length !== 3) {
         const propertyName = this.shorts[subPart] || subPart;
         return {
           property: propertyName
         }; 
       } else { 
            let number = parseInt(matches[1], 10);
            let unit = ( matches[2].endsWith('px')) ? 'rem' : matches[2];
            number = (unit === matches[2].endsWith('px')) ? number / 16 : number;
            unit = (unit === 'p') ? '%' : unit;
            console.log('number', number);
            console.log('unit', unit);
            return {
              property: null,
              number: number,
              unit: unit
            }; 
       }
       
       
    } else {
      const propertyName = this.shorts[matches[1]] || matches[1];
      const property = propertyName;
      let number = parseInt(matches[2], 10);
      let unit = (!Array.isArray(property) && (property.startsWith('media') || property.startsWith('container')) && !property.endsWith('px')) ? 'px' : matches[3];
      number = (unit === '') ? number / 16 : number;
      unit = (unit === '') ? 'rem' : unit;
      unit = (unit === 'p') ? '%' : unit;

      return {
        property: property,
        number: number,
        unit: unit
      };
    }
  }

  calculateValues(value1, unit1, operation, value2, unit2) {
    const remToPx = (rem) => rem * 16;

    if (unit1 !== unit2) {
      if (unit1 === 'rem' && unit2 === 'px') {
        value1 = remToPx(value1);
      } else if (unit1 === 'px' && unit2 === 'rem') {
        value2 = remToPx(value2);
      }
    }

    if (unit2 === '%') {
      value2 = (value1 * value2) / 100;
    }

    let result;
    switch (operation) {
      case '+':
        result = value1 + value2;
        break;
      case '-':
        result = value1 - value2;
        break;
      case '*':
        result = value1 * value2;
        break;
      case '/':
        result = value1 / value2;
        break;
      default:
        console.error('Invalid operation');
        return null;
    }

    return result;
  }

  applyStylesToDOM(styles) {
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';

    const stylesString = styles.join('\n');

    styleTag.appendChild(document.createTextNode(stylesString));

    // Entfernen des vorhandenen <style>-Elements, das Ihren Klassen entspricht
    const existingStyleTag = document.querySelector(`style.${this.prefix}-styles`);
    if (existingStyleTag) {
      existingStyleTag.remove();
    }

    styleTag.classList.add(`${this.prefix}-styles`);

    document.head.appendChild(styleTag);
  }

}

const cssfInstance = new CSSF();
